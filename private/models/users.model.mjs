import {pool} from '../config/db.mjs'

export class UsersModel{
//--------------------
  static async usersTotal(){
    const sql = 'SELECT COUNT(*) FROM users'
    const con = await pool.getConnection()
    try{
      const [data] = await con.query(sql)
      return Object.values(data[0])
    }
    catch(error){
      throw new Error(error.message)
    }
    finally{
      con.release()
    }
  }
//--------------------
  static async usersInfo(limit,offset){
    const sql = 'SELECT userId,userUsername,userEmail,userRole,userCreated FROM users LIMIT ? OFFSET ?'
    const con = await pool.getConnection()
    try{
      const [data] = await con.query(sql,[Number(limit),Number(offset)])
      return data
    }
    catch(error){
      throw new Error(error.message)
    }
    finally{
      con.release()
    }
  }
//--------------------
  static async userProfile(userId){
    const sql = 'SELECT userId,userUsername,userEmail,userRole,userCreated FROM users WHERE userId = ?'
    const con = await pool.getConnection()
    try{
      const [data] = await con.query(sql,[userId])
      return data
    }
    catch(error){
      throw new Error(error.message)
    }
    finally{
      con.release()
    }
  }
//--------------------
  static async userCreate(userUsername,userEmail,userPassword,userRole){
    const sql = 'INSERT INTO users (userUsername,userEmail,userPassword,userRole) VALUES (?,?,?,?)'
    const con = await pool.getConnection()
    try{
      const [userLast] = await con.execute(sql,[userUsername,userEmail,userPassword,userRole])
      return true
    }
    catch(error){
      throw new Error(error.message)
    }
    finally{
      con.release()
    }
  }
//--------------------
  static async userUpdate(userId,userUsername,userEmail,userPassword,userRole){
    const sql = 'UPDATE users SET userUsername = ?, userEmail = ?, userRole = ? WHERE userId = ?'
    const con = await pool.getConnection()
    try{
      await con.execute(sql,[userUsername,userEmail,userRole,userId])
      return true
    }
    catch(error){
      throw new Error(error.message)
    }
    finally{
      con.release()
    }
  }
//--------------------
  static async usersDelete(usersId){
    const sql = 'DELETE FROM users WHERE userId IN (?) AND userId NOT IN (1)'
    const con = await pool.getConnection()
    try{
      const [data] = await con.query(sql,[usersId])
      return data.affectedRows
    }
    catch(error){
      throw new Error(error.message)
    }
    finally{
      con.release()
    }
  }
//--------------------
  static async usersSearch(searchQuery){
    const sql = 'SELECT userId, userUsername, userEmail, userRole, userCreated FROM users WHERE userUsername LIKE ? LIMIT 10'
    const con = await pool.getConnection()
    try{
      const [data] = await con.query(sql,[`%${searchQuery}%`])
      return data
    }
    catch(error){
      throw new Error(error.message)
    }
    finally{
      con.release()
    }
  }
//--------------------
}