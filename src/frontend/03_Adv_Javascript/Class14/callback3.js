function getStudent(callback) {
  console.log("Fetching student...");
  const student = {
    id: 1,
    name: "venkat",
  };
  callback(student);
}

function getCourse(student, callback) {
  console.log(`Fetching course for ${student.name}`);
  const course = {
    id: 101,
    title: "javascript",
  };
}

function handleStudent(student) {
  getCourse(student);
}
getStudent(handleStudent);
/* 
Output
Fetching student...
Fetching course for venkat
 */