/**
 *  Returns random number from $start to $end
 * @param start
 * @param end
 * @returns int
 */

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *  Rolls the dice
 * @returns {Number}
 */
function roll_dice() {
    return getRandomInt(1, 6);
}

function winner(previous, current) {
    alert('YOU WIN ! The previous number as ' + previous + ' and ' + current + ' was rolled!');
}

function loser(previous, current) {
    alert('YOU LOSE! The previous number as ' + previous + ' and ' + current + ' was rolled!')
}

function draw (previous, current) {
    alert("IT'S A DRAW! The previous number as " + previous + " and " + current + " was rolled!");
}