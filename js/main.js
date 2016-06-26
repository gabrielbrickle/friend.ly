
var friendFeed = require('./friendFeed.js')
var randomHobby = require('./randomHobby.js')

window.addEventListener('load', function() {
        console.log('loaded page successfully');
        setInterval(friendFeed.getAFriend, 2000);

        ////hobbies button on nav bar
      let hobby = document.getElementsByClassName("hobbiesbutton");
      hobby[0].addEventListener('click', function() {
        console.log('clicked!');
        console.log(randomHobby.randomHob());
        document.getElementById('friendfeed').style.visibility="hidden";
        document.getElementById('hobbyfeed').className.replace('hobbyfeed');
      });

});








// ////add button under friend feed
// let add = document.querySelector('button');
//         add.addEventListener('click', function () {
//             console.log('add button clicked');
//           });
//
//
// ////details button on nav bar
// let details = document.querySelector('.detailsbutton');
// details.addEventListener('click', function() {
//     console.log('details button');
// });
