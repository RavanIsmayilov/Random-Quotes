 // ededin reqemlerinden en boyuyu
// var input = +prompt("Enter a number");
// var n = 0;
// var biggest = 0; 

// while (input > 0) {
//     var currentDigit = input % 10;

//     if (currentDigit > biggest ) {
//         biggest = currentDigit; 
//     }

//     input = input / 10;
// }

// console.log( Math.round(biggest));


// ededin cut reqemleri
// var input = +prompt("Enter a number");
// var evenNumber = 0; 

// while (input > 0) {
//     var currentDigit = input % 10;

//     if (currentDigit % 2 == 0 ) {
//         evenNumber = currentDigit + evenNumber * 10; 
//     }

//     input = Math.floor(input / 10);
// }

// console.log(+evenNumber);



// // ededin sade reqemleri
// var input = +prompt("Enter a number");
// var n = 1;
// var sadeNumber = 0; 

// while (input > 0) {
//     var currentDigit = input % 10;

//     if (currentDigit % n == 0 ) {
//         sadeNumber = currentDigit + sadeNumber * 10; 
//         n = n + 1;
//     }
//     if (n > 3) {
//       break;
//     }

//     input = Math.floor(input / 10);
// }

// console.log(sadeNumber);



// ededin kokaltisi
// var input = +prompt("Enter the number");
// console.log (input);

// x = input ** (1/2) ;
// console.log (x);



// sifir daxil edenedek ededlerin cemi
// var sum = 0;
// for (var i = 0; i < 5; i++){
//     var input = +prompt ("enter the number");

//     sum += input;

//     if (input == 0){

//         console.log (sum);

//     }
// }




// ededi orta
// var sum = 0;
// var mean = 0;
// for (var i = 0; i < 5 ; i++){

//     var input = +prompt ("enter the number");
//     sum += input;

// }

// mean = sum / i ;
// console.log (mean);


// ededin reqemlerinin kvadratlarin cemi
// var input = +prompt ("enter the number");
// var sum = 0;

// while (input > 0) {
//     var currentDigit = input % 10;

//     sum = sum + currentDigit ** 2 ; 

//     input = Math.floor(input / 10);
// }

// console.log(sum);




// ededi dereceye yukseltmek
// var answer = 0;
// var input = +prompt ( "enter the number");
// console.log (input);
// var degree = +prompt ( "enter the degree of number" );
// console.log (degree);
// answer = input ** degree;

// console.log (answer);


// paxlava
// var n = +prompt ( "Enter the number " );
// var empty = "   " ;
// var counter = 0 ;
// for ( var i = 0; i < n - 3; i ++) {

//     empty = empty + "   *   " + "\n";
//     empty = empty + "  ";

// }

//     for ( var j = 0; j < i  ; j ++ ) {
        
//         empty = empty + "  *** "  + "\n";
//         empty = empty + " ";

//     }

//     empty = empty + " *** "  + "\n";

    
//     for ( var i = 0; i < n - 3  ; i ++ ) {
            
//         empty = empty + "   *** "  + "\n";
//         empty = empty + " ";

//     }

//     for ( var j = 0; j < i ; j ++) {

//         empty = empty + "    *   " + "\n";
//         empty = empty + "  ";

    
//     }
    
// console.log ( empty );


// var counter = 0;
// for ( var i = 0 ; i < 5 ; i ++ ) {

// var input = +prompt ( "Enter the number");


// if ( input % i == 0 ) {

//         if (i < 2) {

//             console.log (input);
//         }

//     }
// }




// ededden reqemleri cemini cixmaq tek eded alinana kimi
// bunu tamamla
// var input = +prompt ( "ededi daxil et");
// var sum = 0 ;
// for (var i = 0; i < input ; i++) {

//     k = input % 10 ;


//     sum = sum + k;

//     input = input - k ;
//     input = input / 10; 
    
// }
// console.log (sum);
// while (input > 0) {
//     input = sum ;

// }

//  console.log(input) ;



// string ile 3 reqemli ededin sonuna evveline 3 yazmaq
// var input = +prompt("Enter a 3-digit number:");

//     var result = "3" + input + "3";

//     console.log("result:", result);





// ededin bolenlerinin cemi ozunden basqa mukkemmel eded

// var input = +prompt ("ededi daxil et");
// var n ;
// var sum = 0;
// for (n = 1; n < input ; n++) {
// if (input % n == 0) {
//   sum += n;

//  }
// }
// console.log (sum);




// ededin sade bolenleri

// var input = +prompt ("ededi daxil et");
// var k;
// for ( var n = 2; n <= input ; n++) {
// if (input % n == 0) {

//     k = n

//     }
//     for ( var i = 0; i < k; i++) {
//     if (k % i == 0) {

//         if( i < 2){

//             console.log (k);

//         }

//         }
//     }



// ededin sade murekkeb olmasi
// var input = +prompt ("eded daxil et");
// var counter = 0;

// for (var n = 0; n <= input; n++) {
    
//     if (input % n == 0) {
//         counter += 1;
//         console.log (n);
//     }
// }
//      if (counter == 1){

//         console.log ("eded ne sade ne murekkebdir");
//     }
//     else if  (counter <= 2) {

