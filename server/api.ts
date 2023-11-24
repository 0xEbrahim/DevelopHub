import { Post, Comment, Like, User } from './types';

/**
 * @desc Posts APIs Types & design
 */
export interface ListPostsRequest {}
export interface ListPostsResponse {
  posts: Array<Post>;
}
export type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>;
export interface CreatePostResponse {}
export interface GetPostRequest {}
export interface GetPostResponse {
  post: Post;
}
export interface UpdatePostRequest {
  post: Post | undefined;
}
export interface UpdatePostResponse {
  post: Post;
}
export interface DeletePostRequest {}
export interface DeletePostResponse {}

// Comments APIs
export type CreateCommentRequest = Pick<Comment, 'userId' | 'postId' | 'comment'>;
export interface CreateCommentResponse {}
export interface ListCommentsRequest {}
export interface ListCommentsResponse {
  comments: Array<Comment>;
}
export interface DeleteCommentRequest {}
export interface DeleteCommentResponse {}

// Likes APIs
export type CreateLikeRequest = Pick<Like, 'userId' | 'postId'>;
export interface CreateLikeResponse {}

// Users APIs

export type CreateUserRequest = Pick<User, 'password' | 'email' | 'username' | 'lastName' | 'firstName'>;
export interface CreateUserResponse {}
export interface UpdateUserRequest {}
export interface UpdateUserResponse {
  user: User;
}
