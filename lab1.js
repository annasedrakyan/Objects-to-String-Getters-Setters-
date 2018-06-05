

// GETTERS AND SETTERS


// const user = {
// 	yearOfBirth: 1983,
// 	age: 33
// }
// //when we change one property and next should be changed also
// user.age = 93 ;
// console.log(user.yearOfBirth); // 1983 but it is not 2076 year

const user = {
	yearOfBirth: 1983,
	age() {
		return new Date().getFullYear() -this.yearOfBirth;
	}
}


console.log(user.age()); //35
user.yearOfBirth = 2004 ;
console.log(user.age()); //14


//G E T T E R

const user1 = {
	yearOfBirth: 1983,
	get age() {
		return new Date().getFullYear() - this.yearOfBirth;
	}
} 
console.log(user1.age); //get age allows to set age as property and call not as function like user1.age instead of user1.age()
//user1.yearOfBirth = 2000 ;

//console.log(user1.age);
user1.age = 97 ;
console.log(user1.age); //cannot set property of object which is getter

const user2 = {
	yearOfBirth: 1983,
	get  age() {
		return new Date().getFullYear() - this.yearOfBirth;
	},
	setAge(age) {
		this.yearOfBirth = new Date().getFullYear() - age;
	}
}

user2.setAge(97);
console.log(user2.age);
console.log(user2.yearOfBirth);

delete user2.age;
console.log(user2.age); //undefined
