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
      //add button under friend feed
        let add = child.querySelector('button');
        add.addEventListener('click', function() {
            console.log(`clicked ${friendObject.name.first}`);
        ////this appends the user to the left side and hides them on the right side
        randomUser(friendObject);
        child.style.visibility = "hidden";

        });
        /////appending friendfeed to the dom

        let parent = document.getElementById('friendfeed');
            parent.appendChild(child);

    });
    request.open('GET', 'https://randomuser.me/api/');
    request.send();
  }
}

},{}]},{},[1])