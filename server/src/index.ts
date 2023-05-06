import { createServer } from "http";
// import express from 'express'
import { getPublicDirPath } from "./config";
import { makDir } from "./utils";
import { createExpressApp } from "./express";
import type { MongoDB } from "./mongodb";
import { connectAndUseDB } from "./mongodb";

makDir(getPublicDirPath())

const connectCallback = (db: MongoDB) => {

  const hostname ='localhost', port=4000

  createServer(createExpressApp(db)).listen(port, () =>
    console.log(`connect http://${hostname}:${port}`)
  )
}
connectAndUseDB(connectCallback, 'homedb')

// const hostname ='localhost', port=4000

// const app = express()
// .get('/', (req,res) => {
//   res.json({message:'Hello express World!'})
// })

// createServer((req,res) => {
//   console.log('req.url', req.url)
//   console.log('req.method', req.method)
//   console.log('req.headers', req.headers)
//   res.write('hello world')
//   res.end()

// }).listen(port, () => console.log(`connect http://${hostname}:${port}`))

// createServer(app).listen(port, () => console.log(`connect http://${hostname}:${port}`))

// createServer(createExpressApp()).listen(port, () => 
//   console.log(`connect http://${hostname}:${port}`)
// )