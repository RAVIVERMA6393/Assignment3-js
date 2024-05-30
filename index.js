// Q.1
// const countCharacters = () =>{

// // let B = "AbaDd"
// let B = prompt('enter the words')
// let count = 0;
// let result = 0;

// for(let i=0; i<B.length; i++){
//     if(B[i] === "A"){
//         count ++;
//     }
//     else if(B[i] === "D"){
//         result ++;
//     }
// }
// return[count, result];
// }
// console.log(countCharacters());

// Q.2
// var Count_Occ = () => {

// let s = prompt("enter value")
//   let count=1;
//   let str='';
//   let op="";
//   for(let i=0;i<s.length;i++){
//   for(j=i+1;j<s.length;j++){
//   if(s[i]==s[j]){
//   count++;
//   }
//   }
//   if(count>1){
//   str=s[i];
//   op=op+" "+s[i]+count;
//   s=s.replace(str,' ');
//   s=s.split(str).join('');
//   }
//   count=1;
//   }
//   return op.split(' ').sort().join('');
//   };

//   console.log(Count_Occ());

// Q.3

// function countVowel(str) { 

//   // find the count of vowels
//   const count = str.match(/[aeiou]/gi).length;

//   // return number of vowels
//   return count;
// }

// // take input
// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);


// Q.4

// var string1 = "Prep";
// var string2 = "Bytes";
// var str = string1.concat(string2);
// console.log(str);

// Q.5
// var str = "CeDqe";
// console.log(str.length);


// Q.7
// var str1 = "PrepBytes";
// var str2 = "Technologies";
// var str = str1+str2;
// console.log(str);

// Q.8 Palindrome check

// var string = prompt("Please enter a string");
// var len = string.length;
// var msg = 'it is a Palindrome';
// for(var i = 0; i < len/2; i++){
//   if(string[i] != string[len] - 1 - i){
//     msg = 'It is not a palindrome';
//   }
// }
// console.log(`${string}: ${msg}`);



// Q.9 reverse 
// let  myarr = "I am ravi verma"
// let b =  myarr.split('');
// let c = b.reverse();
// let d = c.join('');
// console.log(d);


// Q.10  Match the Strings
// let a1 = "ravi";
// let b1 = "ravi";
// if(a1 === b1){
//     console.log("yes")
// }else{
//     console.log("no")
// }


// Q.11 String replace
// var str1 ="Hi, I am You. You Prepbytes"
// var str = str1.replaceAll("You","");
// console.log(str);

// // Q.12 Split the String
// var str2 =("I am Ravi Verma")
// var str3 =  str2.split(" ");
// console.log(str3)

// Q.13 count the vowel and consonant

// var mystring = prompt("Please enter a string");
// const regvowel = /[aeiou]/gi;
// const regconsonant = /[^aeiou\s]/gi;

// console.log(`vowel count: ${mystring.match(regvowel).length}`);
// console.log(`consonant count: ${mystring.match(regconsonant).length}`);
