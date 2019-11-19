const Employee = require ("./Employee");

class Manager extends Employee{
    constructor(name='N/A', id=-1, email = 'N/A',officeNum){
        super(name,id,email);
        this.officeNumber = officeNum;
    }
    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;