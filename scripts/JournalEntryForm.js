import { postNewEntry } from './dataAccess.js';

export const JournalEntryForm = () => {
  let html = `
  <section id="wrapper">
  <form>
    <fieldset>
      <label for=" date">Date</label>
      <input type="date" name="date" id="date" value="">
    </fieldset>
    <fieldset>
      <label for="concepts">Concepts Covered</label>
      <input type="text" name="concepts" id="concepts" value="">
    </fieldset>
    <fieldset>
      <label for="entry">Journal Entry</label>
      <textarea name="entry" id="entry" value="" placeholder="Journal Entry" required></textarea>
    </fieldset>
    <fieldset>
      <label for="mood">Mood</label>
      <select id="mood" name="mood">
        <option></option>
        <option>Happy</option>
        <option>Sad</option>
        <option>Angry</option>
        <option>Depressed</option>
      </select>
    </fieldset>
    <button class='button' id='recordJournalEntry' type="submit">Record Journal Entry</button>
  </form>
</section>`;
  return html;
};

//*****************************************//
document.addEventListener('click', (e) => {
  if (e.target.id === 'recordJournalEntry') {
    e.preventDefault();

    // logic to get all values from the form

    // document.querySelector('#searchText').value; // selected by id
    const date = document.querySelector('input[name=date]')?.value;
    const concept = document.querySelector('#concepts')?.value;
    const entry = document.querySelector('#entry')?.value;
    const mood = document.querySelector('#mood')?.value;

    // format them into an object
    const newEntry = {
      date: date,
      concept: concept,
      entry: entry,
      mood: mood,
    };

    postNewEntry(newEntry);
  }
});
