import { createServer } from "http";
import { Db } from "mongodb";
import { useState, useCallback } from "react";
// import { connectAndUseDB, MongoDB } from "../../mongodb";
import {get} from '../../server'
// import * as M from '../../mongodb';


// const connectCallback = (db: MongoDB) => {
//   const hostname = 'localhost', port = 3000

//   createServer(createExpressApp(db)).listen(port, () =>
//   console.log(`connect http://${hostname}:${port}`)
//   )
// }
// const connectCB = (db: M.MongoDB) => {
//   console.log('db', db)
// }

// connectAndUseDB(connectCallback, 'homedb')


// const connectCB = async (db: M.MongoDB) => {
//   try{
//     const boards = db.collection('boards')
//     // const one = await boards.findOne({})
//     // console.log('one', one)

//     const many = await boards.find({}).toArray()
//     console.log('many', many)
//     console.log(many[0].badge_title)
//   } catch (e){
//     if (e instanceof Error) console.log(e.message)
//   }
// }

// const findTest = () => {
//   M.connectAndUseDB(connectCB, 'homedb')
// }

// findTest()


export default function Board(){
  const [data, setData] = useState<Object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const getAllTest = useCallback(()=>{
    get('/boards')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  },[])

  const getTest = useCallback(()=>{
    get('/boards/0')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  },[])

  return (
    <div>
      <button onClick={getAllTest}>Get</button>
      <div>
        <p>data {JSON.stringify(data, null, 2)}</p>
        {errorMessage && <p>error : {errorMessage}</p>}
      </div>
    </div>
  )
}
function createExpressApp(db: Db): import("http").RequestListener<typeof import("http").IncomingMessage, typeof import("http").ServerResponse> | undefined {
  throw new Error("Function not implemented.");
}
// export default function Board(){
//   const connectCB = async (db: M.MongoDB) => {
//     try{
//       const boards = db.collection('boards')
//       // const one = await boards.findOne({})
//       // console.log('one', one)
  
//       const many = await boards.find({}).toArray()
//       // console.log('many', many)
//       // console.log(many[0].badge_title)
//     } catch (e){
//       if (e instanceof Error) console.log(e.message)
//     }
//   }
  
//   const findTest = () => {
//     M.connectAndUseDB(connectCB, 'homedb')
//   }
  
//   findTest()
// }
