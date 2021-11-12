const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const express = require("express");


const db = mysql.createConnection(
    {
    host: "localhost",

    user: "root",

    password: "",

    database: "employee_db"
    },
    console.log("Connected successfully.")
);


function startTracker(){
    inquirer.prompt ({
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role",
        "View All Departments", "Add Department", "Quit"],
        name: "startTracker"
    }).then(function(res){
        switch(res.startTracker){
            case "View All Employees":
                viewEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateRole();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "Add Role":
                addRole();
                break;
            case "View All Departments":
                viewDeps();
                break;
            case "Add Department":
                addDep();
                break;
            case "Quit":
                console.log("You've Exited the Program.");
                break;
        }
    });
}

function viewEmployees(){
    db.query(`SELECT * FROM employee`, (err, result) => {
        if (err) {
            console.log("could not select employees from database")
        }
        // Print the table
        console.table(result)
        // Return to Main Menu
        // trackEmployees();
    })
}

function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of the employee?",
            name: 'employeeFirst'
        },
        {
            type: "input",
            message: "What is the last name of the employee?",
            name: "employeeLast"
        },
        {
            type: "list",
            message: "What role will the new employee have?",
            name: "employeeRole",
            choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer",
                     "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"]
        },
        {
            type: "input",
            message: "Who is the employees manager?",
            name: "employeeManager"
        }
    ])
    

}

function updateRole(){

}

function viewRoles(){
    db.query(`SELECT * FROM employee_role`, (err, result) => {
        if (err) {
            console.log('could not select employee_roles from database')
        }
        // Print the table
        console.table(result)
        // Return to Main Menu
        // trackEmployees();
    })
}

function addRole(){

}

function viewDeps(){
    db.query(`SELECT * FROM department`, (err, result) => {
        if (err) {
            console.log('could not select departments from database')
        }
        // Print the table
        console.table(result)
        // Return to Main Menu
        // trackEmployees();
    })
}

function addDep(){

}

startTracker();