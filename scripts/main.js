import { createJournalEntry, getJournalEntries } from './journalEntry.js';

// display Previous Entries Title
const htmlString = '<h3>Previous Entries</h3>';
document.getElementById('prevEntries').innerHTML = htmlString;

// Function to loop through journal entries and displays them
const displayEntries = () => {
  const entry = getJournalEntries();

  let htmlEntries = '';

  for (const ent of entry) {
    htmlEntries =
      htmlEntries +
      `<div class='box'>
    <p>${ent.date}</p>
    <p>${ent.concept}</p>
    <p>${ent.entry}</p>
    <p>${ent.mood}</p>
    </div>`;
  }
  document.getElementById('entries').innerHTML = htmlEntries;
};
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
      `<div class='box'><p>${entry.concept} makes me ${entry.mood}.</p></div>`;
  }
  document.getElementById('list').innerHTML = htmlHappy;
}
