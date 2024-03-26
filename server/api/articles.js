import Article from '@/server/models/article.js';

export default defineEventHandler(async event => {
  try {
    // const id = getRouterParam(event, 'page');
    // const { name, email } = await readBody(event);
    const query = getQuery(event)
    let { page = 1, sort = 1, type = 'knowledge' } = query
     page = parseInt(page) 
    const perPage = 10; // Number of articles per page

    const articles = await Article.find({ 
      ...(type && { type })
     })
    .skip((page - 1) * perPage)
    .limit(perPage)
    .sort({ created_at: +sort }); // Sort by created_at in descending order

  const totalArticles = await Article.countDocuments();

  return { data: articles, total: totalArticles }

  } catch (error) {
    const articles = Article
    return createError({error, message: articles});
  }
});

// export default defineEventHandler(() => 'Test get handler')