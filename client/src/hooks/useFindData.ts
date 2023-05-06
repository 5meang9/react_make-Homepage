import { useEffect } from "react";
// import * as M from '../mongodb'

export const useFindData = async(
  // db: M.MongoDB,
  collectionName: string
)=>{
  try{
    // const boards = db.collection('boards')

    // const many = await boards.find({}).toArray()
    // console.log('many', many)
    // console.log(many[0].badge_title)
  } catch (e){
    if (e instanceof Error) console.log(e.message)
  }
}