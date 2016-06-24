// function newFriend(person) {
//     var friends = document.getElementsByClassName("col-sm-4 friendlist");
//     var child = document.createElement('div');
//     child.innerHTML = `
//         <div class="friend">
//             <img src="${person.picture.medium}" class="img-thumbnail" width="75" height="236">
//             <div class="info">
//                 <h3>${person.name.first}</h3>
//                 <h5>friends since June 2016</h5>
//             </div>
//         </div>
//     `;
//     friends.appendChild(child);
// }
// function getNewFriend() {
//     var request = new XMLHttpRequest();
//     request.addEventListener('load', function () {
//         var friend = JSON.parse(this.responseText);
//         friend = friend.results[0];
//
//         // Some conditional logic based on the object we got back.
//         var sayHi = 'Hi';
//
//         if (friend.gender === 'female') {
//             sayHi = 'Hi mam';
//         }
// 
//         });
//     });
//     request.open('GET', 'https://randomuser.me/api/');
//     request.send();
// }

$('button').on('click', function(){
  console.log('click!');
})
