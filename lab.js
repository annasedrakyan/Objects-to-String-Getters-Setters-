

// O B J E C T S

function showInfo(val) {
	let type = typeof val;
	console.log(`Type: ${type}, string: ${val}`);
}


//showInfo("Anna");


// function compare(obj1, obj2) {
// 	let result=obj1 === obj2 ? 'indentical' : 'different';
// 	console.log(`Objects are ${result}`);
// }

// // object1 = {
// // 	name: "Anna",
// // 	age: 10
// // }

// compare({name: "Anna", age: 10 },{name: "Anna",	age: 10 } );


showInfo(new String('ANNA'));
showInfo(['Anna', 'Naira']);
showInfo(new Date());
showInfo({name: "Anna"});

console.log(typeof(new String('Anna')).toString);
console.log(typeof(new String({name: "Anna"})).toString);


let user = {
	name: 'Anna',
	age: 100,
	toString() {
		return 'Hello';
	}
};

showInfo(user);

//comparing 2 objects _1 
// let user1 = {name: 'IVAN', age: 99};
// let user2 = {name: 'Mikhail', age: 32};

// if(user1.valueOf() > user2.valueOf()) {

// 	console.log(`${user1.name} is older`);
// }
// else {
// 	console.log(`${user2.name} is older`);
// }

// console.log(user1.valueOf()); //{name: "IVAN", age: 99}



//comparing 2 objects _ 2

let user1 = {name: 'IVAN', age: 99};
let user2 = {name: 'Mikhail', age: 32};

user1.valueOf = user2.valueOf = function() {
	return this.age;
}
//console.log(user1.valueOf()); //99

if(user1 > user2) {
	console.log(`${user1.name} is older`);
}
else {
	console.log(`${user2.name} is older`);
}


console.log(user1.hasOwnProperty('age')); //true
console.log(user1.hasOwnProperty('valueOf')); //false


function checkProp(obj, propName) {
	var has = propName in obj ? 'has': 'no';
	var own = obj.hasOwnProperty(propName) ? 'own': 'prototype';
	console.log(` Object ${has} ${propName} property`);

	if(propName in obj) {
		console.log(`Object ${propName} is ${own}`);
    }

} 

let userprop = {name: 'Ivan', age: 99};
checkProp(userprop, 'age');
//Object has age property
//Object age is own



let ivan = {name: 'IVAN', age: 89};
let newIvan = Object.assign({}, ivan);
console.log(newIvan);
console.log(ivan === newIvan); //false and this assignee is correct
let masha = Object.assign({}, ivan, {name: 'Masha'});
console.log(masha);


let anna = {name: 'Anna', age: 55};
let newAnna = Object.assign(anna);
console.log(anna === newAnna); //true , this assignee is wrong

let keys = Object.keys(anna);
console.log(keys);

