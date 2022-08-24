/* 
Q: Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the
      name of your friends
    b) Check if the length of each element is even, push elements
      with even length to a new array and return the result
Print the result.
*/
const newFriends = (friends) => {
    const addedFriends = [];
    for (const friend of friends) {
        if (friend.length % 2 == 0) {
            addedFriends.push(friend);
        }
    }
    return addedFriends;
}

const friends = ['Saqib', 'Mariam', 'Soleh', 'Saad', 'Mahir', 'Abid', 'Ramim']
console.log(newFriends(friends));