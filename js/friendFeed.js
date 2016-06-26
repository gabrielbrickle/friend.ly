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
