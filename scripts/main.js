import {
  addNewEntry,
  createJournalEntry,
  getJournalEntries,
} from './journalEntry.js';

//**********************************************//
// display Journal Entries Title
const htmlString = '<h3>Journal Entries</h3>';
document.getElementById('prevEntries').innerHTML = htmlString;

// Function to loop through journal entries and displays them
const displayEntries = () => {
  const entry = getJournalEntries();

  let htmlEntries = '';

  for (const ent of entry) {
    htmlEntries =
      htmlEntries +
      `<div class='box'>
      <p>${ent.id}</p>
    <p>${ent.date}</p>
    <p>${ent.concept}</p>
    <p>${ent.entry}</p>
    <p>${ent.mood}</p>
    </div>`;
  }
  document.getElementById('entries').innerHTML = htmlEntries;
};

//*****************************************//
document.addEventListener('click', (e) => {
  if (e.target.id === 'recordJournalEntry') {
    e.preventDefault();
    console.log('Recording Journal Entry...');
    // logic to get all values from the form

    // document.querySelector('#searchText').value; // selected by id
    const date = document.querySelector('input[name=date]')?.value;
    const concept = document.querySelector('#concepts')?.value;
    const entry = document.querySelector('#entry')?.value;
    const mood = document.querySelector('#mood')?.value;

    // format them into an object
    const newEntry = {
      id: '',
      date: date,
      concept: concept,
      entry: entry,
      mood: mood,
    };

    addNewEntry(newEntry);
    //console.log('NEW ENTRY', newEntry);
  }
});

document.addEventListener('stateChanged', (event) => {
  // One line of code should do it.
  displayEntries();
  document.forms['myForm'].reset();
});

// Run the function
displayEntries();

// display New Entry Title
const htmlNewEntry = '<h3>New Entry</h3>';
document.getElementById('currEntries').innerHTML = htmlNewEntry;

// *** is there a better way to do this? *** run the function and print to screen?
//run function from journalEntry.js to create new object
createJournalEntry('functions', 'I love functions!', 'happy');

const htmlFunctions = `<div class='box'><p>functions</p>
<p>I love functions</p>
<p>happy</p></div>`;
document.getElementById('addEntries').innerHTML = htmlFunctions;

// display Happy Thoughts Title
const htmlHappyThoughts = '<h3>Happy Thoughts</h3>';
document.getElementById('happyThoughts').innerHTML = htmlHappyThoughts;

// List out concepts where mood is happy

const entry = getJournalEntries();
let htmlHappy = '';
for (const ent of entry) {
  if (ent.mood === 'Happy') {
    htmlHappy =
      htmlHappy +
      `<div class='box'><p>${ent.concept} makes me ${ent.mood}.</p></div>`;
  }
  document.getElementById('list').innerHTML = htmlHappy;
}
