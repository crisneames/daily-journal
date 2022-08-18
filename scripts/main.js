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

// console.log(journalEntry);
// console.log(journalEntry[4]);

for (entry of journalEntry) {
  console.log(`Concepts I've learned: ${entry.concept}`);
}

for (entry of journalEntry) {
  //if id divisable by 2 and remainder not equal 0
  if (entry.id % 2 !== 0) {
    console.log(entry);
  }
}
