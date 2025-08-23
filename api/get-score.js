import prisma from "./utils/db.js";

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { likesGiven: true, likesReceived: true },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const score = user.likesReceived.length - user.likesGiven.length;
    res.json({ score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to calculate score" });
  }
}
