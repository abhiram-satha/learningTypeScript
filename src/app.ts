class Department {
  // private name: string; //public is done by default
  private employees: string[] = [];

  constructor(private id: string, public name: string) {

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


const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Mac");
accounting.addEmployee("Abhiram")

// accounting.employees[2] = "Anna";  => this would result in an error 

accounting.describe();

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}

// accountingCopy.describe();