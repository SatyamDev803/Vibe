import prisma from "./utils/db.js";

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const likedIds = await prisma.like.findMany({
      where: { likerId: userId },
      select: { likedId: true },
    });

    const excludeIds = likedIds.map((l) => l.likedId).concat(userId);

    const profiles = await prisma.user.findMany({
      where: {
        id: { notIn: excludeIds },
      },
      take: 20,
    });

    res.json(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch profiles" });
  }
}
