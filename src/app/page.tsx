export default function Home() {
  let var1: string = "Abdul Mohiz";
  let var2: boolean = true;

  let var3: string = "Hello";

  //Defining Types
  interface User {
    name: string;
    id: 0;
  }

  const user: User = {
    name: "Mohiz",
    id: 0,
  };
  type MyBool = true | false;
  type WindowStates = "open" | "close" | "minimized";
  type postive = 1 | 2 | 3 | 4;
  function deleteUser(user: User) {}

  // console.log(user.id + user.name);
  let userId: number = 123.1;
  let userName: string = "Mohiz";
  let isUser: boolean = true;

  let hero;
  function getHero() {
    return "Mohiz";
  }
  hero = getHero();
  //console.log(hero);

  function addTwo(num: number) {
    return num + 2;
  }
  function getUpper(val: string) {
    return val.toUpperCase();
  }
  // console.log(getUpper("mohiz"));
  // console.log(addTwo(2));

  let loginUser = (username: string, password: string, isPaid: boolean) => {
    console.log(username, password, isPaid);
  };
  //loginUser("Hey", "2", false);

  // function getValue(myVal: number):  {
  //   if (myVal < 5) {
  //     return true;
  //   }
  //   return "200 OK";
  // }

  const getHello = (name: string): string => {
    return " ";
  };

  const heroes = ["Mohiz", "Ali", "Ahmed"];
  //const heroes = [1, 2, 3];

  heroes.map((hero): string => {
    return `hero is ${hero}`;
  });

  function consoleError(errmsg: string): void {
    console.log(errmsg);
  }

  function getError(errmsg: string): never {
    throw new Error(errmsg);
  }

  // Objects

  const User = {
    name: "Mohiz",
    email: "123@gmail.com",
    age: 23,
  };

  function createUser({
    name,
    email,
    age,
  }: {
    name: string;
    email: string;
    age: number;
  }): void {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  }
  //createUser(User);

  function check({
    name = "Hira",
    age = 13,
  }: {
    name: string;
    age: number;
  }): void {
    console.log(name, age);
  }
  //check({});

  // Type Alias
  type Student = {
    name: string;
    age: number;
  };

  function createStudent(student: Student) {
    return { name: student.name, age: student.age };
  }

  createStudent({ name: "Skylark", age: 23 });

  return (
    <main className="">
      <h1>{var1}</h1>
      <h1>{var2}</h1>
    </main>
  );
}
