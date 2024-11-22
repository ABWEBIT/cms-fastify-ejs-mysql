import {UsersController} from '../controllers/users.controller.mjs'

export default async (app,options) => {
  app.get   ('/admin/users', UsersController.usersTable)
  app.delete('/admin/users', UsersController.usersDelete)
  app.post  ('/admin/users', UsersController.usersSearch)

  app.post  ('/admin/users/data', UsersController.requestData)

  app.get   ('/admin/users/user-edit/:userId', UsersController.userProfile)
  app.put   ('/admin/users/user-edit/:userId', UsersController.userUpdate)

  app.get   ('/admin/users/user-new', UsersController.userForm)
  app.post  ('/admin/users/user-new', UsersController.userCreate)
}