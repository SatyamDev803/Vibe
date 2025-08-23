import prisma from "./utils/db.js";
import contract from "./utils/contract.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { likerId, likedId } = req.body;

  try {
    // Save like in DB
    const like = await prisma.like.create({
      data: { likerId, likedId },
    });

    // Check reverse like
    const reverseLike = await prisma.like.findUnique({
      where: { likerId_likedId: { likerId: likedId, likedId: likerId } },
    });

    let match = null;
    if (reverseLike) {
      const [aId, bId] = [likerId, likedId].sort();
      match = await prisma.match.upsert({
        where: { aId_bId: { aId, bId } },
        update: {},
        create: { aId, bId },
      });

      // ✅ Record on-chain match
      const tx = await contract.recordMatch(aId, bId);
      await tx.wait();
    }

    res.json({ like, match });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to record like" });
  }
}
