const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

const toPairs = (students) => {
    return [[students[0], students[2]], [ students[1], students [3]],[ students[4] ,students[5]]];
}
const pairs = toPairs(students);
console.log(pairs);
function giveThemes() {
    let j =[ ];
    for (let i = 0; i < pairs.length; i++) {
        j.push([pairs[i].join(' і '), themes[i]]);
    }
    console.log(j);
}
giveThemes();
function giveMarksToStudents(){
    j = [ ];
    for (let i = 0; i < students.length; i++){
        j.push([students[i], marks[i]]);

    }
    console.log(j);
}
giveMarksToStudents();
function giveMarksToPairs() {
    let j =[ ];
    for (let i = 0; i < pairs.length; i++){
        j.push([pairs[i].join(' і '), themes[i], Math.floor(Math.random() * (6 - 1) + 1)]);
    }
    console.log(j);
}
giveMarksToPairs();

