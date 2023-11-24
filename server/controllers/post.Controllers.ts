import asyncHandler from 'express-async-handler'
import { db } from '../datastore/index'
import { RequestHandler } from 'express';
import { Post } from '../types';
import crypto from 'crypto'

export type ExpressHandler<Req, Res> = RequestHandler<string, Partial<Res>, Partial<Req> , any>;

type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>

interface CreatePostResponse{};

const createPost : ExpressHandler<CreatePostRequest, CreatePostResponse> = async (req, res, next) => {
    const {title, url , userId} = req.body;
    if(!title || !userId || !url)
        return res.sendStatus(400);
    const post : Post = {
        postedAt : Date.now(),
        id : crypto.randomUUID(),
        title,
        userId,
        url
    }
    db.createPost(post);
    res.send(post);
}


const getAllPosts : ExpressHandler<{} , {}> = asyncHandler(async (req, res, next) => {
    res.send({posts : db.listPosts()});
})

export {getAllPosts , createPost}