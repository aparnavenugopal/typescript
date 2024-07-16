var color = 'red';
var isRed = color === 'red';
var age = 25;
var colors = [
    'red', 'green', 'black'
];
var areColorsRed = [
    true, false, false
];
var ages = [
    20, 33, 45, -1
];
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 4));
var printColor = function (colors) {
    console.log(colors);
};
printColor(['red', 'black', 'white']);
var formatCar = function (car) {
    return "hi";
};
formatCar({
    year: 2015,
    make: 'ford',
    model: 'mustang',
});
var hp = {
    model: 'hp',
    year: 2015,
    setYear: function (nextYear) {
        this.year = nextYear;
    },
    setModel: function (nextModel) {
        this.model = nextModel;
    },
    getDescription: function () {
        return "year: ".concat(this.year, " , model: ").concat(this.model);
    }
};
// const apsara: Pen ={
//     model: 'apsara',
//     year: 2010
// }
