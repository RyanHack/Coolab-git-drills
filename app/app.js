var people = [{name: "Job", age: 21},{name: "Ryan", age: 26]
var otherPeople =[
    {name: "Aragorn", age: 160},
    {name: "Gimli", age: 145},
    {name: "Legolas", age: "unknown"}
]
var numbers = [1,2,3,4,5,6,7,8,9,10]

function even(a){
    return a.filter(function(val){return val%2===0})
  }
even(numbers)  