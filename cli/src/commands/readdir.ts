import { Command } from 'commander'
import readderDir from '../controllers/dir.js'
import chalk from 'chalk'

const { blue, green } = chalk

const readderDirCommand = new Command()
  .argument(blue('[path]'), green('path is reader'))
  .action(readderDir)

export default readderDirCommand
