import { Command } from 'commander'
import { rmvFolderController } from '../controllers/folder.js'

const rmvFolCommand = new Command('folder')
  .option('-p, --path [path]', 'the path is remove')
  .option('-f, --folder [folder]', 'name folder is remove')
  .action(async (...args) => rmvFolderController(args[0]))

export default rmvFolCommand
