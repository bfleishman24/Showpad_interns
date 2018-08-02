var Student = require("./student");


function Admin () {
    this.studentRoster = [];
}

Admin.prototype.addStudent = function (name, grade) {
    var student = new Student(name, grade);
    this.studentRoster.push(student);
}

Admin.prototype.displayStudentRoster = function (filter) {
    this.studentRoster.forEach(function (item) {
        console.log(`${item.name} and ${item.grade}`);
    });
}

module.exports = Admin;