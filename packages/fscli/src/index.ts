#!/usr/bin/env node
import { Command } from 'commander'
import chalk from 'chalk'
import fs from 'fs/promises'

const rootCli = new Command()
const { green, greenBright, yellow } = chalk

rootCli.argument('<path>', 'path is reader').action(async (...args) => {
  const path: string = args[0] ?? process.cwd()
  const isDir = async (readerPath: string) => await fs.readdir(readerPath)

  const files = await isDir(path)

  files.map(async (name, i) => {
    try {
      const dir = await isDir(`${path}${name}`)
      if (dir.length <= 0) throw new Error()

      console.log(`${green(i + 1)} => ${path}${name}/`)
      dir.map((name2, ii) =>
        console.log(
          `  ${greenBright(ii + 1)} => ${yellow(`${path}${name}/${name2}/`)}`
        )
      )
    } catch (_) {
      console.log(`${chalk.green(i + 1)} => ${path}${name}`)
    }
  })
})

rootCli.parse(process.argv)
