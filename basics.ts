const color: string = 'red';
const isRed: boolean = color === 'red';
const age: number = 25;
const colors: string [] = [
    'red','green','black'
];

const areColorsRed: boolean[] = [
    true, false, false
];

const ages : number[] = [
    20,33 ,45, -1
]

const add = (a: number,b: number): number => {
 return a+b;
}

console.log(add(5,4));

const printColor = (colors: string[]) => {
    console.log(colors);
}

printColor(['red','black','white']);

interface Car{
    year: number;
    make: string;
    model: string;
}

const formatCar = (car: Car) => {
    return `hi`;
}

formatCar({
    year: 2015,
    make:'ford',
    model: 'mustang',
});

interface Pen {
    model: string;
    year: number;
    setYear: (nextYear: number) => void;
    setModel: (nextModel: string) => void;
    getDescription:() => string;
}

interface Pencil extends Pen {
    color: 'black';
}


const hp: Pen = {
   model: 'hp',
   year: 2015,
   setYear(nextYear: number){
    this.year = nextYear;
   },
   setModel(nextModel: string){
    this.model = nextModel
   },
   getDescription(){
    return `year: ${this.year} , model: ${this.model}`
   }
};

// const apsara: Pen ={
//     model: 'apsara',
//     year: 2010
// }

interface Image {
    src: string;
}

interface User{
    username: string;
}

const logOutput = (value: string | number| string[] | Image ) => {
   if(typeof value === 'string'){
    value.toUpperCase();
   }
   if(typeof value === 'number'){
    Math.round(value);
   }
   if(Array.isArray(value)){
    console.log(value);
   }
   if(typeof value=== 'object' && !Array.isArray(value)){
    value.src;
   }
}

logOutput('hi there');
logOutput(123);
logOutput(['hi','there']);
logOutput({src: 'img.jpg'});

//type narrowing is implemented by type gaurd
//type predicates

function isUser(value: Image| User): value is User{
    return 'username' in value;
}

const typegaurdlogoutput = (value: Image| User) => {
  if('username' in value){
    console.log(value.username);
  }
  if('src' in value){
    console.log(value.src);
  }
}

interface UserProfile{
    likes: string[];
}

interface User{
    id: string;
    username: string;
    profile?: UserProfile;
}

const user: User = {
    id: 'abc',
    username: 'me',
    profile:{
        likes: ['cats']
    }
};

if(user.profile){
    user.profile.likes;
}

user.profile?.likes;

function value(value: string, message? : string){
  if(message){
    console.log(message,value);
  }else{
    console.log(value);
  }
}

interface Book{
    title: string;
}

async function fetchBook(): Promise<Book>{
    const res = await fetch('/book');
    const data: unknown = await res.json();

    if(data && typeof data === 'object' && 'title' in data && typeof data.title === 'string'){
        return data as Book;
    }
    throw new Error('expected to get a book but did not');
}

//type aliias

type loggableValue = string | number| string[]|Image;

// function val(value:loggableValue){

// }

// function wrapInArray<T>(re: <T>): (T)[] {
//     return [re];
// }

// const r1 = wrapInArray<string>('krishna');
// const r2 = wrapInArray<number>(10);

function toRecord<T,g>(id: T, value: g){
    return{
        id,
        value
    }
}

const result = toRecord<number,string>(123, 'my@email.com');
const result2 = toRecord<string, number[]>('e021', [1,2,3]);

function randomElement<T>(arr: T[]){
    const index = Math.random()*arr.length;
    return arr[index]
}

const r1 = randomElement<number>([1,2,3]);
const r2 = randomElement<string>(['a','b','c']);