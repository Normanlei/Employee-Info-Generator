const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const questions = require("./lib/Questions");

let teamName;
let objToHTML = []; //Array to store all the employee object to build html


init();

function init() {
    inquirer.prompt(questions.initQuestions).then(function (res) {
        if (res.start) buildTeamLead();
        else init();
    });
}

function buildTeamLead() {
    inquirer.prompt(questions.managerQuestions)
        .then(function (data) {
            teamName = data.teamName;
            let tempObj = new Manager(data.manager, data.managerID, data.managerEmail, data.managerOffice);
            objToHTML.push(tempObj);
            buildStaff();
        }, function (error) {
            console.log(error);
        })
}

function buildStaff() {
    inquirer.prompt(questions.pickStaffQuestions)
        .then(function (ans) {
            switch (ans.pick) {
                case "Engineer":
                    buildEngineer();
                    break;
                case "Intern":
                    buildIntern();
                    break;
                default:
                    buildHTML();
                    break;
            }
        },function(error){
            console.log(error);
        })
}

function buildEngineer() {
    inquirer.prompt(questions.engineerQuestions)
        .then(function (data) {
            let tempObj = new Engineer(data.engineer, data.engineerID, data.engineerEmail, data.engineerGithub);
            objToHTML.push(tempObj);
            buildStaff();
        },function(error){
            console.log(error);
        })
}

function buildIntern() {
    inquirer.prompt(questions.internQuestions)
        .then(function (data) {
            let tempObj = new Engineer(data.intern, data.internID, data.internEmail, data.internSchool);
            objToHTML.push(tempObj);
            buildStaff();
        },function(error){
            console.log(error);
        })
}

function buildHTML(){
    console.log("creating.....html");
}

