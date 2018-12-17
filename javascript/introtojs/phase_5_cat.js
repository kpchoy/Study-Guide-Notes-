class Cat {
  constructor(name) {
    this.name = name;
    this.owner = "Bob";
  }

  cuteStatement() {
    console.log(`${this.owner} loves ${this.name}`);
  }
}

let janet = new Cat("Janet");
janet.cuteStatement();