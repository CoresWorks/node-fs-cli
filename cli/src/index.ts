#!/usr/bin/env node --no-warnings
import { Command } from 'commander'
import chalk from 'chalk'

import addFolCommand from './commands/addfolder.js'
import addFileCommand from './commands/addfile.js'
import readdirCommand from './commands/readdir.js'
import pkg from '../package.json' with { type: 'json' }

const { blue, green } = chalk

const addCommand = new Command('add')
  .addCommand(addFolCommand) // AddFolder Command
  .addCommand(addFileCommand) // AddFile Command

readdirCommand
  .addHelpText(
    'beforeAll',
    blue(`${pkg.author.name} ${pkg.name} v${pkg.version}`)
  )
  .version(green.bold(`v${pkg.version}`))
  .description(pkg.description)
  .addCommand(addCommand)
  .parse(process.argv)
