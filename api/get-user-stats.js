import prisma from "./utils/db.js";

export default async function handler(req, res) {
  const { userId } = req.query;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        matchesA: true,
        matchesB: true,
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const matches = user.matchesA.concat(user.matchesB);

    res.json({
      dailySwipeCount: user.dailySwipeCount,
      matchCount: matches.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch user stats" });
  }
}
