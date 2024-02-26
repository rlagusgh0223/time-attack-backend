import { Router } from "express";
import userOnly from "../../guards/userOnly.guard";
import { CreatePostData } from "./posts/posts.type";
import tweetsService from "./tweets.service";

const tweetsControllers = Router();

// tweetsControllers.use(postsController);

tweetsControllers.get("/", async (_, res, next) => {
  try {
    const tweets = await tweetsService.getTweets();
    res.json(tweets);
  } catch (e) {
    next(e);
  }
});

tweetsControllers.post("/", userOnly, async (req, res, next) => {
  const { title, content } = req.body;
  const authorId = req.user!.id;
  const createPostData: CreatePostData = {
    title,
    content,
    authorId,
  };
  const post = await tweetsService.createTweets(createPostData);
  res.json(post);
});

export default tweetsControllers;
