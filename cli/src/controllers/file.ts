import fs from 'node:fs/promises'
import { join } from 'node:path'
import chalk from 'chalk'
import prompt from 'prompts'
import ora from 'ora'

import { FILE_REGEXP, FOLDER_REGEXP } from '../regexps.js'
import { AddFileQuestions, RmvFileQuestions } from '../questions.js'
const { red, green } = chalk

export async function addFileController(args: {
  file?: string
  path?: string
}): Promise<void> {
  const spinner = ora({
    text: 'Creating...',
    color: 'green',
    spinner: 'balloon'
  })
  try {
    if (args.file) {
      let path: string
      if (typeof args.path !== 'string') path = join(process.cwd(), args.file)
      else path = join(args.path, args.file)

      if (!FILE_REGEXP.test(path))
        return console.log(red('Is file is not valid'))

      const spinner = ora({
        text: 'Creating...',
        color: 'green',
        spinner: 'balloon'
      })
      spinner.start()

      return await fs
        .writeFile(path, '')
        .then(() => {
          spinner.succeed()
          return console.log(green('File is create successfully'))
        })
        .catch((err) => {
          spinner.fail()
          throw new Error(err)
        })
    }

    const res = await prompt(AddFileQuestions)

    spinner.start()

    const path = join(res.dir, res.file)

    return await fs
      .writeFile(path, '')
      .then(() => {
        spinner.succeed()
        return console.log(green('File is create successfully'))
      })
      .catch((err) => {
        throw new Error(err)
      })
  } catch (err) {
    spinner.fail(red(err))
    return
  }
}

export async function rmvFileController(args: {
  file?: string
  path?: string
}): Promise<void> {
  const spinner = ora({
    text: 'Deleting...',
    color: 'green',
    spinner: 'balloon'
  })
  try {
    if (args.file) {
      let path: string
      if (typeof args.path !== 'string') path = join(process.cwd(), args.file)
      else path = join(args.path, args.file)

      if (!FILE_REGEXP.test(path))
        return console.log(red('Is file is not valid'))

      spinner.start()

      return await fs
        .rm(path)
        .then(() => {
          spinner.succeed(green('File is removed successfully'))
          return
        })
        .catch((err) => {
          throw new Error(err)
        })
    }

    const res = await prompt(RmvFileQuestions)

    spinner.start()

    const path = join(res.dir, res.file)

    await fs
      .rm(path)
      .then(() => {
        spinner.succeed(green('File is removed successfully'))
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
