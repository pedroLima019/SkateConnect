import express from "express";
import dotenv from "dotenv";
import session from "cookie-session";
import passport from "passport";
import "./utils/passport"; // vamos criar já já
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  session({
    name: "session",
    keys: [process.env.SESSION_SECRET || "defaultsecret"],
    maxAge: 24 * 60 * 60 * 1000, // 1 dia
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
