// eslint-disable-next-line import/extensions
import outerUsers from './users.js';

// Task 01

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log('-------------------------Task 1-----------------------');
console.table(getUserNames(outerUsers));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// Task 02

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log('-------------------------Task 2-----------------------');
console.table(getUsersWithEyeColor(outerUsers, 'blue'), ['name']); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Task 03

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log('-------------------------Task 3-----------------------');
console.table(getUsersWithGender(outerUsers, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Task 04

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log('-------------------------Task 4-----------------------');
console.table(getInactiveUsers(outerUsers), ['name']); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Task 05

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log('-------------------------Task 5-----------------------');
console.log(getUserWithEmail(outerUsers, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(outerUsers, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// Task 06

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log('-------------------------Task 6-----------------------');
console.table(getUsersWithAge(outerUsers, 20, 30), ['name']); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.table(getUsersWithAge(outerUsers, 30, 40), ['name']); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// Task 07

const calculateTotalBalance = users => {
  return users.reduce((acc, currUser) => acc + currUser.balance, 0);
};

console.log('-------------------------Task 7-----------------------');
console.log('Total balance:', calculateTotalBalance(outerUsers)); // 20916

// Task 08

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.some(friend => friend === friendName))
    .map(user => user.name);
};

console.log('-------------------------Task 8-----------------------');
console.table(getUsersWithFriend(outerUsers, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.table(getUsersWithFriend(outerUsers, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Task 09

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((userOne, userTwo) => userOne.friends.length - userTwo.friends.length)
    .map(user => user.name);
};

console.log('-------------------------Task 9-----------------------');
console.table(getNamesSortedByFriendsCount(outerUsers));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Task 10

const getSortedUniqueSkills = users => {
  return users
    .reduce((skills, currUser) => {
      skills.push(...currUser.skills);
      return skills;
    }, [])
    .reduce((uniqueSkills, currItem) => {
      if (
        uniqueSkills.length === 0 ||
        !uniqueSkills.some(skill => skill === currItem)
      ) {
        uniqueSkills.push(currItem);
      }
      return uniqueSkills;
    }, [])
    .sort();
};

console.log('-------------------------Task 10-----------------------');
console.log(getSortedUniqueSkills(outerUsers));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
