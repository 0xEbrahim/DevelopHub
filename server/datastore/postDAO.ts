import { Post } from '../types';

type postOrNot = Post | undefined;

export interface PostDao {
  createPost(post: Post): void;
  listPosts(): Array<Post>;
  getPostById(postId: string): postOrNot;
  updatePostById(postId: string, newPost: Post): void;
  deletePostById(postId: string): void;
}
