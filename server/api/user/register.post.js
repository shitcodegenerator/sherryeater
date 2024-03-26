// import Article from '@/server/models/article.js';

import axios from 'axios'
import https from 'https'



export default defineEventHandler(async event => {
  try {
    // const id = getRouterParam(event, 'id');
    const body = await readBody(event)
    // const article = await Article.findOne({ id });
    const data = {
      grant_type: 'authorization_code',
      code: body.code,
      client_id: 2004045021,
      client_secret: '076a9cddc12b1ea0e7fe0bc2a1de7281',
      redirect_uri: 'http://localhost:3000/login'
    }
    const res = await https.post('https://api.line.me/oauth2/v2.1/token', data)

    return { data: res }
  
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
    // const articles = Article
    return createError({error, message: error.data});
  }
});

// export default defineEventHandler(() => 'Test get handler')