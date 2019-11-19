class Employee {
    constructor(name='N/A', id=-1, email = 'N/A'){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        if (this.name === 'N/A') console.log(`Please define a valid name.`);
        else return this.name;
    }

    getId(){
        if (this.id === -1) console.log(`Please define a valid id.`);
        else return this.id;
    }

    getEmail(){
        if (this.email === 'N/A') console.log(`Please define a valid email.`);
        else return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;