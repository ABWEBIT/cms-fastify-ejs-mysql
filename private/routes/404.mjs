export default async (app,options) => {

  app.setNotFoundHandler(async (request,reply) => {
    let data = {
      title: 'Ошибка 404',
      content: 'Страница не найдена'
    }
    return reply.status(404).viewAsync('404.ejs',data)
  });

}