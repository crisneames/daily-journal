import { JournalEntryForm } from './JournalEntryForm.js';
import { EntryList } from './EntryList.js';

export const journalEntry = () => {
  return `
      <h2>Daily Journal</h2>
       <section>
          ${JournalEntryForm()}
        </section>
        <section>
          ${EntryList()}
          </section>
    `;
};

// const getNewEntryId = () => {
//   let highestOrderId = 0;
//   if (journalEntry.length > 0) {
//     highestOrderId = journalEntry.sort((a, b) => b.id - a.id)[0].id;
//   }
//   return highestOrderId + 1;
// };

// export const addNewEntry = (entry) => {
//   const newId = getNewEntryId();
//   entry.id = newId;
//   // Need to add logic
//   journalEntry.push(entry);
//   console.log(entry);
//   document.dispatchEvent(new CustomEvent('stateChanged'));
// };
