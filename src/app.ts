class Department {
  public name: string; //public is done by default
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department:' + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees)
  }

}


const accounting = new Department("Accounting");

accounting.addEmployee("Mac");
accounting.addEmployee("Abhiram")

// accounting.employees[2] = "Anna";  => this is an error 

// accounting.describe();

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}

// accountingCopy.describe();