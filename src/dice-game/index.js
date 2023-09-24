let dice = new Dice();

let playerOne = new Player({ firstName: 'prashant', lastName: 'verma', playerCount: 1 }, dice);
let playerTwo = new Player({ firstName: 'aditi', lastName: 'verma', playerCount: 2 }, dice);
const activePlayer = Math.trunc(Math.random() * 2) + 1;
// console.log("🚀 ~ file: index.js:6 ~ activePlayer:", activePlayer);
playerOne.init(activePlayer === 1);
playerTwo.init(activePlayer === 2);

document.getElementById('reset_game').addEventListener('click', () => {
    window.location.reload();
})
// ['hold', 'one'].forEach(event => {
//     document.addEventListener(event, (e) => {
//         const inActivePlayer = e.detail.text();
//         console.log(`inActivePlayer.playerCount`, inActivePlayer.playerCount);
//         if (inActivePlayer.playerCount === 2) {
//             playerOne.start();
//         } else {
//             playerTwo.start();
//         }
//     });

// });

const playAudioMessage = function (msg) {
    // Create a new SpeechSynthesisUtterance object
    let utterance = new SpeechSynthesisUtterance(msg);

    // Set the text and voice of the utterance
    // utterance.text = text;
    // utterance.voice = window.speechSynthesis.getVoices()[0];
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    // Speak the utterance
    window.speechSynthesis.speak(utterance);
}

document.addEventListener('hold', (e) => {

    const inActivePlayer = e.detail.text();
    console.log(`inActivePlayer.playerCount`, inActivePlayer.playerCount);
    playAudioMessage(`${inActivePlayer.playerCount === 1 ? playerOne.firstName : playerTwo.firstName} holds the score and paused rolling the dice.`);
    if (inActivePlayer.playerCount === 2) {
        playerOne.start();
    } else {
        playerTwo.start();
    }
});

document.addEventListener('one', (e) => {
    const inActivePlayer = e.detail.text();
    console.log(`inActivePlayer.playerCount`, inActivePlayer.playerCount);
    playAudioMessage(`${inActivePlayer.playerCount === 1 ? playerOne.firstName : playerTwo.firstName}, Yikes ! you got one, better luck next time.`);
    if (inActivePlayer.playerCount === 2) {
        playerOne.start();
    } else {
        playerTwo.start();
    }
});

document.addEventListener('won', event => {
    const winner = event.detail.text();
    playAudioMessage(`${winner.playerCount === 1 ? playerOne.getfullName() : playerTwo.getfullName()}, Yee You won the game.. get Yourself a trophy. `);
    return;
})