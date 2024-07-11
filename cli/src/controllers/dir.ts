import chalk from 'chalk'
import fs from 'fs/promises'
const { green, greenBright, yellow } = chalk

export default async function readderDir(...args: string[]): Promise<void> {
  try {
    let path: string
    if (!args[0] || args.length <= 0) path = process.cwd()
    else path = args[0]

    console.log(`Is path reader ${green("'path'")}:`)
    const isDir = async (readerPath: string) => await fs.readdir(readerPath)

    const files = await isDir(path)

    files.map(async (name, i) => {
      try {
        const dir = await isDir(`${path}${name}`)
        if (dir.length <= 0) throw new Error()

        console.log(`${green(i + 1)} -> ${path}${name}/`)
        dir.map((name2, ii) => {
          if (ii === dir.length - 1)
            return console.log(
              `|__${greenBright(ii + 1)} -> ${yellow(`${path}${name}/${name2}/`)}`
            )

          console.log(
            `|  ${greenBright(ii + 1)} -> ${yellow(`${path}${name}/${name2}/`)}`
          )
        })
      } catch (_) {
        console.log(`${chalk.green(i + 1)} -> ${path}${name}`)
      }
    })
  } catch (_) {
    console.log('')
  }
}
