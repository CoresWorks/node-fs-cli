import { PromptObject } from "prompts";
import { FILE_REGEXP, FOLDER_REGEXP } from "./regexps.js";

export const AddFileQuestions: PromptObject<'dir' | 'file'>[] = [
  {
    name: 'dir',
    type: 'text',
    message: 'What\'s is your create path?',
    validate: (prev) => FOLDER_REGEXP.test(prev)
  },
  {
    name: 'file',
    type: 'text',
    message: 'What\'s is you name assigned file',
    validate: (prev) => FILE_REGEXP.test(prev)
  }
]

export const RmvFileQuestions: PromptObject<'dir' | 'file'>[] = [
  {
    name: 'dir',
    type: 'text',
    message: 'What\'s is your remove path?',
    validate: (prev) => FOLDER_REGEXP.test(prev)
  },
  {
    name: 'file',
    type: 'text',
    message: 'What\'s is you name removed file',
    validate: (prev) => FILE_REGEXP.test(prev)
  }
]

export const AddFolQuestions: PromptObject<'dir' | 'folder'>[] = [
  {
    name: 'dir',
    type: 'text',
    message: 'What\'s is your create path?',
    validate: (prev) => FOLDER_REGEXP.test(prev)
  },
  {
    name: 'folder',
    type: 'text',
    message: 'What\'s is you name assigned file?',
    validate: (prev) => FILE_REGEXP.test(prev)
  }
]

export const RmvFolQuestions: PromptObject<'dir' | 'folder'>[] = [
  {
    name: 'dir',
    type: 'text',
    message: 'What\'s is your remove path?',
    validate: (prev) => FOLDER_REGEXP.test(prev)
  },
  {
    name: 'folder',
    type: 'text',
    message: 'What\'s is you name removed folder?',
    validate: (prev) => FOLDER_REGEXP.test(prev)
  }
]
