import {UsersModel} from '../models/users.model.mjs'

export class UsersController{
//--------------------
  static sharedData = {
    entriesLimit: 10,
    pagesCurrent: 1
  };
//--------------------
  static async usersTable(request,reply){
    try{
      const data = await UsersController.requestData(request,reply)
      return reply.viewAsync('users.ejs',data)
    }
    catch(error){
      throw new Error(error.message)
    }
  }
//--------------------
  static async requestData(request,reply){
    try{
      const entriesLimit = Number.parseInt(UsersController.sharedData.entriesLimit)
      const entriesTotal = Number.parseInt(await UsersModel.usersTotal())
      const pagesTotal = Number.parseInt(Math.ceil(entriesTotal / entriesLimit))
      const pagesCurrent = Number.parseInt(UsersController.sharedData.pagesCurrent)
      const entriesOffset = Number.parseInt((pagesCurrent - 1) * entriesLimit)

      const usersData = await UsersModel.usersInfo(entriesLimit,entriesOffset)

      let data = {}

      if(request.body && request.body.dataType === 'paginationData'){
        data = {
          entriesTotal: entriesTotal,
          pagesTotal: pagesTotal,
          pagesCurrent: pagesCurrent
        }
      }
      else{
        data = {
          title: 'Пользователи',
          usersData: usersData
        }
      }
      return data
    }
    catch(error){
      throw new Error(error.message)
    }
  }
//--------------------
  static async usersDelete(request,reply){
    const usersId = request.body.itemsId
    const pagesCurrentNumber = Number.parseInt(request.query.page ? request.query.page : 1)
    const options = {pagesCurrentNumber}

    try{
      await UsersModel.usersDelete(usersId)
      const data = await UsersController.requestData(options)
      return data
    }
    catch(error){
      throw new Error(error.message)
    }
  }
//--------------------
  static async usersSearch(request,reply){
    const {searchQuery} = request.body
    try{
      const data = await UsersModel.usersSearch(searchQuery)
      return data
    }
    catch(error){
      throw new Error(error.message)
    }
  }
//--------------------
  static async userProfile(request,reply){
    const {userId} = request.params
    try{
      const userData = await UsersModel.userProfile(userId)
      const data = {
        title: 'Профиль пользователь',
        userId: userData[0].userId,
        userUsername: userData[0].userUsername,
        userEmail: userData[0].userEmail,
        userRole: userData[0].userRole,
        userCreated: (userData[0].userCreated).toISOString().slice(0, 19).replace('T', ' ')
      }
      return reply.viewAsync('user-edit.ejs',data)
    }
    catch(error){
      const data = {
        title: 'Ошибка',
        content: 'Пользователь не найден'
      }
      return reply.status(404).viewAsync('404.ejs',data)
      //throw new Error(error.message)
    }
  }
//--------------------
  static async userUpdate(request,reply){
    const {userId,userUsername,userEmail,userPassword,userRole} = request.body
    try{
      await UsersModel.userUpdate(userId,userUsername,userEmail,userPassword,userRole)
      return true
    }
    catch(error){
      throw new Error(error.message)
    }
  }
//--------------------
  static async userForm(request,reply){
    const data = {
      title: 'Создание пользователя'
    }
    return reply.viewAsync('user-new.ejs',data)
  }
//--------------------
  static async userCreate(request,reply){
    const {userUsername,userEmail,userPassword,userRole} = request.body
    try{
      await UsersModel.userCreate(userUsername,userEmail,userPassword,userRole)
      return true
    }
    catch(error){
      throw new Error(error.message)
    }
  }
//--------------------
}