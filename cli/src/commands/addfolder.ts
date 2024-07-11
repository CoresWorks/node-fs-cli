import { Command } from 'commander'
import folderController from '../controllers/folder.js'

const addFolCommand = new Command('folder')
  .option('-p, --path [path]', 'the path is create')
  .option('-f, --folder [folder]', 'name folder is create')
  .action(async (...args) => folderController(args[0]))

export default addFolCommand
