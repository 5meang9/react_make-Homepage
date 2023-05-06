import fs from 'fs'

export const makDir = (dirName: string) => {
  if(false == fs.existsSync(dirName)) fs.mkdirSync(dirName)
}