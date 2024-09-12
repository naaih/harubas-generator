// index.js
const proverbs = require('./data.json');

/**
 * function to get a random proverb and its meaning
 * @returns {Object} Random proverb with its meaning
 */
function getRandomProverb() {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    return proverbs[randomIndex];
}

module.exports = {
    getRandomProverb
};
