
enum Main {ADMIN, READ_ONLY, AUTHOR};


const person: {
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string];
    main: Main;
} = {
    name: "krishna",
    age: 3,
    hobbies: ['shuttle','dance'],
    roles: [3,"krishna"],
    main: Main.ADMIN
}

console.log(person);

for(const hobby of person.hobbies){
    console.log(hobby.toLowerCase());
}

const anyo : {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
  } = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }


  console.log(anyo);