const student = {
  name: 'Ana',
  age: 20,
  course: 'Javascript',
  score: 90,
}

// Use the spread operator to increment the users age by 1.
const student2= {
    ...student,
    age: student.age + 1
}
console.log(student);
console.log(student2);

// Extract name, course, and marks using destructuring.
const { name, course, score } = student;
console.log(name, course, score);

// Use a template string to show a message similar to:
// "Ana aged 21 scored 100% in Javascript"
console.log(`${student.age} aged ${student.age} scored ${student}% in ${student}`);

