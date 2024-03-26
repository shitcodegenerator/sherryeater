export type ArticleType = 'news' | 'knowledge';

export  interface Article {
    _id: string;
    author: string;
    avatar: string;
    summary: string;
    title: string;
    categoryId: string;
    type: ArticleType;
    content: string;
    image: string;
    created_at: string;
    id: string;
    __v: number;
}