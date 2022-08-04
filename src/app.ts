interface Greetable {
  name: string;
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable{
  name: string;
  age: number
  constructor(n:string, age:number) {
    this.name = n
    this.age = age;
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }

}

let user1: Greetable;

user1 = new Person('Abhiram', 28)

user1.greet("Hello")

console.log(user1);