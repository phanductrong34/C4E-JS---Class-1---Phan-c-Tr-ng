const quoteHTML = document.getElementById("log1");

const authorHTML = document.getElementById("log2");

const quoteJSON= "http://quotes.rest/qod.json"
async function loadAPI(){
    let connection = await fetch(quoteJSON);
    let data = await connection.json()
    console.log("GET successful")
    console.log(data);
    showData(data)
}
loadAPI()
function showData(data){
    let logQuote = data.contents.quotes[0].quote;
       console.log(logQuote);
    let logAuthor = data.contents.quotes[0].author;
        console.log(logAuthor);
    quoteHTML.innerHTML = logQuote;
    authorHTML.innerHTML = logAuthor;
    
}
const button = document.getElementById("btn")
button.addEventListener('click',()=>{
    alert("Sorry, that's the only quote for today, comeback tomorrow")
})

