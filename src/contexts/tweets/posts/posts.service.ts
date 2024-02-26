import prismaClient from "../../../prisma/client.prisma";
import { CreatePostData } from "./posts.type";

const createPost = async (createPostData: CreatePostData) => {
  const { authorId, title, content } = createPostData;
  const post = await prismaClient.post.create({
    data: {
      title,
      content,
      author: { connect: { id: authorId } },
    },
  });
  console.log("createPost");
  return post;
};

const getPosts = async () => {
  const posts = await prismaClient.post.findMany();
  console.log("getPosts");
  return posts;
};

const postsService = {
  createPost,
  getPosts,
};
export default postsService;

//======================================

// class PostsService {
//   async createPost(
//     req: Request<never, unknown, { title: string; content: string }>,
//     res: Response,
//     next: NextFunction
//   ) {
//     try {
//       const authorId = req.user?.id;
//       const { title, content } = req.body;

//       // console.log(authorId);
//       console.log(req.body);
//       const post = await prismaClient.post.create({
//         data: {
//           title,
//           content,
//           author: { connect: { id: authorId } },
//         },
//         select: { id: true, title: true, content: true },
//       });
//       console.log("createPost");
//       res.json(post);
//     } catch (e) {
//       next(e);
//     }
//   }

//   async getPosts(_: Request, res: Response) {
//     const posts = await prismaClient.post.findMany();
//     // const posts = await prismaClient.user.findMany();
//     console.log("getPosts");
//     res.json(posts);
//   }
// }

// const postsService = new PostsService();
// export default postsService;
