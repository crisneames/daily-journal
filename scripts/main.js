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

const htmlString = '<h3>Previous Entries</h3>';
document.getElementById('prevEntries').innerHTML = htmlString;

let htmlEntries = '';
for (ent of journalEntry) {
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
