(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var friendFeed = require('./friendFeed.js')

window.addEventListener('load', function() {
        console.log('loaded page successfully');
        setInterval(friendFeed.getAFriend, 2000);
});





// ////add button under friend feed
// let add = document.querySelector('button');
//         add.addEventListener('click', function () {
//             console.log('add button clicked');
//           });
//
// ////hobbies button on nav bar
// let hobbies = document.querySelector('.hobbiesbutton');
// hobbies.addEventListener('click', function() {
//     console.log('hobbies button');
// });
//
// ////details button on nav bar
// let details = document.querySelector('.detailsbutton');
// details.addEventListener('click', function() {
//     console.log('details button');
// });

//
// ////this function appends to the added friends div
// function randomUser (user) {
//     let friend = document.getElementById('addedfriends');
//     let child = document.createElement('div');
//     child.innerHTML = `
//     <div class="col-sm-4 friendlist">
//         <img src="${user.picture.medium}" class="img-thumbnail" width="75" height="236">
//         <div class="friendinfo">
//             <h3>${user.name.first}</h3>
//             <h5>friends since June</h5>
//         </div>
//     </div>
//     `;
//
//     friend.appendChild(child);
// };
//
// var hobby = ['running', 'fishing', 'swimming', 'boating', 'exercising', 'shopping', 'eating', 'wine', 'golfing', 'sailing', 'basketball', 'watching tv', 'football', 'baseball', 'reading', 'coding', 'computers', 'horseback riding', 'time with friends'];
//
// function randomHob (anyListOfHobbies) {
//     var randomNum = Math.random(); //number between 0 and 1
//     var lengthOfHobbyList = anyListOfHobbies.length; //need to know how many students there are in the array
//     var lastIndexOfHobbies = lengthOfHobbyList - 1; //determines last index of the array
//     var guessHobby = Math.floor(randomNum * lengthOfHobbyList); //math floor rounds the number down. number between 0 and 9
//     return anyListOfHobbies[guessHobby];
// }
//
// randomHob(hobby);
//
// //hobbies button on nav bar
// var hobbies = document.getElementById("hobbiesbutton");
// // console.log(hobbies);
// hobbies.addEventListener('click', function() {
//     console.log('hobbies button');
// });
//
// // module.exports = {
//
// getAFriend: function () {
//     var request = new XMLHttpRequest();
//     request.addEventListener('load', function() {
//         var friendObject = JSON.parse(this.responseText);
//         friendObject = friendObject.results[0];
//         console.log(friendObject);
//
//         var sayHi = 'Hi';
//         if (friendObject.gender === 'female') {
//             sayHi = 'Hi mam';
//         }
//         let child = document.createElement('div');
//         child.innerHTML = `
//           <img src='${friendObject.picture.medium}' />
//           <p>Hi I'm ${friendObject.name.first}.</p>
//           <button type="button" name="Add">ADD</button>
//       `;
//       child.classList.add('row')
//       //add button under friend feed
//
//         let add = child.querySelector('button');
//         add.addEventListener('click', function() {
//             console.log(`clicked ${friendObject.name.first}`);
//             randomUser(friendObject);
//         });
//         let parent = document.getElementById('friendfeed');
//             parent.appendChild(child);
//     });
//     request.open('GET', 'https://randomuser.me/api/');
//     request.send();
// }
// window.addEventListener('load', function() {
//         console.log('loaded page successfully');
//         setInterval(friendFeed.getAFriend, 2000);
// });

},{"./friendFeed.js":2}],2:[function(require,module,exports){
function randomUser (user) {
    let friend = document.getElementById('addedfriends');
    let child = document.createElement('div');
    child.innerHTML = `
    <div class="col-sm-4 friendlist">
        <img src="${user.picture.medium}" class="img-thumbnail" width="75" height="236">
        <div class="friendinfo">
            <h3>${user.name.first}</h3>
            <h5>friends since June</h5>
        </div>
    </div>
    `;

    friend.appendChild(child);
}

module.exports = {
// randomUser: function (user) {
//     let friend = document.getElementById('friendfeed');
//     let child = document.createElement('div');
//     child.innerHTML = `
//     <div class="col-sm-4 friendlist">
//         <img src="${user.picture.medium}" class="img-thumbnail" width="75" height="236">
//         <div class="friendinfo">
//             <h3>${user.name.first}</h3>
//             <h5>friends since June</h5>
//         </div>
//     </div>
//     `;
//     friend.appendChild(child);
// },

getAFriend: function () {
    var request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        var friendObject = JSON.parse(this.responseText);
        friendObject = friendObject.results[0];
        console.log(friendObject);

        var sayHi = 'Hi';
        if (friendObject.gender === 'female') {
            sayHi = 'Hi mam';
        }
        let child = document.createElement('div');
        child.innerHTML = `
          <img src='${friendObject.picture.medium}' />
          <p>Hi I'm ${friendObject.name.first}.</p>
          <button type="button" name="Add">ADD</button>
      `;
      child.classList.add('row')
      //add button under friend feed

        let add = child.querySelector('button');
        add.addEventListener('click', function() {
            console.log(`clicked ${friendObject.name.first}`);
            randomUser(friendObject);
        });
        let parent = document.getElementById('friendfeed');
            parent.appendChild(child);
    });
    request.open('GET', 'https://randomuser.me/api/');
    request.send();
}
}

},{}]},{},[1])