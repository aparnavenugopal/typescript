var Main;
(function (Main) {
    Main[Main["ADMIN"] = 0] = "ADMIN";
    Main[Main["READ_ONLY"] = 1] = "READ_ONLY";
    Main[Main["AUTHOR"] = 2] = "AUTHOR";
})(Main || (Main = {}));
;
var person = {
    name: "krishna",
    age: 3,
    hobbies: ['shuttle', 'dance'],
    roles: [3, "krishna"],
    main: Main.ADMIN
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
}
var anyo = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(anyo);
