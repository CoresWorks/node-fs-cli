import { Command } from 'commander'
import chalk from 'chalk'

import fileController from '../controllers/file.js'

const { blue, green } = chalk

const addFileCommand = new Command('file')
  .option(blue('-p, --path [path]'), green('the path is create'))
  .option(blue('-f, --file [file]'), green('name file is create'))
  .action(async (...args) => fileController(args[0]))

export default addFileCommand
