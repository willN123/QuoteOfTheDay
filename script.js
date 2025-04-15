// Collection of quotes
const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" }
];

// Function to get today's quote based on the date
function getTodaysQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return quotes[dayOfYear % quotes.length];
}

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeLeft = tomorrow - now;

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('time-until-next').textContent = 
        `${hours}h ${minutes}m ${seconds}s`;
}

// Function to display the quote
function displayQuote() {
    const todaysQuote = getTodaysQuote();
    document.getElementById('quote-text').textContent = todaysQuote.text;
    document.getElementById('quote-author').textContent = `― ${todaysQuote.author}`;
}

// Initial display
displayQuote();

// Update countdown every second
setInterval(updateCountdown, 1000);

// Check for date change every minute
setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        displayQuote();
    }
}, 60000); 