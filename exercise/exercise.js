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
    return this.#firstName = value1
  }

  get firstName () {
    return person.#firstName;
  }


  set lastName (value2) {
    return this.#lastName = value2
  }

  get lastName () {
    return person.#lastName;
  }

  set age (value3) {
    return this.#age = value3
  }

  get age () {
    return person.#lastName;
  }

  get fullName () {
    return person.#firstName + " " + person.#lastName
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);