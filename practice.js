

// // let cost = 27.83;
// // let payment = 100;

// // let change = (payment - cost).toFixed(2);
// // const billDenominations = [50, 20, 10, 5, 1];

// // console.log("Change breakdown:");
// // let i = 0;
// // while (change > 0 && i < billDenominations.length) {
// //   const denomination = billDenominations[i];
// //   let bills = Math.floor(change / denomination);
// //   if (bills > 0) {
// //     console.log(`${denomination}$: ${bills}`);
// //     change -= bills * denomination;
// //   }
// //   i++;
// // }
// // for (let i = 1; i <= 100; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //       console.log("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //       console.log("Fizz");
// //     } else if (i % 5 === 0) {
// //       console.log("Buzz");
// //     } else {
// //       console.log(i);
// //     }
// //   }
// //   for (let i = 1; i <= 5; i++) {
// //     console.log(i);
// //   }
// //     let stars ="";
// // for(i=0;i<=10; i++){

// // stars+="* ".repeat(i)
// // stars+="\n"

// // }
// // console.log(stars)


// let isItAPalindrome;

// let candidate = "Was it a rat I saw?";

// cleanedCandidate = candidate.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

// spellBackwards=cleanedCandidate.split("").reverse("").join("");

// if(spellBackwards===cleanedCandidate){
//     isItAPalindrome=true;
//     console.log("It's a palindrome.")
// } else{
//     console.log("Nope. ")
// }

for (let i=1; i<11; i++){
    //   console.log(i)
    // };
    //            i<21
    // for (let i=1; i<=20; i++){
    //   let isEven = i%2 === 0;
    //   if (isEven) {
    //    console.log(i);
    //   };
//     // };
//     for (let i=1; i<11; i++){
//         //   console.log(i)
//         // };
//         //            i<21
//         // for (let i=1; i<=20; i++){
//         //   let isEven = i%2 === 0;
//         //   if (isEven) {
//         //    console.log(i);
//         //   };
//         // };
//        // for (let i=1; i<11; i++){
// //   console.log(i)
// // };
// //            i<21
// // for (let i=1; i<=20; i++){
// //   let isEven = i%2 === 0;
// //   if (isEven) {
// //    console.log(i);
// //   };
// // };
// let myString = "apples are great!";
// // 1. Strings have a length property
// // So, we can know how long the string is.
// // 2. We can look at the letters using .charAt() tool.
// // let thisLetter = myString.charAt(0);
// // console.log(thisLetter)
// let total = 0;
// for (let i=0; i<myString.length; i++) {
//   // can I see each letter?
//   let thisLetter = myString.charAt(i);
//   console.log(thisLetter)
//   // If we find a vowel, +1 to the total.
//   if (thisLetter === "a" || thisLetter === "e" || thisLetter === "i" || thisLetter === "o" || thisLetter === "u" ) {
//     total = total+1;
//   }
// }
// console.log(total);


// const text = "apple apple apple";
// const pattern = /apple/g;
// let result;

// while ((result = pattern.exec(text)) !== null) {
//   console.log(`Found '${result[0]}' at position ${result.index}`);
// }}
