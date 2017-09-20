const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleSettings = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
var bodySettings = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note..', {
    title: titleSettings,
    body: bodySettings
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleSettings
  })
  .command('remove', 'Remove a note', {
    title: titleSettings
  })
  .help()
  .argv;

var command = argv._[0];

if(command === "add"){
  var note = notes.addNote(argv.title, argv.body);
  note ? console.log('Note was created') : console.log('Note already exists');
}else if(command === "list"){
  var allNotes = notes.getAll();
  console.log('Printing.. ' + allNotes);
  allNotes.forEach((note) => console.log(note.title + ' ' + note.body));
}else if(command === "remove"){
  var note = notes.removeNote(argv.title);
  note ? console.log('Note was deleted') : console.log('Note does not exist');
}else if(command === "read"){
  var note = notes.readNote(argv.title);
  debugger;
  note ? console.log('Note content: ' + note.body) : console.log('Note not found');
}else{
  console.log('Command not reconised');
}
