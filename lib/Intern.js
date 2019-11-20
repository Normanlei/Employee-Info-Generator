const Employee = require ("./Employee");

class Intern extends Employee{
    constructor(name='N/A', id=-1, email = 'N/A',school){
        super(name,id,email);
        this.school = school;
    }
    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;