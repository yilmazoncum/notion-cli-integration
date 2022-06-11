import {Command} from 'commander';
const program = new Command();
import { getNotes,appendNote } from './notion.js';

program
  .option('-l, --list')
  .option('-c, --check')
  .option('-d, --delete')
  .option('-h, --help');
   
program
  .command('add')
  .argument('<string>', 'Add a note')
  .action((string)=>{ appendNote(string);})


program.parse();



const options = program.opts();

if (options.list) getNotes();







//appendNote("TEST TEST TEST TEST"); 
//test();
//getNotes();
