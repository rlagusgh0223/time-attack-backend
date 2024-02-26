import { Router } from "express";
import usersService from "./users.service";

const userController = Router();

// signUp
userController.post<
  "/sign-up",
  never,
  { accessToken: string },
  { email: string; password: string }
>("/sign-up", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const accessToken = await usersService.signUp({ email, password });

    res.json({ accessToken });
  } catch (e) {
    next(e);
  }
});

//logIn
userController.post<
  "/log-in",
  never,
  { accessToken: string },
  { email: string; password: string }
>("/log-in", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const accessToken = await usersService.logIn({ email, password });

    res.json({ accessToken });
  } catch (e) {
    next(e);
  }
});

export default userController;
