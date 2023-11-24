import { RequestHandler } from 'express';

export type ExpressHandler<Req, Res> = RequestHandler<any, Partial<Res>, Partial<Req>, any>;
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface Post {
  id: string;
  title: string;
  url: string;
  userId: String;
  postedAt: number;
}

export interface Like {
  userId: string;
  postId: string;
}

export interface Comment {
  userId: string;
  postId: string;
  id: string;
  comment: string;
  postedAt: number;
}
