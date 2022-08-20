const journalEntry = [
  {
    id: 1,
    date: '07/26/2022',
    concept: 'Complex Flexbox',
    entry:
      'I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.',
    mood: 'Sad',
  },
  {
    id: 2,
    date: '06/26/2022',
    concept: 'CSS',
    entry: 'I worked with CSS properties.',
    mood: 'Happy',
  },
  {
    id: 3,
    date: '06/20/2022',
    concept: 'HTML',
    entry: ' I learned HTML and did a project or two using it.',
    mood: 'Happy',
  },
  {
    id: 4,
    date: '07/05/2025',
    concept: 'JavaScript Data Structures',
    entry: "I'm learning data structures in JavaScript.",
    mood: 'Sad',
  },
  {
    id: 5,
    date: '05/26/2025',
    concept: 'JavaScript Variables',
    entry: 'I learned to use variables in JavaScript using const.',
    mood: 'Happy',
  },
  {
    id: 6,
    date: '04/26/2023',
    concept: 'JavaScript Arrays',
    entry: 'I learned to use arrays in JavaScript.',
    mood: 'Happy',
  },
  {
    id: 7,
    date: '05/26/2024',
    concept: 'JavaScript Objects',
    entry: 'I learned to use objects in JavaScript.',
    mood: 'Happy',
  },
];

export const getJournalEntries = () => {
  const copyOfJournalEntries = journalEntry.map((entry) => ({ ...entry }));
  return copyOfJournalEntries;
};

export const createJournalEntry = (concept, entry, mood) => {
  return {
    concept: concept,
    entry: entry,
    mood: mood,
  };
};

//  ***** Wasn't sure whether this function should reside here in journalEntries.js or main.js -- added it to main.js *****
// export const concepts = () => {
//   copyofJournalEntries.map((concept) => {
//     if (concept.mood === 'happy') {
//       return `${concept.concept} makes me ${concept.mood}.`;
//     }
//   });
// };

// **** TODO -- I would have liked to practice array methods -- .sort(), .map(), .find() .slice(), etc
// which js file would I do this, journalEntry or main?
// when/where/why would I use .map()? I tried to map over the journalEntry array to pull out concepts 'that make me happy'. It did not
// work -- I had to use a for loop
// When/why do you make a copy of an array?
