import { Comment } from "../types";

export interface CommentDao {
    createComment(comment : Comment) : void;
    deleteCommentById(commentId : string) : void;
    listComments(postId : string) : Array<Comment>;
}