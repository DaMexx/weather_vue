class User {
  name: string;
  age: number;
  sex: string;
//   address: string;
//   phone: string;
//   email: string;

  public password: string = "password";
  constructor(
    name: string,
    age: number,
    sex: string,
    // address: string,
    // phone: string,
    // email: string
  ) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    // this.address = address;
    // this.phone = phone;
    // this.email = email;
  }
}

const Adam = new User('Adam', 24, 'M');
Adam.password = "123";
console.log(Adam);
