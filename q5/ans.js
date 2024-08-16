const studentInfo = {
    id: 1,
    name: 'John',
    age: 22,
    major: 'Computer Science',
    GPA: 8.0,
    isEnrolled:true
};

function displayStudentInfo(student) {
    for (let property in student) {
        console.log(`property: ${property}, Value: ${student[property]}`);
    }
}

displayStudentInfo(studentInfo);