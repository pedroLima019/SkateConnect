import { Router } from "express";
import passport from "../utils/passport";

const router = Router();

// 🔹 Inicia o login com o Google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// 🔹 Callback após login do Google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "http://localhost:5173/feed", // 👉 redireciona para o frontend
  })
);

export default router;
