import asyncHandler from 'express-async-handler';
import { db } from '../datastore/index';
import { ExpressHandler } from '../types';
import { Post } from '../types';
import crypto from 'crypto';
import { CreatePostRequest, CreatePostResponse, ListPostsRequest, ListPostsResponse, UpdatePostRequest, UpdatePostResponse } from '../api';

const createPost: ExpressHandler<CreatePostRequest, CreatePostResponse> = async (req, res, next) => {
  const { title, url, userId } = req.body;
  if (!title || !userId || !url) return res.sendStatus(400);
  const post: Post = {
    postedAt: Date.now(),
    id: crypto.randomUUID(),
    title,
    userId,
    url,
  };
  db.createPost(post);
  res.send(post);
};

const getAllPosts: ExpressHandler<ListPostsRequest, ListPostsResponse> = asyncHandler(async (req, res, next) => {
  res.send({ posts: db.listPosts() });
});

const updatePost: ExpressHandler<UpdatePostRequest, UpdatePostResponse> = async (req, res, next) => {
  const { id } = req.params;
  console.log('ID => ', id);
  if (id) db.updatePostById(id, req.body as Post);
  res.sendStatus(200);
};

export { getAllPosts, createPost, updatePost };
