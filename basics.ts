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
})