//         console.log ("eded sadedir");
//     }

//     else {
//         console.log ("eded murekkebdir");
//     }










// ededin function ile tersinin tapilmsai

// function tersiniTap (input) {
//     var tersi = "";

//     for (var i = input.length -1; i >= 0; i--){

//          tersi += input[i]
//     }

//     return tersi
// }

// console.log (+tersiniTap ("5890"));




// input ile daxil edilmis ededin stringle tersine cevrilemesi
// var input = prompt ("eded daxil et");
// var tersi = ""; 
//     for(var i = input.length-1 ; i >= 0; i--){

//         tersi += input [i];
        
//     }


//     console.log (+ tersi);





// ededin tersinin bolenleri
// var input = prompt ("eded daxil et");
// var tersi = ""; 
//     for(var i = input.length-1 ; i >= 0; i--){

//         tersi += input [i];
        
//     }


//     console.log (+ tersi);

//     for (var n = 0; n <= tersi; n++) {
    
//     if (tersi % n == 0) {

//         console.log (n);
//     }
// }




// ededlerin yan - yana yigilmasi string ile
// var combine = " ";
// for (var n = 0; n < 3; n++) {
//     var input = +prompt ("eded daxil et");
//     combine = combine + input
// }
// console.log (combine);


// yarimciq piramida
// function drawPyramid(n){
//     var string = ""
//     for (let i = 1; i <= n; i++){

//         for(let j = 1; j <= i; j++){
//             string = string + j + " " ;

//         }

//         string += "\n"
//     }
//     return string;
// }

// console.log (drawPyramid(7))




 // ici bos kvadrat
// function drawSquare(n) {
//     var string = "";
//     for (let i = 1; i <= n; i++){

//         for(let j = 1; j <= n; j++){
 
//             if (i == 1 || i == n || j == 1 || j == n) {

//             string = string + j + " " ;
//             }
//             else {
//                 string = string  + "  "
//             }
//         }

//         string += "\n"
//     }

    
//     return string;
// }

// console.log (drawSquare(7))




// a ile b nin yerinin deyismesi
// // var a = 10;
// // var b = 7;
// // a = a + b;
// // b = a - b;
// // a = a - b;
// // console.log (a);
// // console.log (b);




// fibanocci
// var a = 0;
// var b = 1;
// var c = 1;
// for (var i = 1; i <= 8; i++) {

//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c);

// }






// herfin nece defe tekrarlanmasi
// var string = "llllrreredadsa";
// var count = 0;

// for (var i = 0; i < string.length; i++) {

//     if (string[i] === 'l') {
//         count++;
//     }
// }

// console.log(+ count);







// input ile daxil olunan birinci ededden ceminden ikinci ededin reqemleri ceminin cixilmasi
// var input = +prompt ("enter the number");
// var input2 = +prompt ("enter the number");
// var sum = 0;
// while (input2 > 0){

//     k = input2 % 10;

//     sum = sum + k;
    
//     input2 = input2 - k;

    
//     input2 = input2 / 10;

// }
// console.log (+sum);

// var c = 0;
// c = input - sum;
// console.log (c);




// anagram

// function anagram (){


//     var str1 = "blue";
//     var str2 = "dsad";

//     if (str1 !== str2){

//         return false;
        
//     }

//     str1 === str2 ;
//     console.log ("this is anagram");
// }
// console.log(anagram()) 




// cumledeki en uzun soz
// function longestword(){

//     var cumle = "ravan yaxsi futbol oynayir"
//     var words = cumle.split(" ");
//     var longword = words[0]


// for (var i = 0; i < words.length; i++) {

//    if(words[i].length > longword.length){

//     longword = words[i];

//    } 
// }
//    return longword
// }
// console.log(longestword());




// cumledeki en qisa soz
// function shortestword(){

//     var cumle = "ravanXzZx yaxsi futbolZxZ oynayir"

//     var words = cumle.split(" ");
//     var shortword = words[0];



// for (var i = 0; i < words.length; i++) {

//    if(words[i].length < shortword.length){

//     shortword = words[i];

//    } 

// }
//    return shortword
// }
// console.log(shortestword());





// function extractMiddle() {

//     var position;
//     var str;

//     if(str.length() % 2 == 1) {
//         position = str.length() / 2;
//         length = 1;
//     } else {
//         position = str.length() / 2 - 1;
//         length = 2;
//     }

//     result = str.substring(position, position + length)

// }

// extractMiddle("handbananna");






// verilmis edede qeder olan cut ededlerin cemi
// function insum() {
//     var input = +prompt("enter the number")
//     var sum = 0;
//     for (var i = 0; i < input; i++) {

    
//     if(i % 2 == 0) {

//         sum += i;
        
//     }
//     }

//     return sum;

// }
// var result = insum();
// console.log (result)



// function Middlechar(str) {

//     var position;
//     var str;

//     if(str.length() % 2 == 1) {
//         position = str.length() / 2;
//         length = 1;
//     } else {
//         position = str.length() / 2 - 1;
//         length = 2;
//     }

//     result = str.substring(position, position + length)

// }

// Middlechar("handbananna");