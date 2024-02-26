import { Router } from "express";
import postsService from "./posts.service";
import { CreatePostData } from "./posts.type";

const postsController = Router();

postsController.get("/", async (req, res, next) => {
  try {
    const post = postsService.getPosts();
    res.json(post);
    console.log("get");
  } catch (e) {
    next(e);
  }
});

postsController.post("/", async (req, res, next) => {
  console.log("post");
  const { title, content } = req.body;
  const authorId = req.user!.id;
  const createPostData: CreatePostData = {
    title,
    content,
    authorId,
  };
  const post = await postsService.createPost(createPostData);
  res.json(post);
});

// postsController.post("/", (req, res, next) => {
//   res.json(postsService.createPost);
//   console.log("post");
// });
// postsController.get("/", (req, res, next) => {
//   res.json(postsService.getPosts);
//   console.log("get");
// });

export default postsController;
