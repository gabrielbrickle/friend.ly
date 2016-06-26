(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var hobby = ['running', 'fishing', 'swimming', 'boating', 'exercising', 'shopping', 'eating'];

module.exports = {

randomHob: function() {
    var randomNum = Math.random(); //number between 0 and 1
    var lengthOfHobbyList = hobby.length; //need to know how many students there are in the array
    var lastIndexOfHobbies = lengthOfHobbyList - 1; //determines last index of the array
    var guessHobby = Math.floor(randomNum * lengthOfHobbyList); //math floor rounds the number down. number between 0 and 9
    return hobby[guessHobby];
},


}

},{}]},{},[1])