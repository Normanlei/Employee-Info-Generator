const questions = module.exports = {
    /////initial question////////
    initQuestions: {
        type: "confirm",
        message: "Welcome to build your team profolio, are you ready?",
        name: "start"
    },
    /////////////////////////////
    /////manger questions////////
    managerQuestions:[
    {
        type: "input",
        message: "Enter your team's name:",
        name: "teamName",
        validate: async (input) => {
            if (input.length === 0) {
                console.log("\nPlease enter a valid team name");
                return false;
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Enter manager's name:",
        name: "manager",
        validate: async (input) => {
            if (input.length === 0 || !input.match(/[a-zA-Z]/i)) {
                console.log("\nPlease enter a valid name with only letters");
                return false;
            }
            return true;
        },

    },
    {
        type: "input",
        message: "Enter manager's ID:",
        name: "managerID",
        validate: async (input) => {
            if (!input.match(/^[0-9]+$/i)) {
                console.log("\nPlease enter a valid number ID");
                return false;
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Enter manager's email:",
        name: "managerEmail",
        validate: async (input) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(input).toLowerCase())) {
                console.log("\nPlease enter a valid email address");
                return false;
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Enter manager's office number:",
        name: "managerOffice",
        validate: async (input) => {
            if (!input.match(/^[0-9]+$/i)) {
                console.log("\nPlease enter a valid office number");
                return false;
            }
            return true;
        }
    }
],
///////////////////////////////////////

};