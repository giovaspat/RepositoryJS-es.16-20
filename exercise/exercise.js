class Person {
  #firstName;
  #lastName;
  #age;

  constructor(firstName,lastName,age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }


  set firstName (value1) {
    this.#firstName = value1
  }

  get firstName () {
    return this.#firstName;
  }


  set lastName (value2) {
    this.#lastName = value2
  }

  get lastName () {
    return this.#lastName;
  }

  set age (value3) {
    this.#age = value3
  }

  get age () {
    return this.#age;
  }

  get fullName () {
    return this.#firstName + " " + this.#lastName
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
