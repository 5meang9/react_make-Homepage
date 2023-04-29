import * as M from '../mongodb'

const connectCB = async (db: M.MongoDB) => {
  try{
    const boards = db.collection('boards')
    const one = await boards.findOne({})
    console.log('one', one)

    const many = await boards.find({}).toArray()
    console.log('many', many)
  } catch (e){
    if (e instanceof Error) console.log(e.message)
  }
}

const findTest = () => {
  M.connectAndUseDB(connectCB, 'homedb')
}

findTest()