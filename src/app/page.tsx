export default function Home() {
  // let var1: string = "Abdul Mohiz";
  // let var2: boolean = true;

  // let var3: string = "Hello";

  // //Defining Types
  // interface User {
  //   name: string;
  //   id: 0;
  // }

  // const user: User = {
  //   name: "Mohiz",
  //   id: 0,
  // };
  // type MyBool = true | false;
  // type WindowStates = "open" | "close" | "minimized";
  // type postive = 1 | 2 | 3 | 4;
  // function deleteUser(user: User) {}

  // // console.log(user.id + user.name);
  // let userId: number = 123.1;
  // let userName: string = "Mohiz";
  // let isUser: boolean = true;

  // let hero;
  // function getHero() {
  //   return "Mohiz";
  // }
  // hero = getHero();
  // //console.log(hero);

  // function addTwo(num: number) {
  //   return num + 2;
  // }
  // function getUpper(val: string) {
  //   return val.toUpperCase();
  // }
  // // console.log(getUpper("mohiz"));
  // // console.log(addTwo(2));

  // let loginUser = (username: string, password: string, isPaid: boolean) => {
  //   console.log(username, password, isPaid);
  // };
  // //loginUser("Hey", "2", false);

  // // function getValue(myVal: number):  {
  // //   if (myVal < 5) {
  // //     return true;
  // //   }
  // //   return "200 OK";
  // // }

  // const getHello = (name: string): string => {
  //   return " ";
  // };

  // const heroes = ["Mohiz", "Ali", "Ahmed"];
  // //const heroes = [1, 2, 3];

  // heroes.map((hero): string => {
  //   return `hero is ${hero}`;
  // });

  // function consoleError(errmsg: string): void {
  //   console.log(errmsg);
  // }

  // function getError(errmsg: string): never {
  //   throw new Error(errmsg);
  // }

  // // Objects

  // const User = {
  //   name: "Mohiz",
  //   email: "123@gmail.com",
  //   age: 23,
  // };

  // function createUser({
  //   name,
  //   email,
  //   age,
  // }: {
  //   name: string;
  //   email: string;
  //   age: number;
  // }): void {
  //   console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  // }
  // //createUser(User);

  // function check({
  //   name = "Hira",
  //   age = 13,
  // }: {
  //   name: string;
  //   age: number;
  // }): void {
  //   console.log(name, age);
  // }
  // //check({});

  // // Type Alias
  // type Student = {
  //   name: string;
  //   age: number;
  // };

  // function createStudent(student: Student) {
  //   return { name: student.name, age: student.age };
  // }

  // createStudent({ name: "Skylark", age: 23 });

  // //Readonly
  // type Person = {
  //   readonly _id: string;
  //   name: string;
  //   age: number;
  //   card?: number; //optional
  // };

  // let person: Person = {
  //   _id: "123",
  //   name: "Mohiz",
  //   age: 23,
  //   // card: 123,
  // };
  // // person._id='2'
  // //console.log(person.card);

  // type cardName = {
  //   name: string;
  // };

  // type CardNumber = {
  //   number: number;
  // };
  // type cardDetails = cardName &
  //   CardNumber & {
  //     cvc: number;
  //   };

  // let card: cardDetails = {
  //   name: "Mohiz",
  //   number: 123,
  //   cvc: 123,
  // };

  // //Arrays
  // const arr: string[] = ["Mohiz", "Ali", "Ahmed"];
  // const arr2: number[] = [1, 2, 3];
  // const arr3: Array<number> = [4, 5, 6]; //different way to define array with same logic

  // // arr.push('Hira');
  // // arr2.push(4);
  // // console.log(arr);
  // // console.log(arr2);

  // //Union Types
  // let val: string | number = 1;

  // function getDbId(id: string | number) {
  //   if (typeof id === "string") {
  //     return id.toUpperCase();
  //   }
  //   return id;
  // }

  // //Type Guards
  // function isString(val: string | number): val is string {
  //   return typeof val === "string";
  // }

  // //Tuples
  // type Tuple = [string, number];
  // let tuple: Tuple = ["Mohiz", 123];
  // let rgb: [number, number, number] = [255, 0, 0];
  // rgb.push(123);
  // // console.log(rgb)
  // // console.log(tuple);

  // //Enums
  // enum Direction {
  //   Up = 10,
  //   Down = 15,
  //   Left = "Mohiz",
  //   Right = 2,
  //   Middle,
  // }
  // let direction: Direction = Direction.Left;
  // // console.log(direction);

  // //Interface
  // interface Employee {
  //   name: string;
  //   age: number;
  //   role: string;
  // }
  // interface Manager extends Employee {
  //   salary: number;
  // }

  //Classes

  class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }

  class Car {
    private name: string;
    model: string;
    price: number;

    constructor(n: string, m: string, p: number) {
      this.name = n;
      this.model = m;
      this.price = p;
    }

    getCarData(): string {
      return `Name: ${this.name}, Model: ${this.model}, Price: ${this.price}`;
    }
  }
  let car1 = new Car("Toyota", "Corolla", 2000000);

  //car1.name;
  // console.log(car1.getCarData());

  class Truck {
    constructor(
      public name: string,
      public model: string,
      public price: number
    ) {}

    getTruckData(): string {
      return `Name: ${this.name}, Model: ${this.model}, Price: ${this.price}`;
    }
  }
  let truck1 = new Truck("Nissan", "8 Wheel", 50500300);
  //console.log(truck1.getTruckData());

  //Getters & Setters
  class Person {
    protected _name: string;
    constructor(name: string) {
      this._name = name;
    }

    get name(): string {
      return this._name;
    }

    set name(name: string) {
      this._name = name;
    }
  }

  class subPerson extends Person {
    age: number;
    isFemale: boolean;
    constructor(name: string, age: number, isFemale: boolean) {
      super(name);
      this.age = age;
      this.isFemale = isFemale;
    }
  }

  interface Takephoto {
    cameraMode: string;
    filter: string;
    burst: number;
  }

  interface Story {
    createStory(): void;
  }
  class Instagram implements Takephoto, Story {
    constructor(
      public cameraMode: string,
      public filter: string,
      public burst: number
    ) {}
    createStory(): void {
      console.log("Story Created");
    }
  }

  //Abstract Classes
  abstract class Animal {
    abstract makeSound(): void;
    move(): void {
      console.log("Moving");
    }
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log("Bark");
    }
  }

  //Dog.prototype.move();
  //Dog.prototype.makeSound();

  //Generics
  class ArrayList<T> {
    constructor(public value: T) {}

    getValue(): T {
      return this.value;
    }
  }

  const gen1 = new ArrayList<string>("Mohiz");
  const gen2 = new ArrayList<number>(123);
  console.log(gen1.getValue());
  console.log(gen2.getValue());

  function getArray<T>(arr: T[]): T[] {
    return arr;
  }

  function gexample<T>(arg: T): T {
    return arg;
  }

  interface Bottle {
    brand: string;
    type: number;
  }

  return (
    <main className="">
      <h1></h1>
      <h1></h1>
    </main>
  );
}
function identityFour<T>(arg0: {}) {
  throw new Error("Function not implemented.");
}

