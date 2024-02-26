import { Router } from "express";
import accountsControllers from "./accounts/accounts.controller";
import tweetsControllers from "./tweets/tweets.controller";

const controllers = Router();

controllers.use("/tweets", tweetsControllers);
controllers.use("/accounts", accountsControllers);
controllers.get("/health-check", (req, res, next) => {
  res.json("health-check");
});

export default controllers;
