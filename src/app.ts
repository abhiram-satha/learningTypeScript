class Department {
  // private name: string; //public is done by default
  private employees: string[] = [];

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


const accounting = new Department("d1", "Accounting");

// accounting.id= "55" => results in an error because .id is read only and can only be used at initialization

accounting.addEmployee("Mac");
accounting.addEmployee("Abhiram")

// accounting.employees[2] = "Anna";  => this would result in an error 

accounting.describe();

// const accountingCopy = {name: 'DUMMY', describe: accounting.describe}

// accountingCopy.describe();