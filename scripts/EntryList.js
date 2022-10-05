import { getJournalEntries } from './dataAccess.js';

export const EntryList = () => {
  const entries = getJournalEntries();
  let htmlRequest = '<section><ul class="box">';
  for (const entry of entries) {
    htmlRequest += `<li>
    <p>id: ${entry.id}</p><p> date: ${entry.date}</p> <p>concept: ${entry.concept}</p><p> entry: ${entry.entry}</p><p> mood: ${entry.mood}</p><p>----------------</p> 
    </li><section>`;
  }
  htmlRequest += '</ul>';
  return htmlRequest;
};
