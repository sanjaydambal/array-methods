// Examples on Map,reduce,filter,forEach,find
const numbers = [1, 5, 8, 9, 10, 45, 78, 56, 79, 57]
function sqr(i) {
    return i * i
}
const sqrnumbers = numbers.map(sqr);
console.log(numbers);
document.getElementById("vote").innerHTML=(sqrnumbers);

const num = [64, 81, 121, 225, 625, 1000];
function sqrt(num) {
    return Math.sqrt(num);
}
const num2 = num.map(sqrt);
console.log(num);
console.log(num2);

const persons = [
    { fname: "sanjay", lname: "dambal" },
    { fname: "vinay", lname: "kumar" },
    { fname: "swapnil", lname: "naik" }
]
function fullname(items) {
    return "my name is " + items.fname  + " " + items.lname;
}
const getFullName = persons.map(fullname);
console.log(getFullName);

const voters = [18,16,15,25,54,67]
function vote(i){
    return i>=18
}
const votersList = voters.filter(vote);
    console.log(votersList);
function vList(){
    const votersList = voters.filter(vote);
    console.log(votersList);
}
vList();
const students = [
    {name1:"sanjay", USN:"VD001",Age:25,marks:85},
    {name1:"vinay", USN:"VD002",Age:24,marks:95},
    {name1:"manju", USN:"VD003",Age:28,marks:80},
    {name1:"gajraj", USN:"VD004",Age:23,marks:75},
]
function fullDetails(i){
    
    return i.Age >= 24 &&
    i.marks >= 85;
}

const students2 = students.filter(fullDetails);
console.log(students2);

const age = [25,48,65,47,52,74]
function reducedage (curr,acc){
    return acc*curr;
}
const age1 = age.reduce(reducedage);
console.log(age1);
const studentResult1 = [
    { subject: 'Maths', marks: 78 },
    { subject: 'Physics', marks: 80 },
    { subject: 'Chemistry', marks: 93 }
]
function result(x1) {
    return x1.marks
    
}
const result1 = studentResult1.map(result);
console.log(result1);
function r2(a,b){
    return a+b.marks
}
const result2 = studentResult1.reduce((r2),0);
console.log(result2);

const students1 = [
    {name1:"sanjay", USN:"VD001",Age:25,marks:85},
    {name1:"vinay", USN:"VD002",Age:24,marks:95},
    {name1:"manju", USN:"VD003",Age:28,marks:80},
    {name1:"gajraj", USN:"VD004",Age:23,marks:75},
]
const result10 = students1.filter(obj => obj.Age > 24).map(obj => obj.marks).reduce((a,b) => a+b);
console.log(result10)
students.forEach((a) => {console.log(a.name1)})

const total = studentResult1.reduce((accumulator, currentValue) => accumulator + currentValue.marks,0);

console.log(total);

const Employees = [
    {name2:"sachin",ID:25,salary:25000},
    {name2:"sanchay",ID:28,salary:35000},
    {name2:"sunidhi",ID:20,salary:45000},
    {name2:"shreya",ID:15,salary:28000},
]
const employeeSalary = Employees.filter(i => i.salary > 25000).map(obj => obj.salary).reduce((x,y) => x+y);
console.log(employeeSalary);

const g = [2,5,8,7,9,3]
const g1 = g.slice(5,6);
console.log(g1);
g.splice(2,2,45,78);
console.log(g);

const emp = [
    {name3:"shamala",Experience:2,salary:25000},
    {name3:"sunaina",Experience:4,salary:35000},
    {name3:"keerthi",Experience:5,salary:45000},
    {name3:"devika",Experience:2,salary:28000},
]
 const empDetails = emp.filter(i => i.Experience > 2).map(i => {return i.name3});
 console.log(empDetails);
 emp.forEach((i) => {console.log (i.salary)});
 
 emp.push({name3:"savanur",Experience:3,salary:28000});
 console.log(emp);
 const empFind = emp.find(i => i.Experience === 2);
 console.log(empFind);
 