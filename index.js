// Code your solutions in this file
const surprise = ["Guadalupe", "Ollie", "Aki"]

const copyOfSurprise = []

function writeCards(surprise) {
    for (let i = 0; i < surprise.length; i++) {
        copyOfSurprise.push(`Thank you, ${surprise[i]}, for the wonderful surprise gift!`);
        debugger; 
    }

    return copyOfSurprise;
}

writeCards(copyOfSurprise);

function countDown(startingNumber) {
    let count = startingNumber;
    while (count >= 0) {
        console.log(count--);
    } 

}

countDown(10);