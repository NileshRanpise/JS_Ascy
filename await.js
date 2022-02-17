// Promises

// console.log('person1:show ticket');
// console.log('person2:show ticket');

// const promiseWifeTkt = new Promise((resolve,reject) => { 
//     setTimeout(() => {
//         resolve('resolve');
//     },3000)
// });

// const getPocorn = promiseWifeTkt.then((t) => {
//     console.log('hsb:we shold go in');
//     console.log('wife:i am hungry');

//     return new Promise((resolve,reject) => resolve('popcorn'));
// });

// const getButter = getPocorn.then((t) => {
//     console.log('hsb:we shold go in');
//     console.log('wife:i want butter on my popcorn');

//     return new Promise((resolve,reject) => resolve('butter'));
// });


// promiseWifeTkt.then((t) => {
//     console.log('person3:show ticket');
// })

// console.log('person4:show ticket');
// console.log('person5:show ticket');

// Async Await

console.log('person1:show ticket');
console.log('person2:show ticket');


const preMovie = async () => {

const promiseWifeTkt = new Promise((resolve,reject) => { 
    setTimeout(() => {
        resolve('resolve');
    },3000)
});
};

//await

const getPocorn = new Promise((resolve,reject) => resolve('Popcorn'));
const addButter = new Promise((resolve,reject) => resolve('Butter'));

let ticket = await promiseWifeTkt;

console.log('hsb:we shold go in');
console.log('wife:i am hungry');

let popcorn = await getPocorn;

console.log('hsb:we shold go in');
console.log('wife:i want butter on my popcorn');

let butter = await addButter;
console.log('hsb:we shold go in');
console.log('wife:i want butter on my popcorn');