import prismaClient from "../../prisma/client.prisma";
import postsService from "./posts/posts.service";

const getTweets = async () => {
  const tweets = await prismaClient.tweets.findMany();
  return tweets;
};

const createTweets = async (createPostData: {
  authorId: string;
  title: string;
  content: string;
}) => {
  const post = await postsService.createPost(createPostData);
  return post;
};

const tweetsService = {
  getTweets,
  createTweets,
};
export default tweetsService;
