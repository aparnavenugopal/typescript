var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
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
var logOutput = function (value) {
    if (typeof value === 'string') {
        value.toUpperCase();
    }
    if (typeof value === 'number') {
        Math.round(value);
    }
    if (Array.isArray(value)) {
        console.log(value);
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
        value.src;
    }
};
logOutput('hi there');
logOutput(123);
logOutput(['hi', 'there']);
logOutput({ src: 'img.jpg' });
//type narrowing is implemented by type gaurd
//type predicates
function isUser(value) {
    return 'username' in value;
}
var typegaurdlogoutput = function (value) {
    if ('username' in value) {
        console.log(value.username);
    }
    if ('src' in value) {
        console.log(value.src);
    }
};
var user = {
    id: 'abc',
    username: 'me',
    profile: {
        likes: ['cats']
    }
};
if (user.profile) {
    user.profile.likes;
}
(_a = user.profile) === null || _a === void 0 ? void 0 : _a.likes;
function value(value, message) {
    if (message) {
        console.log(message, value);
    }
    else {
        console.log(value);
    }
}
function fetchBook() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('/book')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (data && typeof data === 'object' && 'title' in data && typeof data.title === 'string') {
                        return [2 /*return*/, data];
                    }
                    throw new Error('expected to get a book but did not');
            }
        });
    });
}
// function val(value:loggableValue){
// }
// function wrapInArray<T>(re: <T>): (T)[] {
//     return [re];
// }
// const r1 = wrapInArray<string>('krishna');
// const r2 = wrapInArray<number>(10);
function toRecord(id, value) {
    return {
        id: id,
        value: value
    };
}
var result = toRecord(123, 'my@email.com');
var result2 = toRecord('e021', [1, 2, 3]);
function randomElement(arr) {
    var index = Math.random() * arr.length;
    return arr[index];
}
var r1 = randomElement([1, 2, 3]);
var r2 = randomElement(['a', 'b', 'c']);
