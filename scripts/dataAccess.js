const applicationState = {
  journalEntries: [],
};

const API = 'http://localhost:8080';

// fetch
export const fetchJournalEntries = async () => {
  const dataFetch = await fetch(`${API}/journalEntry`);
  const serviceRequests = await dataFetch.json();
  // Store the external state in application state
  applicationState.journalEntries = serviceRequests;
};

// copy of journalEntries
export const getJournalEntries = () => {
  return applicationState.journalEntries.map((entry) => ({ ...entry }));
};

// post
export const postNewEntry = async (userEntry) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userEntry),
  };
  const mainContainer = document.querySelector('#container');
  const response = await fetch(`${API}/journalEntry`, fetchOptions);
  const responseJson = await response.json();
  // state changed
  mainContainer.dispatchEvent(new CustomEvent('stateChanged'));
  return responseJson;
};

// delete
export const deleteEntry = async (id) => {
  const mainContainer = document.querySelector('#container');
  await fetch(`${API}/entries/${id}`, { method: 'DELETE' });
  mainContainer.dispatchEvent(new CustomEvent('stateChanged'));
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
