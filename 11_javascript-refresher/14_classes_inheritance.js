class Person {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    console.log("Hi, I am " + this.name)
  }
}

class Student extends Person {
  study() {
    console.log(this.name + " is studying")
  }
}

const p1 = new Person("Ganda")
p1.sayHello()

const s1 = new Student("Eunice")
s1.sayHello()
s1.study()