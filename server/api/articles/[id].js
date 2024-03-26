import Article from '@/server/models/article.js';

export default defineEventHandler(async event => {
  try {
    const id = getRouterParam(event, 'id');

    const article = await Article.findOne({ id });
  
    if (!article) {
      return { 
        data: ''
      }
    }

    return {
      data: article
    }

  return { data: articles, total: totalArticles }

  } catch (error) {
    const articles = Article
    return createError({error, message: articles});
  }
});

// export default defineEventHandler(() => 'Test get handler')