import { Like, Comment, Post, User } from '../../types';
import { DataStore } from '../index';

export class InMemoryDataStore implements DataStore {
  private users: Array<User> = [];
  private posts: Array<Post> = [];
  private likes: Array<Like> = [];
  private comments: Array<Comment> = [];

  updatePostById(postId: string, newPost: Post) {
    const index: number = this.posts.findIndex(el => el.id === postId);
    console.log(index);
    console.log(newPost);

    if (index !== -1) this.posts[index] = { ...this.posts[index], ...newPost };
  }

  createLike(like: Like): void {
    this.likes.push(like);
  }

  createComment(comment: Comment): void {
    this.comments.push(comment);
  }

  deleteCommentById(commentId: string): void {
    const index: number = this.comments.findIndex(el => el.id === commentId);
    if (index === -1) {
      return;
    }
    this.posts.splice(index, 1);
  }

  listComments(postId: string): Array<Comment> {
    return this.comments.filter(el => el.postId === postId);
  }

  createPost(post: Post): void {
    this.posts.push(post);
  }

  listPosts(): Array<Post> {
    return this.posts;
  }

  getPostById(postId: string): Post | undefined {
    return this.posts.find(el => el.id === postId);
  }

  deletePostById(postId: string): void {
    const index: number = this.posts.findIndex(el => el.id === postId);
    if (index === -1) {
      return;
    }
    this.posts.splice(index, 1);
  }

  createUser(user: User): void {
    this.users.push(user);
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find(el => el.email.toString() === email.toString());
  }

  getUserByUsername(username: string): User | undefined {
    return this.users.find(el => el.username.toString() === username.toString());
  }
}
