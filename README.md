express --no-view . OR npx express-generator

"# JS-Notes"

Equality Operator
"=="
checks types of both operands ,& if the type is same then it call "===" in case of (same type)
id the type is different then conversions occurs (different type)

"==="
if the value is same then value comparisons occur (same type)
checks types of both operands but if types are different then return false (different type)

variables can store some information
we can use that information later
we can change that information later

also we can declare variables without using the var, let or const just define the uisng name and it will create a new variable
but onlu work inthe browser not in node environment

# var is function scope

# Strings are immutable in js

if u use trim method of string then u need to save into the a another var or in the same var so that it can be used wihtout spaces

toUpperCase it use to make the string to Uppercase
toLowerCase it use to make the string to lowercase

Slice Method in String used to slice the string from start to end expect end

# typeof operator

data types (primitive data types)
string "harhit"
number 2, 4, 5.6
booleans
undefined
null
BigInt
Symbol

# conveting the String to Number and vice versa

to convert the number to string just add "" at end eg. 22 +""
to convert the String to Number just add +before string eg. +"22"

# undefined is if we declare but donot assign anything but if we use cont then it gave error

# type of null is Object

# if u want to use the bigint then just "n" in the last of the number

# falsy values

false
""
null
undefined
0

# Arrays

    Reference Type
    Mutulabe
    it is Object Type

.push() can able to change the original array and all the element to its end
.pop() can be used to remove elements from the last of the array and also able to return the last element
.unshift() can be used to add a new element to the start of the array
.shift() can be used to remove elements from the first of the array and also able to return the first element

push & pop is much faster than shift & unshift

# Primitve vs reference data types

in Primitve data type if ur assigning thr result to another Variable and if u made change in the previous varible then it will not going to change to the next variable. Primitves Store in Stack
but in reference data type if u made change in the previous varible then it will change to the next variable. Reference data Store in Heap object is also referenced type

# How to clone Array

array1.slice(0)
[].concat(array1)
using Spread Operators [...array1]

# for of Loop work same as traditional from loop it iterate from all items in array {work with array}

    for(let fruit of fruits){
    console.log(fruit.toUpperCase());
    }

# for in loop gives index when working with Array and give key when working with Object & to it is also use to iterate Object

    for(let index in fruits){
    console.log(fruits[index]);
    }

# Array Destructuring

const myArray = ["value1", "value2", "value3","value4"];
let [myvar1, , myvar3, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar3);
console.log(myNewArray);

# if u want to add the keyvalue to the object then just add like

    person.{keyName} = "{value}"  OR  person["{keyName}"] ="value"

// how to access data from objects
using dot notation
console.log(person.{keyName});
using brackets notation
console.log(person["{keyName}"]);

Note: when we have to access the key with more than one word then we use bracket notation

# how to iterate objects

const person = {
name: "harshit",
age: 22,
"person hobbies": ["guitar", "sleeping", "listening music"]
}

    using for in loop

for(let key in person){
// console.log(`${key} : ${person[key]}`);
console.log(key," : " ,person[key]);
}

    using Object.keys

console.log(Object.keys(person));

    using Object.keys with for of loop

for(let key of Object.keys(person)){
console.log(person[key]);
}

# Spread Operator

in Array it is used to clone/spread all the item of the Array
in String if we use spread operator then it will spreadd the item one by one like
const newArray = [..."123456789"]; also same for array as well

# Functions

Function Declaration :- function functionName(){}  
Function Expression / Anonymous Function :- const constName = functionName(){}
Arrow Function :- const constName = () =>{}

# Hoisting

calling before Declaring it work only while declaring function declaration
while using Variables if u use var then it will give u undefine but instead if u use let or const then it give error

# Lexical Scope

Taking the varible from the lexical environment (where it is defined)(its outer scope)

# Block scope & function scope

let & const are block scope & var is function scope
