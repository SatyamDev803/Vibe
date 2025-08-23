export default async function handler(req, res) {
  const { message } = req.body;

  try {
    res.json({ approved: true, message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to moderate message" });
  }
}
