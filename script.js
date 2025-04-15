// Collection of quotes
const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
    { text: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", author: "William W. Purkey" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling" },
    { text: "Don't walk in front of me… I may not follow. Don't walk behind me… I may not lead. Walk beside me… just be my friend.", author: "Albert Camus" },
    { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
    { text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
    { text: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'", author: "C.S. Lewis" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
    { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
    { text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr." },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
    { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
    { text: "I am so clever that sometimes I don't understand a single word of what I am saying.", author: "Oscar Wilde" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "Here's to the crazy ones. The misfits. The rebels... Because the people who are crazy enough to think they can change the world, are the ones who do.", author: "Steve Jobs" },
    { text: "Insanity is doing the same thing, over and over again, but expecting different results.", author: "Narcotics Anonymous" },
    { text: "I believe that everything happens for a reason... sometimes good things fall apart so better things can fall together.", author: "Marilyn Monroe" },
    { text: "It is better to be hated for what you are than to be loved for what you are not.", author: "Andre Gide" },
    { text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.", author: "H. Jackson Brown Jr." },
    { text: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.", author: "Jane Austen" },
    { text: "It is our choices, Harry, that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { text: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.", author: "Marilyn Monroe" },
    { text: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", author: "Albert Einstein" },
    { text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling" },
    { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
    { text: "As he read, I fell in love the way you fall asleep: slowly, and then all at once.", author: "John Green" },
    { text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" },
    { text: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.", author: "Neil Gaiman" },
    { text: "The fool doth think he is wise, but the wise man knows himself to be a fool.", author: "William Shakespeare" },
    { text: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.", author: "Maurice Switzer" },
    { text: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).", author: "Mark Twain" },
    { text: "Life is what happens to us while we are making other plans.", author: "Allen Saunders" },
    { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bil Keane" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
    { text: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.", author: "Friedrich Nietzsche" },
    { text: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.", author: "Elie Wiesel" },
    { text: "The man who does not read has no advantage over the man who cannot read.", author: "Mark Twain" },
    { text: "A woman is like a tea bag; you never know how strong it is until it's in hot water.", author: "Eleanor Roosevelt" },
    { text: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride...", author: "Pablo Neruda" },
    { text: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.", author: "Douglas Adams" },
    { text: "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.", author: "Groucho Marx" },
    { text: "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge...", author: "Albert Einstein" },
    { text: "I solemnly swear that I am up to no good.", author: "J.K. Rowling" },
    { text: "Love all, trust a few, Do wrong to none...", author: "William Shakespeare" },
    { text: "Have you ever been in love? Horrible isn't it? It makes you so vulnerable...", author: "Neil Gaiman" },
    { text: "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.", author: "Dr. Seuss" },
    { text: "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.", author: "George R.R. Martin" },
    { text: "A day without sunshine is like, you know, night.", author: "Steve Martin" },
    { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu" },
    { text: "Never put off till tomorrow what may be done day after tomorrow just as well.", author: "Mark Twain" },
    { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...", author: "Dr. Seuss" },
    { text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { text: "For every minute you are angry you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson" },
    { text: "This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up. Girls will be your friends - they'll act like it anyway. But just remember, some come, some go. The ones that stay with you through everything - they're your true best friends. Don't let go of them. Also remember, sisters make the best friends in the world. As for lovers, well, they'll come and go too. And baby, I hate to say it, most of them - actually pretty much all of them are going to break your heart, but you can't give up because if you give up, you'll never find your soulmate. You'll never find that half who makes you whole and that goes for everything. Just because you fail once, doesn't mean you're gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don't, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life's a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
    { text: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", author: "J.K. Rowling" },
    { text: "I love deadlines. I love the whooshing noise they make as they go by.", author: "Douglas Adams" },
    { text: "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.", author: "Friedrich Nietzsche" },
    { text: "There is no greater agony than bearing an untold story inside you.", author: "Maya Angelou" },
    { text: "If you judge people, you have no time to love them.", author: "Mother Teresa" },
    { text: "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.", author: "Sarah Dessen" },
    { text: "If you can't explain it to a six year old, you don't understand it yourself.", author: "Albert Einstein" },
    { text: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.", author: "Haruki Murakami" },
    { text: "Love is that condition in which the happiness of another person is essential to your own.", author: "Robert A. Heinlein" },
    { text: "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.", author: "Garrison Keillor" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "I have always imagined that Paradise will be a kind of library.", author: "Jorge Luis Borges" },
    { text: "Women and cats will do as they please, and men and dogs should relax and get used to the idea.", author: "Robert A. Heinlein" },
    { text: "We don't see things as they are, we see them as we are.", author: "Anaïs Nin" },
    { text: "Sometimes the questions are complicated and the answers are simple.", author: "Dr. Seuss" },
    { text: "You can never get a cup of tea large enough or a book long enough to suit me.", author: "C.S. Lewis" },
    { text: "Never trust anyone who has not brought a book with them.", author: "Lemony Snicket" },
    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { text: "We read to know we're not alone.", author: "William Nicholson" }
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

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to display a random quote
function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById('quote-text').textContent = randomQuote.text;
    document.getElementById('quote-author').textContent = `― ${randomQuote.author}`;
    document.getElementById('random-quote-btn').style.display = 'none';
    document.getElementById('new-random-btn').style.display = 'block';
    document.getElementById('return-to-daily-btn').style.display = 'block';
    document.getElementById('quote-title').textContent = 'Random Quote';
}

// Function to get another random quote
function getNewRandomQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById('quote-text').textContent = randomQuote.text;
    document.getElementById('quote-author').textContent = `― ${randomQuote.author}`;
}

// Function to return to the daily quote
function returnToDailyQuote() {
    displayQuote();
    document.getElementById('random-quote-btn').style.display = 'block';
    document.getElementById('new-random-btn').style.display = 'none';
    document.getElementById('return-to-daily-btn').style.display = 'none';
    document.getElementById('quote-title').textContent = 'Quote of the Day';
}

// Function to copy quote to clipboard
function copyQuoteToClipboard() {
    const quoteText = document.getElementById('quote-text').textContent;
    const quoteAuthor = document.getElementById('quote-author').textContent;
    const textToCopy = `${quoteText}\n${quoteAuthor}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Show feedback
        const copyButton = document.getElementById('copy-quote-btn');
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        copyButton.style.backgroundColor = '#4CAF50';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            copyButton.textContent = originalText;
            copyButton.style.backgroundColor = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy quote to clipboard');
    });
}

// Add event listeners for the buttons
document.getElementById('random-quote-btn').addEventListener('click', displayRandomQuote);
document.getElementById('new-random-btn').addEventListener('click', getNewRandomQuote);
document.getElementById('return-to-daily-btn').addEventListener('click', returnToDailyQuote);
document.getElementById('copy-quote-btn').addEventListener('click', copyQuoteToClipboard);

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