var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];

var _getRandomJoke = () => {
    var i = Math.floor(Math.random() * jokes.length);
    return jokes[i];
}
var _addJoke = (joke) => {
    jokes.push(joke);
}
module.exports = {
    allJokes: jokes,
    getRandomJoke: _getRandomJoke,
    addJoke: _addJoke
}