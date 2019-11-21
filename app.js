const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const questions = require("./lib/Questions");

let teamName;
let objToHTML=[]; //Array to store all the employee object to build html


init();

function init() {
    inquirer.prompt(questions.initQuestions).then(function (res) {
        if (res.start) buildTeamLead();
        else init();
    });
}

function buildTeamLead() {
    inquirer.prompt(questions.managerQuestions)
    .then(function(ans){
        teamName = ans.teamName;
        let tempObj = new Manager(data.manager,data.managerID,data.managerEmail,data.managerOffice);
        objToHTML.push(tempObj);
        buildStaff();
    })
    .catch((err)=>{throw err;});
}

