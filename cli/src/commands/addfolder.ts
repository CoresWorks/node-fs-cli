import { Command } from 'commander'
import chalk from 'chalk'

import folderController from '../controllers/folder.js'

const { blue, green } = chalk

const addFolCommand = new Command('folder')
  .option(blue('-p, --path [path]'), green('the path is create'))
  .option(blue('-f, --folder [folder]'), green('name folder is create'))
  .action(async (...args) => folderController(args[0]))

export default addFolCommand
