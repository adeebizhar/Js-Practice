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


// --------- String Methods!--------

// let letter = "    adeeb izhar  ";
// let upperCase = letter.toUpperCase().trim();
// console.log(letter);
// console.log(upperCase);

// UpperCase & LowerCase Practice!

// let cities = ["karachi", "lahore","islamabad","peshawar", "quetta","heyderabad"];

// let citytoCheck = prompt("Software house branches Available in Cities");
// let isFound = false;

// for (let index = 0; index < cities.length; index++) {
    
//     if (citytoCheck.toUpperCase().trim() === cities[index].toUpperCase()) {
//         isFound = true;
//         document.write(" <h1> Software house Available in "+ cities[index].toUpperCase() + "</h1>")
//     }
    
// }

// if (!isFound) {
//     document.write(" <h1> Software house Not Available in "+ cities[index].toUpperCase() + "</h1>")
// }


// let char = "adeeb izhar you are a best developer in the world, I want to heard this . This is my goal!";
// let parts = char.split(" ");
// // console.log(parts);

// Abberivation!
// let name = prompt(" Abberivation").trim().toUpperCase();
// let charsInshort = name.length;

// let nameAbbr = name;
// if (charsInshort > 3) {
//      nameAbbr = name.slice(0,3);
// }

// console.log(nameAbbr);


//  let goal = "adeeb izhar you are a best developer in the world, I want to heard this . This is my goal! izhar";
// let text = goal.indexOf("heard");
// let length = goal.length;
// let takeTheword = goal.charAt(goal.length -2).toUpperCase();
// let replace = goal.replace("izhar","sheikh");
// let replace1 = goal.replace(/izhar/g,"sheikh");// "g" means global!
// let text1 = goal.lastIndexOf("goal")
// console.log(replace1);
// console.log(takeTheword);
// console.log(length);
// console.log(text1);


// ------Math methods-------


// let petrol = 265.4;
// console.log(Math.floor(petrol));
// console.log(Math.ceil(petrol));
// console.log(Math.round(petrol));
// console.log(Math.random(petrol));
// console.log(Math.floor(Math.random()*10)+1);



// ------Guess the number (Game) :

// document.write("<h1> Welcome to the Gaming Wesite:</h1>");

// let user = +prompt("Let's play the game! Guess the number between 1 to 50");
// let num = Math.floor(Math.random()*50)+1;
//  console.log(num);
// if (num === user) {
// document.write("<h1>Congrates! You has won</h1><br>");
    
// } else if (num > user ) {
    
//     document.write("<h1>Oops 😅 your dialed number is too small — the right one is   " + num + "!</h1><br>");

// } else if (num < user) {
    
//      document.write("<h1>Oops 😅 your dialed number is too high — the right one is   " + num + "!</h1><br>");
// } else {
    
//     document.write("<h1> Not a Number </h1><br>");
// }


// ---- Toss------!

// let toss = Math.floor(Math.random()*2);
// let userInput = +prompt("1 is Head, 2 is Tails");

// if (userInput === toss) {
//     document.write("<h1 >Heads"+ "</h1>");
// } else  {
//     document.write("<h1>Tails"+ "</h1>");
// }

// Converting String to integers & decimal!

// let age = "18";
// console.log(age);
// console.log(parseInt(age));

// let num = "16.809";
// console.log(num);
// console.log(parseFloat(num));


// let persentage = 85.78;
// console.log(Number(persentage));

// Converting Number to String !

// let score = 305;
// console.log(String(score));
// console.log(score.toString());

// Decimal number lenght fixed !

// let persenTage = 89.79877645321098;
// console.log(+persenTage.toFixed(2));

// PI , power , Square root & Euler's formula!
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.pow(3,2));
// console.log(Math.floor(Math.sqrt(50,5)));

// Return Largest Number & Smallest Number !

// console.log(Math.max(22,70,89,94,20,37,73,105));

// console.log(Math.min(22,70,89,94,20,37,73,105));

// Convert the Negatinve number to positive Number!

// console.log(Math.abs(-789));



//      --------- Date & Time ---------

// let now = new Date();
// console.log(now);

// let theDay = now.getDay();
// let dayNames = ["Sunday","Monday","Tuesday","WednesDay","Thursday","Saturday"];
// let currentDay = dayNames[theDay];
// console.log(currentDay);

// let theMonth = now.getMonth();
// let monthNames = ["January","Feburary","March","April","May","June",
// "July","August","September", "October","November","December"];
// let currentMonth = monthNames[theMonth];
// console.log(currentMonth);

// let theDate = now.getDate();
// console.log(theDate);


// let theYear = now.getFullYear();
// console.log(theYear);

// let hour = now.getHours();
// console.log(hour);

// let minutes = now.getMinutes();
// console.log(minutes);

// let seconds = now.getSeconds();
// console.log(seconds);

// let miliSeconds = now.getMilliseconds();
// console.log(miliSeconds);

// let time = now.getTime(); // 1st jan 1970 midnight sa ab tk ka miliseconds!
// console.log(time);

// // Specifying a date & time!

// let today = new Date();
// let birth = new Date("November,6,2006");
// birth.setDate(4);
// let doomsDay = new Date ("2092,12, 25");
// doomsDay.setFullYear(2099);
// console.log(today);
// console.log(doomsDay);
// console.log(birth);


// let  now1 = new Date();
// now1.setMonth(0);
// now1.setHours(17);
// now1.setMinutes(59);
// now1.setSeconds(4);
// now1.setMilliseconds(990);
// now1.setFullYear(2008);
// console.log(now1);

// --------- Age Calculater ------------

// let userInput = prompt("Type your BirthDate Ex. june 15, 2015");

// let now = new Date();
// let birthDate = new Date(userInput);

// let msDiff = now - birthDate;
// let days = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 30 * 12) );

// console.log(days);

//  ----- Advance Code for Age Calculater!---------

// let userInput = prompt("Type your BirthDate Example (june 15 2015) :");
// let now = new Date();
// let birthDate = new Date(userInput);
// let years = now.getFullYear() - birthDate.getFullYear();
// let months = now.getMonth() - birthDate.getMonth();
// let days = now.getDate() - birthDate.getDate();

// if (days < 0) {
//     months--;

//     let prevMonths = new Date(now.getFullYear(),
// now.getMonth, 0);
// days += prevMonths.getDate();

// }

// if (months < 0) {
//     years--;
//     months += 12;
// }

// document.write("<h1>Age Calculater :</h1>")
// document.write(`<h1> Your Age is ${years} years , ${months} months , and ${days} days. </h1>`)


// Function!

// function myFunction() {
//     console.log("I love js");
    
// };

// myFunction();

// function greeting(msg) {
//     alert(msg);
// };

// greeting("Hellow , There");


// function mult(msg , num) {
//     console.log(msg * num);
    
// };

// mult(218,10);


// function percenTage(num1,num2) {
//     return num1 * 100 / num2  ;
// };

// let score = percenTage(310,500);
// console.log(score);
