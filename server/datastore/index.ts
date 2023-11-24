import { CommentDao } from "./commentDAO";
import { LikeDao } from "./likeDAO";
import { InMemoryDataStore } from "./memoryDb";
import { PostDao } from "./postDAO";
import { UserDao } from "./userDAO";

export interface DataStore extends LikeDao, CommentDao, PostDao, UserDao {}

export const db = new InMemoryDataStore();