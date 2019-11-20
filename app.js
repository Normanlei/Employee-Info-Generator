const Employee = require ("./lib/Employee");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Manager = require ("./lib/Manager");
const inquirer = require("inquirer");


init();

function init(){
    inquirer.prompt({
        type: "confirm",
        message: "Welcome to build your team profolio, are you ready?",
        name: "start"
    }).then(function(res){
        if (res.start) buildTeamLead();
        else init();
    });
}

function buildTeamLead(){
    inquirer.prompt([
        {
            type: "input",
            message: "Enter your team's name:",
            name:"teamName",
            validate: async (input)=>{
                if (input.length===0){
                    console.log("\nPlease enter a team name");
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            message:"Enter manager's name:",
            name: "manager",
            validate: async (input)=>{
                if (input.length===0 || !input.match(/[a-zA-Z]/i)){
                    console.log("\nPlease enter a valid name");
                    return false;
                }
                return true;
            }
        }
    ])
}