import { createServer } from "http";
import { Db } from "mongodb";
import { useState, useCallback } from "react";
import { connectAndUseDB, MongoDB } from "../../mongodb";
import {get} from '../../server'
import * as M from '../../mongodb';


// const connectCallback = (db: MongoDB) => {
//   const hostname = 'localhost', port = 4000

//   createServer(createExpressApp(db)).listen(port, () =>
//   console.log(`connect http://${hostname}:${port}`)
//   )
// }
// const connectCB = (db: M.MongoDB) => {
//   console.log('db', db)
// }

// connectAndUseDB(connectCB, 'homedb')


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

