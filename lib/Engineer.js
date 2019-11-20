const Employee = require ("./Employee");

class Engineer extends Employee{
    constructor(name='N/A', id=-1, email = 'N/A',github){
        super(name,id,email);
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;