export default async (app,options) => {

  app.get('/admin/settings', async (request,reply) => {
    let data = {
      title: 'Настройки',
      content: '...'
    }
    return reply.viewAsync('settings.ejs',data)
  })

}