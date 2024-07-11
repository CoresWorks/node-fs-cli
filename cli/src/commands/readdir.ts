import { Command } from 'commander'
import readderDir from '../controllers/dir.js'

const addFileCommand = new Command()
  .argument('[path]', 'path is reader')
  .action(readderDir)

export default addFileCommand
