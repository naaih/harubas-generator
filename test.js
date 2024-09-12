// test.js
const { getRandomProverb } = require('./index');

// Get a random proverb and print it
const proverb = getRandomProverb();
console.log(`Proverb: ${proverb.proverb}`);
console.log(`Meaning: ${proverb.meaning}`);
