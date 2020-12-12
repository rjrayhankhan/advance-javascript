const students = [
    {id: 21, name: "Maruf Hasan"},
    {id: 21, name: "Ritu Hasan"},
    {id: 21, name: "Rakib Hasan"},
    {id: 21, name: "Ali Hasan"},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id)
const bigger = students.filter(s => s.id > 400)
console.log(bigger);
