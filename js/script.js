// conditional statement
// to find the bigger number among two values
/*
var firstNumber = 56;
var secondNumber = 127;
console.log(firstNumber,secondNumber);
if (firstNumber > secondNumber) {
   document.getElementById('result').innerHTML = firstNumber + " is the biggest <br>" ;
} else {
  document.getElementById('result').innerHTML = secondNumber + " is the biggest <br>" ;
}

var age1 = 40 ;
var age2 = 34 ;
var age3 = 65 ;


if ((age1 > age2) && (age1 > age3)) {
    document.getElementById('result').innerHTML = age1 + " is the biggest <br>" ;
} else if (age2 > age3){
    document.getElementById('result').innerHTML = age2 + " is the biggest <br>" ;
} else {
  document.getElementById('result').innerHTML = age3 + " is the biggest <br>" ;
}

//calculate coffee price consider discount.... condition 5 coffee

var coffeePrice = 3.45;
var quantity = prompt("how many coffee(s)?");

var cost = coffeePrice * quantity;

var coffeeType = prompt("What coffee - espresso or flatwhite?");

var discountedCost = coffeePrice * (95 / 100) * quantity;

if (coffeeType === "espresso") {
   document.getElementById('coffeeImage').innerHTML = '<img src="images/esspresso.jpeg" alt="Coffee"> ';
} else if (coffeeType === "flatwhite") {
   document.getElementById('coffeeImage').innerHTML = '<img src="images/flatwhite.jpeg" alt="Coffee"> ';
}

if (quantity >= 5) {

   document.getElementById('result').innerHTML = "</br> </br>The bill is $" + discountedCost ;
} else {
  document.getElementById('result').innerHTML = "</br> </br>The bill is $" + cost;
}
*/
/*
var muffinQuantity = prompt("How many muffins?");

if (muffinQuantity < 9) {
  var muffinPrice = 2.35;
} else if (muffinQuantity < 25) {
  var muffinPrice = 2.10;
} else {
  muffinPrice = 1.90;
}

var muffinCost = muffinPrice * muffinQuantity;
document.getElementById('result').innerHTML = "The total cost is $" + muffinCost;
*/

var steakQuantity = parseInt(prompt("how many steaks?"));
var sauceQuantity=0;

if (steakQuantity >= 10) {

  document.getElementById('result').innerHTML = "You will get 5 free steaks";
} else if (steakQuantity >= 8) {
  document.getElementById('result').innerHTML = "You will get 4 free steaks";
} else if (steakQuantity >= 6) {
  document.getElementById('result').innerHTML = "You will get 3 free steaks";
} else if (steakQuantity >= 4) {
  document.getElementById('result').innerHTML = "You will get 2 free steaks";
} else if (steakQuantity >= 2) {
  document.getElementById('result').innerHTML = "You will get 1 free steak";
}

//switch

switch(steakQuantity) {
  case 10:
    console.log(5, "free steaks");
    break;
  case 9:
    console.log(4, "free steaks");
    break;
     case 8:
    console.log(4, "free steaks");
    break;
     case 7:
    console.log(3, "free steaks");
    break;
     case 6:
    console.log(3, "free steaks");
    break;
     case 5:
    console.log(2, "free steaks");
    break;
     case 4:
    console.log(2, "free steaks");
    break;
     case 3:
    console.log(1, "free steaks");
    break;
     case 2:
    console.log(1, "free steaks");
    break;
    default:
    console.log("Sorry no free steak");
}


  var sauce  = prompt("do you want sauce?Please enter Yes or No.").toLowerCase();
  // ==  to check for equivalence or === to check for equivalence and type
  if (sauce === "yes") {
   sauceQuantity = parseInt(prompt("how many sauce?"));
    //convert a string input into integer.
  }


console.log(steakQuantity,sauceQuantity);
var steakCost = steakQuantity * 25.60 + sauceQuantity * 2;
console.log(steakCost);
document.getElementById('result').innerHTML += "<br> steakCost= $" + steakCost.toFixed(2);
