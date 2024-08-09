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

  console.log(user.id + user.name);

  return (
    <main className="">
      <h1>{var1}</h1>
      <h1>{var2}</h1>
    </main>
  );
}
