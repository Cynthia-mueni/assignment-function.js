//1.
function reverseStringInArray(arr){
  const reverseStrings = arr.map(str => [...str].reverse().join(''))
  console.log(reverseStrings)
  console.log(reverseStrings.sort())
}
reverseStringInArray(["Cynthia","Jane","Faith","Ruby"])


//2
function checkElement(array,index){
const number = array[index]

if(number>0){
  return number + "is positive";
}else if (number <0){
  return number + "is negative";
}else{
  return number + "is zero";
}
}
const numbers = [1,-2,0,3,-4];
console.log(checkElement(numbers,3));


//3 Given an array of objects, where each object represents an employee with an id, name, and salary property, 
//write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortBySalary(employees){
return employees.sort((a, b) =>a.salary - b.salary )

}
const employees = [
  {id:1,name:'Cynthia',salary:500},
  {id:2,name:'Mueni',salary:1000},
  {id:3,name:'Nthenya',salary:3000}
]
const myEmployees = sortBySalary(employees);
console.log(myEmployees)
   

//4
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }
   multiply([4, 5, 6, 7]);
//5
function changeArray2(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * 8);
    const lastTwo = arr.slice(-2).map(item => item + 5);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   changeArray2([20, 30, 40, 50, 60]);



