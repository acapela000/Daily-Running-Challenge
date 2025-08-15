import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import challengeRoutes from "./routes/challengeRoutes";
import resultRoutes from "./routes/resultRoutes";
import leaderboardRoutes from "./routes/leaderboardRoutes";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/challenges", challengeRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
