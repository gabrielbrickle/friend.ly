(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function randomUser (user) {
    let friend = document.getElementById('addedfriends');
    let child = document.createElement('div');
    child.innerHTML = `
    <div class="col-sm-4 friendlist">
        <img src="${user.picture.medium}" class="img-thumbnail" width="75" height="236">
        <div class="friendinfo">
            <a href=<h3>${user.name.first}</h3></a>
            <h5>friends since June</h5>
        </div>
    </div>
    `;

    friend.appendChild(child);
}
let friendsArray= [];
let actualFriends= [];
var randomHobby = require('./randomHobby.js');

module.exports = {


getAFriend: function () {
    var request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        var friendObject = JSON.parse(this.responseText);
        friendObject = friendObject.results[0];
        console.log("yay friend");
        if (friendsArray.length < 5){
        let child = document.createElement('div');
        child.innerHTML = `
          <img src='${friendObject.picture.medium}' />
          <p>Hi I'm ${friendObject.name.first}.</p>
          <button type="button" name="Add">ADD</button>
      `;

        let parent = document.getElementById('friendfeed');

        //add button under friend feed
          let add = child.querySelector('button');
          add.addEventListener('click', function() {
              console.log(`clicked ${friendObject.name.first}`);
          ////this appends the user to the left side and hides them on the right side
          randomUser(friendObject);
          child.remove();
          friendsArray = friendsArray.filter(function(element){
            if (friendObject.name.first === element.name.first){
              return false;
            } else {
              return true;
            }
          })
        actualFriends.push(friendObject);
        friendObject.hobbies= [randomHobby.randomHob(), randomHobby.randomHob(), randomHobby.randomHob()];
        console.log(friendObject.hobbies);
          });

            parent.appendChild(child);
            friendsArray.push(friendObject);///supposed to push 5 into friendsArray then stop
            console.log(friendsArray);
          } else {
            console.log("we can't be friends");
          }

    });
    request.open('GET', 'https://randomuser.me/api/');
    request.send();
  }
}

},{"./randomHobby.js":2}],2:[function(require,module,exports){
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