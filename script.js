let greeting = ['Hello wonderful being!', 'Hello Jell-o!', 'Peek-a-boo!', 'Ahoy, matey!', 'Hello sunshine!', 'Happy to see you!'];
let quote = ['Spread love everywhere you go.', 'Believe you can and you\'re halfway there.', 'All things are possible if you believe.', 'If you want the rainbow, you gotta put up with the rain.', 'Don\'t wish for it, work for it.', 'There is nothing impossible to they who will try.'];
let wish = ['Have a spectacular day!', 'Have an amazing day!', 'Have a blessed day!', 'Have a wonderful day!', 'Have a blissful day!'];

let randGreeting = Math.floor(Math.random() * greeting.length);
let randQuote = Math.floor(Math.random() * quote.length);
let randWish = Math.floor(Math.random() * wish.length);

const randMessage  = () => {
let greetingMessage = greeting[randGreeting];
let quoteMessage = quote[randQuote];
let wishMessage = wish[randWish];

console.log(greetingMessage + ' ;)');
console.log(quoteMessage);
console.log(wishMessage +' <3');
}

randMessage();