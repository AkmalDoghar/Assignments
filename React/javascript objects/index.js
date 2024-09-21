// Implement all JavaScript basic method of strings, arrays, numbers, maths, objects, dates. 
// Note! You can follow below given cheatsheet of JavaScript.


// (String)

//**Length**
let string = "Hello.World"
console.log(string.length);    // 13
//**Accessing characters**
console.log(str.charAt(0)); // "H"
console.log(str[0]); // "H"
//**Case conversion**
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"

//**Substring extraction**
console.log(str.slice(7, 12)); // "world"
console.log(str.substring(7, 12)); // "world"
console.log(str.substr(7, 5)); // "world"

//**Searching**
console.log(str.indexOf("world")); // 7
console.log(str.lastIndexOf("o")); // 8
console.log(str.includes("Hello")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true

//  (Arrays)

//**Length**
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

//**Adding or Removing Element**
arr.push(6); // [1, 2, 3, 4, 5, 6]
arr.pop(); // [1, 2, 3, 4, 5]
arr.unshift(0); // [0, 1, 2, 3, 4, 5]
arr.shift(); // [1, 2, 3, 4, 5]

//**Accessing Elements**
console.log(arr[0]); // 1
console.log(arr[arr.length - 1]); // 5

// (Numbers)

//**Exponential notation**
console.log(n.toExponential(2)); // "1.23e+2"

//**Precision**
console.log(n.toPrecision(4)); // "123.5"

//  (Math)

//**Basic constants**
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

//**Basic functions**
console.log(Math.abs(-10)); // 10
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8

//**Trigonometry**
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1

//  (Objects)

//**Creating**
console.log(obj.name); // "John"
console.log(obj["age"]); // 30

//**Iterating**
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
// name: John
// age: 31

//  (Dates)

//  **Getting components**
console.log(now.getFullYear()); // Current year
console.log(now.getMonth()); // Current month (0-11)
console.log(now.getDate()); // Current day of the month (1-31)
console.log(now.getDay()); // Day of the week (0-6)
console.log(now.getHours()); // Current hour (0-23)
console.log(now.getMinutes()); // Current minute (0-59)
console.log(now.getSeconds()); // Current second (0-59)

//**Date parsing**
let parsedDate = new Date(Date.parse("2020-01-01T00:00:00Z"));

//**Setting components**
now.setFullYear(2025);
now.setMonth(11); // December
now.setDate(25);

