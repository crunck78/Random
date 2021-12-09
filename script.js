/**
 * Purpose. An example how to generate a number between inclusive a given range, minimal and maximal,
 *  without repeating the last random generated number.
 * 
 * Requirements. - none
 * Constrains. 
 *  - min is unsigned integer from 0 to MAX_SAFE_INTEGER inclusive
 *  - max is unsigned integer from 0 to MAX_SAFE_INTEGER inclusive
 * Inputs. - A min and a max values for @function getRandomIntInclusive parameters
 * Outputs. - A random number between inclusive a given range, minimal and maximal,
 *            without repeating the last random generated number.
 */

/**
 * @global @var {number} - stores the last generated number.
 */
let lastGenerated = null;

/**
 * Recursive solve generated number. Generates a new random number without repeating the last random generated number.
 * If @var newRandom equals @global @var lastGenerated, recall self.
 * Else @global @var lastGenerated stores the @var newRandom value and prints its value out.
 */
function handleGenerate() {
    try {
        let newRandom = getRandomIntInclusive(1, 3);
        if (lastGenerated == newRandom) handleGenerate();
        else {
            lastGenerated = newRandom;
            document.getElementById("generated").innerHTML += newRandom;
        }
    } catch (error) {
        document.getElementById("generated").innerHTML = error;
        document.getElementById("generated").style.color = "red";
    }
}

/**
 * Generates a unsigned integer between inclusive @param min and @param max
 * @param {number} min - a unsigned integer from 0 to @global @var MAX_SAFE_INTEGER
 * @param {number} max - a unsigned integer from 0 to @global @var MAX_SAFE_INTEGER
 * @returns {number} a random number between inclusive @param min and @param max
 */
function getRandomIntInclusive(min, max) {
    if (isNaN(min)) throw new Error('min is not a number!');
    if (isNaN(max)) throw new Error('max is not a number!');
    if (min < 0 || min > Number.MAX_SAFE_INTEGER) throw new Error('min is out of range! 0 - Number.MAX_SAFE_VALUE inclusive');
    if (max < 0 || min > Number.MAX_SAFE_INTEGER) throw new Error('max is out of range! 0 - Number.MAX_SAFE_VALUE inclusive');
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}