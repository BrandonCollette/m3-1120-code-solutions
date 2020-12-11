/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const chance = takeAChance('Brandon');

chance.then((value) => {
    console.log(value);
});

chance.catch((error) => {
    console.error(error);
});
