#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
import { getNotes, appendNote,deleteNote } from './notion.js';

program
  .option('-l, --list')
  .action((num) => { getNotes(); })   

program
  .command('add')
  .argument('<string>', 'Add a note')
  .action((string) => { appendNote(string); }) 

program
  .command('check')
  .argument('<number>', 'Check a note')
  .action((num) => { checkNote(num); }) 

  program
  .command('delete')
  .argument('<number>', 'Delete a note')
  .action((num) => { deleteNote(num); })   


program.parse();
const options = program.opts();
//appendNote("TEST TEST TEST TEST"); 
//test();
//getNotes();
