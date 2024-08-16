let students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 22, grade: 'B' },
    
];

// a. Add a Student
function addStudent(student) {
    students.push(student);
    console.log("Student Added");
    
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
        console.log("Updated Student");
        
    }
}

// c. Delete a Student
function deleteStudent(id) {
    students = students.filter(student => student.id !== id);
    console.log("Deleted Student");
    
}

// d. List All Students
function listAllStudents() {
    console.log("List of all students");
    
    console.log(students);
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
    console.log("Finding By Grade ...");
    
    return students.filter(student => student.grade === grade);
}

// f. Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    console.log("Calculating Avg ...");
    
    return totalAge / students.length;
}

addStudent({ id: 3, firstName: 'Jake', lastName: 'Smith', age: 23, grade: 'C' });
updateStudent(1, { grade: 'A+' });
deleteStudent(2);
listAllStudents();
console.log(findStudentsByGrade('A+'));//e ans
console.log('Average Age:', calculateAverageAge());//f ans
