import fs from 'node:fs/promises'
import { join } from 'node:path'
import chalk from 'chalk'

import { FOLDER_REGEXP } from '../regexps.js'
const { red, green } = chalk

export default async function folderController(args: {
  folder?: string
  path?: string
}): Promise<void> {
  try {
    if (args.folder && args.path) {
      const path =
        join(args.path, args.folder) || join(process.cwd(), args.folder)
      if (!FOLDER_REGEXP.test(path))
        return console.log(red('Is path is not valid'))
      return await fs
        .mkdir(path)
        .then(() => {
          return console.log(green('Folder is create successfully'))
        })
        .catch((err) => {
          throw new Error(err)
        })
    }

    console.log('is working')
  } catch (err) {
    return console.log(red(err))
  }
}
