import fs from 'node:fs/promises'
import { join } from 'node:path'
import chalk from 'chalk'

import { FOLDER_REGEXP } from '../regexps.js'
import ora from 'ora'
import prompt from 'prompts'
import { RmvFolQuestions } from '../questions.js'
const { red, green } = chalk

export async function addFolderController(args: {
  folder?: string
  path?: string
}): Promise<void> {
  const spinner = ora({
    text: 'Creating...',
    color: 'green',
    spinner: 'balloon'
  })

  try {
    if (args.folder) {
      let path: string
      if (typeof args.path !== 'string') path = join(process.cwd(), args.folder)
      else path = join(args.path, args.folder)

      if (!FOLDER_REGEXP.test(path))
        return console.log(red('Is path is not valid'))

      spinner.start()

      return await fs
        .mkdir(path)
        .then(() => {
          spinner.succeed(green('Folder is create successfully'))
          return
        })
        .catch((err) => {
          throw new Error(err)
        })
    }

    const res = await prompt(RmvFolQuestions)

    const path = join(res.dir, res.folder)

    if (!FOLDER_REGEXP.test(path))
      return console.log(red('Is path is not valid'))

    spinner.start()
  } catch (err) {
    return console.log(red(err))
  }
}

export async function rmvFolderController(args: {
  folder?: string
  path?: string
}): Promise<void> {
  const spinner = ora({
    text: 'Deleting...',
    color: 'green',
    spinner: 'balloon'
  })

  try {
    if (args.folder) {
      let path: string
      if (typeof args.path !== 'string') path = join(process.cwd(), args.folder)
      else path = join(args.path, args.folder)

      if (!FOLDER_REGEXP.test(path))
        return console.log(red('Is path is not valid'))

      spinner.start()

      return await fs
        .rmdir(path)
        .then(() => {
          spinner.succeed(green('Folder is removed successfully'))
          return
        })
        .catch((err) => {
          throw new Error(err)
        })
    }

    const res = await prompt(RmvFolQuestions)

    const path = join(res.dir, res.folder)

    if (!FOLDER_REGEXP.test(path))
      return console.log(red('Is path is not valid'))

    spinner.start()

    return await fs
      .rmdir(path)
      .then(() => {
        spinner.succeed(green('Folder is removed successfully'))
        return
      })
      .catch((err) => {
        throw new Error(err)
      })
  } catch (err) {
    spinner.fail(red(err))
    return
  }
}
