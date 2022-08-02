"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string; //public is done by default
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log(`Department: ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Mac");
accounting.addEmployee("Abhiram");
// accounting.employees[2] = "Anna";  => this would result in an error 
accounting.describe();
// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}
// accountingCopy.describe();
//# sourceMappingURL=app.js.map