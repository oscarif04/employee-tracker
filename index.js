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
    }
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
   db.query()
}

function addEmployee(){

}

function updateRole(){

}

function viewRoles(){

}

function addRole(){

}

function viewDeps(){

}

function addDep(){

}

startTracker();