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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("No Report found");
        }
        this.addReport(value);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = this.reports[0];
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
}
const accounting = new AccountingDepartment("d1", ["Balance Sheet"]);
const itteam = new ITDepartment("d2", ["Abhi"]);
accounting.mostRecentReport = "";
console.log(itteam);
// accounting.id= "55" => results in an error because .id is read only and can only be used at initialization
accounting.addEmployee("Max");
accounting.addEmployee("Abhiram");
accounting.printEmployeeInformation();
// accounting.employees[2] = "Anna";  => this would result in an error
console.log(accounting);
// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}
// accountingCopy.describe();
//# sourceMappingURL=app.js.map