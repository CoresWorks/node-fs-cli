import { Command } from 'commander'
import chalk from 'chalk'

import { rmvFileController } from '../controllers/file.js'

const rmvFileCommand = new Command('file')
  .option('-p, --path [path]', 'the path is remove')
  .option('-f, --file [file]', 'name file is remove')
  .action(async (...args) => rmvFileController(args[0]))

export default rmvFileCommand
