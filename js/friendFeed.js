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
