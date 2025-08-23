import express from "express";
import greenfieldClient from "../utils/greenfield.js";
import multer from "multer";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Upload endpoint
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileName = req.file.originalname;
    const fileData = fs.readFileSync(filePath);

    const response = await greenfieldClient.putObject({
      bucketName: "vibe-user-data", // you must create this bucket in Greenfield
      objectName: `${Date.now()}-${fileName}`,
      body: fileData,
    });

    // response will have the object URL on Greenfield
    return res.json({ success: true, url: response.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
