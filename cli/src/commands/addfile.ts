import { Command } from 'commander'
import { addFileController } from '../controllers/file.js'

const addFileCommand = new Command('file')
  .option('-p, --path [path]', 'the path is create')
  .option('-f, --file [file]', 'name file is create')
  .action(async (...args) => addFileController(args[0]))

export default addFileCommand
