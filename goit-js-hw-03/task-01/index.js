const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.log({ ...user, mod: 'happy', hobby: 'skydiving', premium: false });
