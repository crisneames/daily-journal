import { fetchJournalEntries } from './dataAccess.js';
import { journalEntry } from './journalEntry.js';

const mainContainer = document.querySelector('#container');

const render = async () => {
  await fetchJournalEntries();

  mainContainer.innerHTML = journalEntry();
};

render();

mainContainer.addEventListener('stateChanged', (customEvent) => {
  render();
});




