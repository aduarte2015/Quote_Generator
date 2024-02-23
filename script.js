const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new Quote
function newQuote() {
    // Check if there are quotes available
    if (apiQuotes.length > 0) {
        // Pick random quote
        const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

        // Check if author field is blank and replace it with "unknown"
        quoteText.textContent = quote.text;
        authorText.textContent = quote.author || "Unknown";
        
    } else {
        console.error("No quotes available.");
    }
}

newQuote()

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

// Event listener for New Quote button
newQuoteBtn.addEventListener('click', newQuote);

// On Load
getQuotes();
