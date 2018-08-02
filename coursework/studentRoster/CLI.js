// SCHEMA.SQL - contains the create statements for the table (run in mysql workbench or sqlpro)
// Save the student to the database on addStudent choice
// Read the student roster from the database on a display student

var inquirer = require("inquirer");
var Admin = require("./admin");
var mysql = require("mysql");

var admin = new Admin();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "student_db",
    port: 3306
});

connection.connect(function (error) {
    if (error) {
        throw error;
    }
    start();
});

function start() {
    inquirer.prompt([
        {
            name: "userChoice",
            type: "list",
            message: "Welcome to Student Admin 6400. Please make a selection:",
            choices: ["Add Student", "Display Roster", "QUIT"]
            
        }
    ]).then(function (answers) {
        if (answers.userChoice === "Add Student") {
            addStudent();
        } else if (answers.userChoice === "Display Roster") {
            displayStudent();
            start();
        } else {
            console.log("quit");
        }
    });

}

function addStudent() {
    return inquirer.prompt([
        {
            name: "studentName",
            type: "input",
            message: "Enter Student Name"
        },
        {
            name: "studentGrade",
            type: "input",
            message: "Enter Student Grade"
        }
    ]).then(function (answers) {
        admin.addStudent(answers.studentName, answers.studentGrade);
        connection.query("INSERT INTO student SET ?", {
            name: answers.studentName,
            grade: answers.studentGrade
        }, function (err, data) {
            console.log(data);
            start();
        });
    });
}

function displayStudent() {
    admin.displayStudentRoster();
}
// present the user with three choices
// if choice is add student - create a new student
// and we want to store it
// prompt the user again (check!)

// if choice is display roster - iterate over the student list
// and display each item
// prompt the user again

// otherwise - end the program