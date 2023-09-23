const allStudents = [
    'Jayne Kuyper',
    'Tiesha Laine',
    'Lupe Olague',
    'Clarita Bellman',
    'Laura Munden',
    'Bertram Calvi',
    'Georgianna Sparr',
    'Carolann Seller',
    'Felicia Midgette',
    'Kasandra Bezio',
    'Elias Vanwyk',
    'Yu Mccool',
    'Kati Golub',
    'Pat Dalley',
    'Loreta Francis',
    'Beatris Larusso',
    'Corrin Vancleve',
    'Sofia Ressler',
    'Erlene Burke',
    'Breann Sande',
    'Samatha Sao',
    'Henry Say',
    'Monnie Bernhard',
    'Dia Culbert',
    'Sunny Disandro',
    'Mack Sen',
    'Jeremiah Astle',
    'Misha Ono',
    'Silas Aubry',
    'Kenya Longmore',
    'Mirta Brandenberger',
    'Eneida Overholt',
    'Marcelo Popejoy',
    'Serafina Irvin',
    'Leroy Tacey',
    'Brice Hedrick',
    'Elana Hoops',
    'Keena London',
    'Enriqueta Hein',
    'Valeria Turnbull',
    'Earlean Canchola',
    'Corinna Tousignant',
    'Sherry Rivera',
    'Chasity Janda',
    'Tamela Barlow',
    'Leandro Lonergan',
    'Karlene Breunig',
    'Winter Endicott',
    'Salena Nail',
    'Tanner Clapper',
];
const refs = {
    input: document.querySelector('.search-box'),
    studentList: document.querySelector('.student-list'),
}

populateStudetList(allStudents);
refs.input.addEventListener('input', _.debounce(onSearch, 300));


function populateStudetList(students) {
    const markup = students.map(student => `<li>${student}</li>`).join('');
    refs.studentList.innerHTML = markup;
}

function onSearch(e) {
    const name = e.target.value.toLowerCase(); 
    const filteredStudents = allStudents.filter(student => student.toLowerCase().includes(name));
    populateStudetList(filteredStudents);
}