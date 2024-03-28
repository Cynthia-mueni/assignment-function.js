//1

function sorting(){
    const names=['cynthia','jane','faith','Ruby'];
    console.log(names.sort())
    console.log(log.reverse());
}
//2

function checkElement(){
    let arr=arr.forEach(element =>{
        if (element > 0) {
            console.log("positive");
          } else if (element < 0) {
            console.log("negative");
          } else {
            console.log("zero");
          }
       });
      }
    
      //3
      let employee = [
        { id: 1 },
        { name: "Cynthia" },
        { salary: [1000, 5000, 2000, 24000] },
      ];
        employee.sort(function(a, b) {
        return a.salary - (b.salary);
      });
      employee.forEach((person) => console.log(employee.salary));
     console.log(employee);

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



