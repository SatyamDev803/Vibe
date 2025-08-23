import express from "express";
import prisma from "../utils/db.js";

const router = express.Router();

router.post("/connect", async (req, res) => {
  try {
    const { wallet } = req.body;
    if (!wallet) return res.status(400).json({ error: "Wallet is required" });

    const user = await prisma.user.upsert({
      where: { wallet },
      update: {},
      create: { wallet },
    });

    res.json({ success: true, user });
  } catch (err) {
    console.error("Wallet connect error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
