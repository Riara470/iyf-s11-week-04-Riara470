// Week 4: Student Grade Tracker - JavaScript

// Array of student objects
let students = [
    { name: "Alice", grades: [85, 90, 78] },
    { name: "Bob", grades: [70, 88, 92] },
    { name: "Charlie", grades: [95, 85, 89] }
];

// Function to calculate average
function calculateAverage(grades) {
    let sum = 0;
    for (let grade of grades) {
        sum += grade;
    }
    return (sum / grades.length).toFixed(2);
}

// Function to display all students
function displayStudents() {
    console.log("=== Student Grade Report ===");
    for (let student of students) {
        let avg = calculateAverage(student.grades);
        console.log(`${student.name}: Grades = [${student.grades.join(", ")}] | Average = ${avg}`);
    }
}

// Function to add new student
function addStudent(name, grades) {
    students.push({ name: name, grades: grades });
    console.log(`Added ${name} successfully!`);
}

// Test the functions
displayStudents();

console.log("\nAdding a new student...");
addStudent("Diana", [88, 92, 95]);

console.log("\nUpdated Report:");
displayStudents();