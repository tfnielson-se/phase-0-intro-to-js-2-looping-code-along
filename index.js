// Code your solutions in this file
const names = [`Guadalupe`, `Ollie`, `Aki`];
const events = `surprise`;

function writeCards(names, events) {
    const newNames = []
    for (let i = 0; i < names.length; i++){
    newNames.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    return newNames
}
writeCards(names, events);

///////////////////////////////////////////////////////////

const counter = 10

function countDown (counter) {
    while (counter > 0) {
        console.log(counter)
        counter -= 1;
    }
    console.log(counter);
}