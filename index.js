// davaleba N1

let saxeli ="Ana";
let saxeli1 = "Levani";
let anasasaki = 28;
let levanisasaki = 21;
let asakistring = "ანა ლევანზე 7 წლით უფროსია";
let sxvaoba = anasasaki - levanisasaki;

console.log(saxeli, saxeli1, anasasaki, levanisasaki, asakistring, sxvaoba);

//davaleba N2

let StudentsnameArr = ['John', 'Sam', 'Ann', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den'];
console.log(StudentsnameArr[4]);

//davaleba N3

let studentobj = {
  firstname: "Nick",
  lastname: "Morgan",
  fullname1: "Nick Morgan",
  age: 27,
  subject: ["Art", "History", "Math", "Psychology", "IT"],
  roommate: {
    fullname: "Mike Jones",
    age: 27
  }

}


for (let i = 0; i<5; i++){
  console.log(studentobj.subject[i]);
}

console.log(studentobj .fullname1);
let result = `${studentobj .fullname1} არის ${studentobj .age} და მისი რუმმეითი არის ${studentobj .roommate .fullname}`;

console.log(result);

//davaleba 4

let fruitnumber = ["banana", "orange", "apple", "mango", 2, 12];

let i = 0;
while(i<4){
  console.log(fruitnumber[i]);
  i++;
}


//davaleba 5


let numbers = [12,23,43,11,9,2,121,90];


if (numbers > 31, numbers % 2 == 0); {
    console.log('Element is greater than provided value and is EVEN');
} if (numbers < 31, numbers % 2 > 0); { 
    console.log('Element is less than provided value and is ODD');
}