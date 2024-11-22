export default async (app,options) => {

  app.get('/admin/articles', async (request,reply) => {
    let data = {
      title: 'Статьи',
      content: '...'
    }
    return reply.viewAsync('articles.ejs',data)
  })

}