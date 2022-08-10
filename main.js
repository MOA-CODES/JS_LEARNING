const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput === ''){
        msg.classList.add('error');//adding style from css
        msg.innerHTML='enter all fields';

        setTimeout(() => msg.remove(), 2000);
    }else{
        //console.log('success')
        const li = document.createElement('Li');

        li.appendChild(document.createTextNode(`${nameInput.value}
        :${emailInput.value}`));

        //clear fields
        nameInput.value='';
        emailInput.value= '';

        userList.appendChild(li);

    }
}

/*manipulating dom with event listener
const btn = document.querySelector('.btn');
//the add eventlistner takes 2 things in its parameter
//first being the event and second a function
//we used an arrow function here and also prevented the default behaviour
btn.addEventListener('click',(e) => {e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    //document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').lastElementChild.innerHTML='<h1>hello</h1>'
});
//e.target gives the element the button is on*/

/*manipulating the dom(user interface)
const ul = document.querySelector('.items');

//ul.remove(); //removes the ul class from the interface
//ul.lastElementChild.remove();
ul.firstElementChild.textContent='bro';//changing first element
ul.children[1].textContent = 'bra';
//or
ul.children[1].innerText = 'yo';
//adding HTML dynamically
ul.lastElementChild.innerHTML ="<h2><marquee>Nathan is a Big boy</marquee></h2>";

const btn = document.querySelector('.btn');
btn.style.background = 'red'; */

/*looping through stuff in dom
const items = document.querySelectorAll('.item');

 for(i =0;i<items.length;i++){
console.log(items[i]);
 }
items.forEach((item) => console.log(item));//arrow function
//  normal function way
// items.forEach(function(u){
//     console.log(u);
// });*/
 
/*single element selectors
console.log(document.getElementById('my-form'));//getting an element from our html
console.log(document.querySelector('h1')); 
//h1 is a tag and was used multiple times since this is a single element selector
//it only took the first one*/

 /*multiple element selectors
 console.log(document.querySelectorAll('.item'))
 //queryselctorall can be used to get everything, others are more
 //and wont require . first to signify a class
*/

/*constructor function
function Person(firstName,lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);//stored in DDMMYY
//    WE KEPT THESE IN PROTOTYPES 
//    this.getBirthYear = function() {
//       return  this.dob.getFullYear();
//     }
//     this.getFullName = firstName+' '+lastName;
//     this.getFullName2 = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }

}

Person.prototype.getBirthYear = function(){
    return  this.dob.getFullYear();
} 
Person.prototype.getFullName = function(){
     firstName+' '+lastName;
}
Person.prototype.getFullName2 = function(){
    return `${this.firstName} ${this.lastName}`;
} 

//Class
//A SYNTATIC SUGAR FOR THE FUNCTION CONSTRUCTOR AND PROTOTYPES
class Person2{
    constructor(firstName,lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);//stored in DDMMYY
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
//instantiate object
const person1 = new Person('john', 'alexander','5-12-2002');
const P = new Person2('Mo', 'batista','10-31-2002');

//console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(P.getBirthYear());
*/

/* functions and arrow functions

function addNums(num1 = 1, num2 = 1){// normal function
return num1 + num2;
}

console.log(addNums(5,6));
//arrow functions
const addNums2 = (num1 = 1, num2 = 1)=> console.log(num1 + num2)
    
const addNums3 = num1 => console.log(num1 + 6)
    
addNums2(15,6);
addNums3(25);

//using an arrow function to do a for each
todos.forEach((todo) => console.log(todo));*/

/*SWITCH and condition varaible in javascript

const x = 10

const color = x > 10 ? 'red' : 'blue';

switch(color){
    case'red':
    console.log('color is red'); 
    break;

    case'blue':
    console.log('color is blue'); 
    break;

    default:
    console.log('color is not red or blue'); 
    break;
    
}*/

/*if, else if, else

const x = 4;
const y= 10;

if(x == 10 || x != null){
    console.log('x is 10')
}else if(x>10){
    console.log('x is greater than 10')
}
else{
    console.log('x is not 10')

}*/

// const todos = [
//     {
//         id:1,
//         text:'Take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text:'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text:'Dentist appt',
//         isCompleted: false
//     }
// ];

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);//converting to JSON
// console.log(todoJSON);

//high order array methods(for each, map, filter)

/*MAP & FILTER in js
const todoCompletedId = todos.filter(function(todo){//copies an array
    return todo.isCompleted == true;
    }).map(function(todo){
        return todo.id;
    });//okay so filter, filers the todos array then map copies that array
    //but returns only its id, which will now be the content of todoCompletedid
console.log(todoCompletedId);*/

/*FILTER in js
const todoCompleted = todos.filter(function(todo){//copies an array
return todo.isCompleted == true;
});
console.log(todoCompleted);*/

/*map in js
const todoText = todos.map(function(todo){//copies an array
return todo.text;
});
console.log(todoText);*/

/* for each in js
todos.forEach(function(todo){
    console.log(todo.id);
});*/

/*for of loop in js
for(let x of todos){ 
    console.log(x.text);
    }*/

/*for loop with array in js
// for(let i=0; i <todos.length;i++){ 
// console.log(todos[i].text);
}*/

/*for loop in js
for(let i=0; i <10;i++){ 
console.log(i)
 }*/

/*while loop in js
let x = 0;
while(x<10){
    console.log(x);
    x++;
}*/

//object literals

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age:30,
//     hobbies:['music','movies','sports'],
//     address:{
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// console.log(person);
// console.log(" ");


// console.log(person.firstName,person.hobbies[1]); //selecting from an object
// //you can separate your use of the console with a comma

// console.log(" ");

// //destructuring

// const{firstName, lastName, address:{city}}= person;
// console.log(lastName,city);

// //directly adding properties
// person.email = 'moyo.ajla@gmail.com';





//Arrays - js's own can hold multiple values and data types


// const fruits = ['apples', 'oranges', 'pearls', 10, true];
// const numbers = new Array(1,2,3,4,5,);//an array constructor

// fruits[3] = 50 //replaces item at index 3
// fruits.push(false);//adds to end
// fruits.unshift("list of stuff");//adds to beginning
// fruits.pop(); //removes the last

// console.log(fruits);
// console.log(fruits[3]);

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));//checking if its an array
// console.log(fruits.indexOf(true));//getting indez
// console.log(Number.isInteger(fruits));//checking if its an Integr





//string manipulation

// const s = 'Hello, world, comma, space';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,5));
// console.log(s.split(''));//splitting into an array separeated by lenght 1
// console.log(s.split(' '));//------- separeated by each word
// console.log(s.split(','));//------- separeated by comma space

//concatenation

//const name = 'John';
//const age = 30;
//normal concatenation
//console.log('My name is '+name+ ' and i am '+age)
//Template string wriiten in back ticks
//console.log(`My name is ${name} and I am ${age}`);

//String, Numbers, Boolean, null, undefined--PRIMITIVE DATATYPES

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;//explicitly undefined
// let z; //is implicitly undefined

//variables

// console.log(typeof Y);
//var  let, const -- varaibles