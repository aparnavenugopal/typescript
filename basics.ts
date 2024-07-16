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