#!/usr/bin/env node
import { Command } from 'commander'
import chalk from 'chalk'

import addFolCommand from './commands/addfolder.js'
import addFileCommand from './commands/addfile.js'
import readdirCommand from './commands/readdir.js'

const { blue } = chalk

const addCommand = new Command('add')
  .addHelpText('beforeAll', blue.bold('FS CLI'))
  .addCommand(addFolCommand) // AddFolder Command
  .addCommand(addFileCommand) // AddFile Command

readdirCommand.addCommand(addCommand).parse(process.argv)
