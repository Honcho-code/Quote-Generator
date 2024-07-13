const quoteText = document.querySelector(".quoteText");
const quoteauthor = document.querySelector(".author");
const QouteBtn = document.querySelector(".QouteBtn");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const tweetBtn = document.querySelector(".tweet");

const Quotes = [
    {
    quote: "The only way to do great work is to love what you do",
    author: "Steve Jobs"
    },
    {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
    },
    {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
    },
    {
    quote: "Life is 10% what happens to us and 90% how we react to it",
    author: "Charles R. Swindoll"
    },
    {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
    },
    {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
    },
    {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
    },
    {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
    },
    {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison"
    },
    {
    quote: "The harder I work, the luckier I get",
    author: "Gary Player"
    },
    {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
    },
    {
    quote: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau"
    },
    {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
    },
    {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
    },
    {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
    },
    {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
    },
    {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James"
    },
    
]
setTimeout(randomQuote,1000)
function randomQuote(){
    let random = Math.floor(Math.random() * Quotes.length);
    quoteText.innerHTML = Quotes[random].quote
    quoteauthor.innerHTML = Quotes[random].author
}

QouteBtn.addEventListener("click", randomQuote)

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${quoteauthor.innerHTML}`);
    speechSynthesis.speak(utterance)
})
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerHTML)
})
tweetBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerHTML}`;
    window.open(tweetUrl, "_blank");
})
