class Department {
  // private name: string; //public is done by default
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {

    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.id}: ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees)
  }

}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting")
  }

  addReport(report: string) {
    this.reports.push(report)
  }

  printReports() {
    console.log(this.reports)
  }

  addEmployee(employee: string){
      if(employee === "Max") {
        return;
      }
      this.employees.push(employee)
  }
}


const accounting = new AccountingDepartment("d1", ["Balance Sheet"]);

const itteam = new ITDepartment('d2', ["Abhi"]);

console.log(itteam)

// accounting.id= "55" => results in an error because .id is read only and can only be used at initialization

accounting.addEmployee("Max");
accounting.addEmployee("Abhiram")
accounting.printEmployeeInformation();

// accounting.employees[2] = "Anna";  => this would result in an error 

console.log(accounting);

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}

// accountingCopy.describe();