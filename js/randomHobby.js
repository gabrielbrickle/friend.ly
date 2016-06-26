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
