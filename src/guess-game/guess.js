const SCORE = {
    MAX: 20,
    HIGH: 0,
    DEFAULT: 20,
    selector: '.score',
    selector_high: '.high-score'
};
const RANGE = {
    MINIMUM: 0,
    MAXIMUM: 20,
    selector: '.range-text'
};// range
const GAME_STATE = {
    start: 'start',
    wip: 'wip',
    end: 'end'
}
const GUEST_CTRL = {
    userInput: '#userGuess',
    checkBtn: '#checkGuess',
    selector_result: '.result-text',
    selector_guessnumber: '.guess-number'
}

const GAME_STATE_STRING = {
    win: '!! 🎉 You won 🏆!!',
    wip: '🤔 Guessing ... 🏃‍♂️🏃‍♂️🏃‍♂️',
    high: `You Guessed too High 📉 !!`,
    low: `You Guessed too Low 📈!!`,
    loss: `You lost the game 😩😰!!`
}
/**
 * Guessing game main function object
 */
window.guessGame = function () {

    /**
     * getting element from DOM
     * @param {*} selector 
     * @returns 
     */
    this.getElement = function (selector) {
        return document.querySelector(selector);
    }
    /**
     * this update Range text
     * @param {*} max 
     * @param {*} min 
     */
    this.updateRangeText = function (min, max) {
        const rangeSelector = this.getElement(RANGE.selector);
        if (rangeSelector) {
            rangeSelector.textContent = `<between ${min} and ${max} (including limits)>`
            return;
        }
        throw new Error(`Range Text container is not present on the page`);
    }
    /**
     * Updating score 
     * @param {*} score 
     * @returns 
     */
    this.updateScore = function (score) {
        const scoreContainer = this.getElement(SCORE.selector);
        if (scoreContainer) {
            this.getElement(SCORE.selector).textContent = score;
            this.score = score;
            return;
        }
        throw new Error(`Score container is not present on the page`);
    };
    /**
     * Updating high score 
     * @param {*} high score
     * @returns 
     */
    this.updateHighScore = function (highScore) {
        const highScoreContainer = this.getElement(SCORE.selector);
        if (highScoreContainer) {
            this.getElement(SCORE.selector_high).textContent = highScore;
            return;
        }
        throw new Error(`High Score container is not present on the page`);
    };
    /**
     * Handle incorrect input from user
     * @returns 
     */
    this.handleInvalidInput = function () {
        alert(`Please guess inside Range which is in between >= ${RANGE.MINIMUM} and <= ${RANGE.MAXIMUM}`);
        this.getElement(GUEST_CTRL.userInput).value = ''
        this.getElement(GUEST_CTRL.userInput).focus();
        return false;
    }
    /**
     * Handling no input from user.
     * @returns 
     */
    this.handleNoInput = function () {
        alert('Please write a number then check !! ');
        return false;
    }
    /**
     * This handle click
     * @param {*} event 
     */
    this.handleCheckClick = function (event) {
        let userGuess = this.getElement(GUEST_CTRL.userInput).value;
        console.log("🚀 ~ file: guess.js:80 ~ userGuess:", userGuess);

        // Handle no Input 
        if (userGuess === "" || isNaN(userGuess)) {
            return this.handleNoInput();
        }

        // convert into number first
        userGuess = Number(userGuess);
        if (userGuess > RANGE.MAXIMUM || userGuess < RANGE.MINIMUM) {
            return this.handleInvalidInput(userGuess);
        }


        //handling number within range
        if (userGuess === this.guessedNumber) {
            this.handleWinOrLoss(true);
        } else if (userGuess > this.guessedNumber) {
            this.getElement(GUEST_CTRL.selector_result).textContent = GAME_STATE_STRING.high;
            this.score--;
        } else {
            this.getElement(GUEST_CTRL.selector_result).textContent = GAME_STATE_STRING.low;
            this.score--;
        }
        if (this.score === 0) {
            this.handleWinOrLoss(false);
            return;
        }
        this.updateScore(this.score);
    }
    /**
     * Attaching events
     */
    this.attachEvents = function () {
        this.getElement(GUEST_CTRL.checkBtn).addEventListener('click', (event) => {
            this.handleCheckClick(event)
        });
        this.getElement('#resetGame').addEventListener('click', (event) => {
            this.resetGame();
        })
    };
    /**
     * Initialise guessed number
     */
    this.initGuessedNumber = () => {
        this.guessedNumber = Math.trunc(Math.random() * 20);
    }
    /**
     * Intial Guess string to start the game
     */
    this.initGuessNumberString = () => {
        this.getElement(GUEST_CTRL.selector_guessnumber).textContent = '??';
    }
    /**
     * Initialising the guess game
     */
    this.initGame = function () {
        this.score = SCORE.DEFAULT;
        this.highScore = SCORE.HIGH;
        this.initGuessedNumber();
        this.initGuessNumberString();
        this.updateRangeText(RANGE.MINIMUM, RANGE.MAXIMUM);
        this.updateScore(this.score);
        this.updateHighScore(this.highScore);
        this.attachEvents();
    }
    /**
     * Resetting the game to initial state
     */
    this.resetGame = function () {
        document.body.style.backgroundColor = '#cacaca'
        this.updateScore(SCORE.DEFAULT);
        this.getElement(GUEST_CTRL.selector_result).textContent = GAME_STATE_STRING.wip;
        const input = this.getElement(GUEST_CTRL.userInput);
        input.removeAttribute('disabled');
        input.value = '';
        input.focus();
        this.initGuessedNumber();
        this.initGuessNumberString();
        // this will be there when score is 1 and user has not guessed it properly.
        this.getElement(GUEST_CTRL.checkBtn).removeAttribute('disabled');
    }
    /**
     * calculating score from user input 
     */
    this.calculateScore = function () {

    }
    /**
     * handling user win or user loss in the game 
     */
    this.handleWinOrLoss = function (win) {
        document.body.style.backgroundColor = win ? '#60b347' : '#d66262';
        this.getElement(GUEST_CTRL.userInput).disabled = 1;
        this.getElement(GUEST_CTRL.selector_result).textContent = GAME_STATE_STRING.win;
        this.getElement(GUEST_CTRL.selector_guessnumber).textContent = this.guessedNumber;
        const currentHighScore = this.getElement(SCORE.selector_high).textContent;
        // take high score only when current one is less than the new one
        if (currentHighScore < this.score) {
            this.getElement(SCORE.selector_high).textContent = this.score;
        }
        // if you loose  disable check button 
        if (!win) {
            this.getElement(GUEST_CTRL.checkBtn).disabled = 1;
        }
    }
    return this;

}

guessGame().initGame();