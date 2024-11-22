export default async (app,options) => {

  app.get('/', async (request,reply) => {
    let data = {
      title: 'Главная',
      content: '...'
    }
    return reply.viewAsync('index.ejs',data)
  })

}