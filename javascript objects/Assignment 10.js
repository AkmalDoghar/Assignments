//    Task 1: Object Creation
//Create an empty object and assign it to a variable.
//Create an object with properties for name, age, and profession.

let emptyObject = {};
let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer"
};

//     Task 2: Object Properties
//Access and print the values of properties from an object.
//Modify the value of a property in an object.
//Add a new property to an existing object.

let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer"
};
console.log(person.name);       
console.log(person.age);       
console.log(person.profession); 

person.age = 31;
console.log(person.age);      

person.country = "USA";
console.log(person.country);    

//      Task 3: Object Methods
//Create an object method that prints a message to the console.
//Create a method that calculates and returns a value based on object properties.

let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer",
    printMessage: function() {
        console.log("Hello, my name is " + this.name + " and I am a " + this.profession + ".");
    },
    calculateRetirementAge: function() {
        const retirementAge = 65;
        return retirementAge - this.age;
    }
};
person.printMessage(); 

let yearsUntilRetirement = person.calculateRetirementAge();
console.log(yearsUntilRetirement); 

//       Task 4: Object Iteration
//Iterate over the properties of an object and print their values.
//Iterate over the properties of an object and perform a specific action for each property.

let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer",
    country: "USA"
};

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        if (typeof person[key] === "string") {
            console.log(key + ": " + person[key].toUpperCase());
        } else {
            console.log(key + ": " + person[key]);
        }
    }
}

//        Task 5: Object Comparison
//Compare two objects to check if they have the same properties and values.
//Compare two objects to check if they refer to the same object in memory.

function areObjectsEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
let obj1 = { name: "John Doe", age: 30, profession: "Software Engineer" };
let obj2 = { name: "John Doe", age: 30, profession: "Software Engineer" };
let obj3 = { name: "Jane Doe", age: 25, profession: "Designer" };

console.log(areObjectsEqual(obj1, obj2)); 
console.log(areObjectsEqual(obj1, obj3)); 

//        Task 6: Object Nesting
//Create an object that contains another object as one of its properties.
//Access and modify properties of a nested object.

// Create an object that contains another object as a property
let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
// Access properties of the nested object
console.log(person.address.street); 
console.log(person.address.city);   
console.log(person.address.country);

// Modify properties of the nested object
person.address.street = "456 Elm St";
person.address.city = "Newtown";
person.address.country = "Canada";

// Access the modified properties of the nested object
console.log(person.address.street); 
console.log(person.address.city);   
console.log(person.address.country);

//         Task 7: Object Prototypes
//Create a prototype object and use it to create multiple instances of objects.
//Add a method to the prototype object and observe its effect on the instances.

function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
}

let person1 = new Person("John Doe", 30, "Software Engineer");
let person2 = new Person("Jane Doe", 28, "Graphic Designer");

console.log(person1.name); 
console.log(person2.name); 

//          Task 8: Object Serialization
//Convert an object to a JSON string using JSON.stringify().
//Parse a JSON string and convert it back to an object using JSON.parse().

let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
}
let jsonString = JSON.stringify(person);

console.log(jsonString);

let jsonString = '{"name":"John Doe","age":30,"profession":"Software Engineer","address":{"street":"123 Main St","city":"Anytown","country":"USA"}}';

let parsedObject = JSON.parse(jsonString);

console.log(parsedObject);
let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
let jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);
let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

//         Task 9: Object Destructuring
//Use object destructuring to extract specific properties from an object.

let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
let { name, age } = person;

console.log(name); 
console.log(age); 

//        Task 10: Object Property Enumeration
//Use Object.keys() to get an array of all the property names of an object.

let person = {
    name: "John Doe",
    age: 30,
    profession: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};
let propertyNames = Object.keys(person);

console.log(propertyNames);

//         Task 11: Object Inheritance
//Create a parent object and a child object that inherits properties and methods from the parent.

function Parent(name) {
    this.name = name;
}
Parent.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};
function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}
Child.prototype = Object.create(Parent.prototype);

Child.prototype.introduce = function() {
    console.log("I'm " + this.name + " and I'm " + this.age + " years old.");
};
let parent = new Parent("John");
let child = new Child("Alice", 5);

parent.greet(); 
child.greet();  
child.introduce(); 

