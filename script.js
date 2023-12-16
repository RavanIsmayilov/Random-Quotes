const quotes = ["loradsdem dasipsum dodasdlor sit amet",
"lorem ipsum dolosddsdr sit amet","loresm ipsum dolor sit amet",
"lorem ipsum dolosadaar sit amet","loredsdm ipsum dolor sit amet",
"lorem ipsum dolodadsadr sit amet","loresam ipsum dolor sit amet"]


function newQuoteGenerator() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteElement = document.getElementById("quote-paragraph")
    quoteElement.innerHTML = randomQuote;

    


}


























































// var  n = 5;
// var romb = "";
//  for (let i = 0; i <= n;  i++) {
//    for (let j = n; j > i; j++) {
//      console.log(i)
//      romb += " ";
//    }
//    for (let k = 0; k < i; k++) {
//      romb +=" *";
//   }
//    romb +="\n"
//  }

//  console.log(romb);







