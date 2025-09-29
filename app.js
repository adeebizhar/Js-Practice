console.log("Javascript is connected!");

// let numb = prompt("Enter a number ");

// if (numb % 2 == 0) {

//     alert( "the number is even");

// }else  if (numb % 2 !== 0) {

//     alert("the number is odd");

// }

// let temprature = prompt ("type the  Temprature  in your's Country ")

// if (temprature > 30 ){

//     alert("It's hot");

// }else if (temprature < 30 && temprature > 20 ){

//     alert("Nice weather");

// }else  if (temprature < 20 ){

//     alert("It's cold"); 

// }else{

//     alert("Please enter the valid temprature");

// }



// let password = 16345;

// if (password === 12345){
//     console.log("Login Succesfull");
    
// }else{
//     console.log("Login Failed");
    
// }

// let num1 = Number(prompt("Enter First Number:"));
// let num2 = Number(prompt("Enter Second Number:"));
// let operater = prompt("Enter operater(+ or -):");

// if (operater === "+"){
//     console.log("Sum =" + (num1 + num2));
    
// }else if (operater === "-")  {
// console.log("Difference =" + (num1 - num2));

// }else {
//     console.log("Invalid Operater");
    
// }


//  Calculater :

//    let num1 = prompt ("Enter First number:");
//    let num2 = prompt("Enter Second number:");
//    let operater = prompt ("Enter Operater (+,-,*,/,%):");

//    if (operater === "+"){
//       console.log("num1 + num2 =" + (num1 + num2));
      
//    }else if (operater === "-"){

//       console.log("num1 - num2 =" + (num1 - num2));

//    }else if (operater === "*"){

//       console.log("num1 * num2 =" + (num1 * num2));

//    }else if (operater === "/"){

//       console.log("num1 / num2 =" + (num1 / num2));
//    }else if (operater === "%"){

//       console.log("num1 % num2 =" + (num1 % num2));
//    }else {
// console.log("Invalid Operater");

//    }

// Loop Practice!

// let stdNames = ["Musa","Haroon", "Malik Shahzain","ADEEB IZHAR","A.Raheem", "Shehroz Alam","Shehroz Shahid"];
// for (let i = 0; i < stdNames.length;  i++) {
     
//     console.log(stdNames[i]);
// }

// let stdNames = ["Musa","Haroon", "Malik Shahzain","ADEEB IZHAR","A.Raheem", "Shehroz Alam","Shehroz Shahid" , "Dawood","Raheel","Abbas","Qadir"];
// let presentStd = prompt("Find out if a student is present or absent :");
// let isFound = false;

// for (let i = 0; i < stdNames.length; i++) {
//     if (stdNames[i] === presentStd) {
//         isFound = true;
//         console.log("The Student is present");
//         break;
        
//     }
     
// }

// if (isFound === false) {
//     console.log("The Student is Absent");
    
// }

// Inner loop & outer loop!
// for (let i = 1; i <= 10; i++) {
//     let star = " ";
    
//     for (let j = 1; j <= i ; j++) {
//     star += " * " ;
        
//     }
//     console.log(star);
    
// }


// let std = [
//     ["Ali" , [80,90,70]],
//     ["Omar",[90,70,60]],
//     ["Junaid",[80,90,95]]
// ];

// for (let i = 0; i < std.length; i++) {
//       console.log(std[i]);
      
    
// }


// let std = [
//     ["Ali" , [80,90,70]],
//     ["Omar",[90,70,60]],
//     ["Junaid",[80,90,95]]
// ];

// for (let i = 0; i < std.length; i++) {
//         let name = std[i][0];
//     let total = 0;
//       let perc = 0;

//       for (let j = 0; j < std[i][1].length; j++) {
      

//         total += std[i][1][j];
       
//       }

      
//     console.log(name + " :"+ total );
    
// }


// String Method Practice!


// let str = "      Hellow World  ";
// console.log(str);

// str = str.trim()
// str = str.toUpperCase()
// console.log(str);

// let str = "          Hellow World  ";
//  str = str.trim().toLowerCase();

// console.log(str);

// let firstChar = str.slice(0,3).toUpperCase();
// console.log(firstChar);

// firstChar = str.slice(-2);
// console.log(firstChar);

// Months name slice start 3 words !

// let month = ["JANUARY", "FEBRUARY","MARCH","APRIL","MAY", "JUNE", "JULY", "AUGUST","SEPTEMBER" ,"OCTOBER",
// "NOVEMBER","DECEMBER"];
// let input = prompt("Type any months name").trim().toUpperCase();

// let startChar ;
// let isFound = false;
// for (let index = 0; index < month.length; index++) {
//    let lowercase =  month[index].toUpperCase();
//    // console.log(lowercase);

//    if (input === lowercase) {
//       startChar = lowercase.slice(0,3);
//       isFound = true;
//       break;
//    }

// }

// if (!isFound) {
//    console.log("Write the correct Months Name!");
   
// }

// console.log(startChar);


// Capitialize first letter after spacing!


// let lowercase = "abcdefghijklmnopqrstuvwxyz";
// let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let input = prompt("Type anything here ");

// let result = "";


// let  isStart = true;

// for (let i = 0; i < input.length; i++) {
//     let char = input[i];

//     if (isStart) {

//         let found = false;

//         for (let j = 0; j < lowercase.length; j++) {
            
//             if (char === lowercase[j]) {
//                 result += uppercase[j];
//                 found = true;
//                 break;
//             }
            
//         }
//         if (!found) {
//             result += char;
//         }

//         isStart = false;
//     }else{
//         found = false;

//         for (let j = 0; j < uppercase.length; j++) {
            
//             if (char === uppercase[j]) {
//                 result += lowercase[j]
//                 found = true;
//                 break;
//             }
            
//         }

//         if (!found) {
//            result += char;

//         }
//     }

//     if (char == " ") {
//         isStart = true;
//     }
    
// };

// console.log(result);

// let petrol = 265.4;
// console.log(Math.floor(petrol));
// console.log(Math.ceil(petrol));
// console.log(Math.round(petrol));
// console.log(Math.random(petrol));
// console.log(Math.floor(Math.random()*10)+1);




// Guess the number (Game) :

document.write("<h1> Welcome to the Gaming Wesite:</h1>");

let user = +prompt("Let's play the game! Guess the number between 1 to 50");
let num = Math.floor(Math.random()*50)+1;
 console.log(num);
if (num === user) {
document.write("<h1>Congrates! You has won</h1><br>");
    
} else if (num > user ) {
    
    document.write("<h1>Oh shit! so far your dailed Number so small  The Correct Number is : " + num + "</h1><br>");

} else if (num < user) {
    
     document.write("<h1>Oh shit! so far your dailed Number so big The Correct Number is :  " + num + "</h1><br>");
} else {
    
    document.write("<h1> Not a Number </h1><br>");
}


