import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userProfileRoutes from "./routes/userProfile.js";
import getProfiles from "./get-profiles.js";
import getScore from "./get-score.js";
import getUserStats from "./get-user-stats.js";
import moderateChat from "./moderate-chat.js";
import recordLike from "./record-like.js";
import storageRoutes from "./routes/storage.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/user", userProfileRoutes);
app.use("/storage", storageRoutes);

// Custom APIs
app.get("/api/get-profiles", getProfiles);
app.get("/api/get-score", getScore);
app.get("/api/get-user-stats", getUserStats);
app.post("/api/moderate-chat", moderateChat);
app.post("/api/record-like", recordLike);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
