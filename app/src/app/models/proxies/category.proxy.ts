import { CommentProxy } from "./comment.proxy";

export interface CategoryProxy {
    id: number;
    name: string;
    color: string;

    comments?: CommentProxy[];
}