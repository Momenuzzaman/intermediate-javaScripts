const studens= [
    {id: 21, name: "Al-amin"},
    {id: 31, name : "Ayaan"},
    {id: 41, name: "Liton"},
    {id: 51, name : "dipjol"},
];

const names = studens.map(student=>student.name);
console.log(names);

const bigger = studens.filter(student=>student.id>31);
console.log(bigger);