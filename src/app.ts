abstract class Department {
  // private name: string; //public is done by default
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }
  static fiscalYear = 2022;
  static createEmployee(name: string) {
    return {name: name}
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`Department ID is ${this.id}`)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("No Report found");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  describe() {
      console.log(`Department ID is ${this.id}`)
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = this.reports[0];
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(employee: string) {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }
}

const employee1 = Department.createEmployee("Max")

// console.log(employee1, Department.fiscalYear)

const accounting = new AccountingDepartment("d1", ["Balance Sheet"]);

const itteam = new ITDepartment("d2", ["Abhi"]);

// accounting.mostRecentReport = "";

// console.log(itteam);

// accounting.id= "55" => results in an error because .id is read only and can only be used at initialization

// accounting.addEmployee("Max");
// accounting.addEmployee("Abhiram");
// accounting.printEmployeeInformation();

accounting.describe();

// accounting.employees[2] = "Anna";  => this would result in an error

console.log(accounting);

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}

// accountingCopy.describe();
