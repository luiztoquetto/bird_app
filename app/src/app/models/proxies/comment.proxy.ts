import { CategoryProxy } from "./category.proxy";

export interface CommentProxy {
    id: number;
    createdAt: string;
    message: string;
    personName: string;
    personEmoji: string;
    personColor: string;
    categoryId: number;

    category?: CategoryProxy;
}