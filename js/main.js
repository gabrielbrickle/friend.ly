
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
