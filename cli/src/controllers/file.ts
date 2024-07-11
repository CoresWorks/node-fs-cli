import fs from 'node:fs/promises'
import { join } from 'node:path'
import chalk from 'chalk'

import { FILE_REGEXP } from '../regexps.js'
const { red, green } = chalk

export default async function fileController(args: {
  file?: string
  path?: string
}): Promise<void> {
  try {
    if (args.file) {
      let path: string
      if (typeof args.path !== 'string') path = join(process.cwd(), args.file)
      else path = join(args.path, args.file)

      if (!FILE_REGEXP.test(path))
        return console.log(red('Is file is not valid'))

      return await fs
        .writeFile(path, '')
        .then(() => {
          return console.log(green('file is create successfully'))
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
