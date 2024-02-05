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

Object me for of loop nahi laga skte hai

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

# CallBack function

Taking function as aurgument

# function returnig function

    function myFunc(){
        function hello(){
            return "hello world"
        }
        return hello;
    }
    const ans = myFunc();
    console.log(ans());

# Method of Array

## forEach in JS

it will not create new array and change the existing array

## map method in array

Always create new Array
if we donot return anything then it will return undefined so we have to return something

## Filter in JS

Always create new Array
it will always return boolean value

## Reduce Method in JavaScript

Always create new Array
it takes 2 parameters i.e (accumulator, currentValue)
at second time the value of the accumulator will be the value whih is returned by the function
it is used to reduce and get one result

const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array

// const sum = numbers.reduce((accumulator, currentValue)=>{
// return accumulator + currentValue;
// }, Initial value);

// console.log(sum);
// accumulator , currentValue, return
// 1 2 3
// 3 3 6
// 6 4 10
// 10 5 15
// 15 10 25

## Sort in array

it will change the array
sort via ASCII code so work for alphabet nicely but not for num and in alphabetical order give high priority to Capital letters

to sort no
// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
// return a-b;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);
eg
// 1200,410
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4

## find in Array

if first value is true then it will return it and end the array
if nothing is true then it will return undefined

## every method in the array

if every Element in the array returns true then it will return true otherwise it will return false

## some methods in the array

just like every method in some method if any element in the array is true then it will return true otherwise it will return false

## fill method in the array

// const myArray = new Array(10).fill(0);
// console.log(myArray);

const myArray = [1,2,3,4,5,6,7,8];
// value , start , end

myArray.fill(0,2,5);
console.log(myArray);

## splice method

it will not create new array and change the existing array
& it will also return the deleted element
// start , delete , insert

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert
// myArray.splice(1, 0,'inserted item');

// insert and delete
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);

## iterables

jispe hum for of loop laga sakein
string , array, Sets are iterable

// const firstName = "Harshit";
// for(let char of firstName){
// console.log(char);
// }

const items = ['item1', 'item2', 'item3'];
// for(let item of items){
// console.log(item);
// }

## array like object

jinke pas length property hoti hai
aur jiko hum index se access kar sakte hai
example :- string

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);

## Sets (it is iterable)

// store data  
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

## Map in js

// map is an iterable so we can use for of loop directly

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string
// key -> symbol
// const person = {
// firstName : "harshit",
// age: 7,
// 1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
// console.log(typeof key);
// }

// key value pair
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
// console.log(key, typeof key);
// }
// for(let [key, value] of person){
// // console.log(Array.isArray(key));
// console.log(key, value)
// }

const person1 = {
id: 1,
firstName: "harshit"
}
const person2 = {
id: 2,
firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

## Object me for of loop nahi laga skte hai but for in loop laga skte hai

## cloning method in js

const obj = {
key1: "value1",
key2: "value2"
}
clone uisng spreed operator

// const obj2 = {'key69': "value69",...obj};

clone using Object.assign
// const obj2 = Object.assign({'key69': "value69"}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

## Optional Chaining

?.
agar apke pas properties abhi aceess nahi kr paa rahe hai but later so time we can access them use optional chaining so intead of giving error give them undefined
