function Player({ firstName, lastName, playerCount }, dice) {

    this.playerCount = playerCount;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dice = dice;

    this.doSetUp = function (isActivePlayer) {
        this._currentScore = 0;
        this._totalScore = 0;
        this.nameSel = document.getElementById(`player${playerCount}_name`);
        this.playerDiceSel = document.getElementById(`player-${playerCount}-dice`);
        this.holdScoreSel = document.getElementById(`player-${playerCount}-hold-btn`);
        this.overlaySel = document.querySelector(`#player${playerCount} .overlay`);
        this.overlayContentSel = document.querySelector(`#player${playerCount}_overlay_content`);
        this.currentScoreSel = document.getElementById(`player${playerCount}_currentscore`);
        this.totalScoreSel = document.getElementById(`player${playerCount}_totalscore`);
        this.setFullName();
        this.setActivePlayer(isActivePlayer);
    }

    this.getfullName = function () {
        return (`${this.firstName}.${this.lastName} `);
    }
    this.setFullName = function () {
        this.nameSel.textContent = this.getfullName();
    }

    this.getCurrentScore = function () { return Number(this.currentScoreSel.textContent); }
    this.setCurrentScore = function (currentScore) {
        this._currentScore = currentScore;
        this.currentScoreSel.textContent = this._currentScore;
    }
    this.updateCurrentScore = function (currentScore) {
        //automatic conversion from string to number is happening here
        this._currentScore += currentScore;
        this.setCurrentScore(this._currentScore);
    }

    this.getTotalScore = function () { return this._totalScore; }
    this.setTotalScore = function () {
        this.totalScoreSel.textContent = this._totalScore;
    }
    this.updateTotalScore = function (totalScore) {
        this._totalScore += totalScore;
        this.setTotalScore();
    }

    this.setActivePlayer = function (isActivePlayer) {
        this._isActivePlayer = Boolean(isActivePlayer);
        if (!this._isActivePlayer) {
            this.overlaySel.classList.toggle('hide');
        }
    }
    this.start = function () {
        //remove the overlay
        this.overlaySel.classList.toggle('hide');
        // remove the background color if player was on hold already from previous chance
        if (document.getElementById(`player${playerCount}`).classList.contains('done-rolling')) {
            document.getElementById(`player${playerCount}`).classList.toggle('done-rolling');
        }
        // enable the Roll Dice if you have paused on earlier
        this.playerDiceSel.removeAttribute('disabled');
        // enable the hold as well
        this.holdScoreSel.removeAttribute('disabled');
    }
    this.attachEvents = function () {
        let self = this;
        /**
         * because of => function the context is now the player object 
         * not the button that's clicked
         */
        this.playerDiceSel.addEventListener('click', function (e) {
            const diceCount = self.dice.roll();
            // self._isPlaying = true;
            /**
             * background update
             * button should be disabled 
             * overlay on the current player
             * current score to 0
             */
            if (diceCount === 1) {
                self.dice.reset();
                document.getElementById(`player${playerCount}`).classList.add('done-rolling');
                self.playerDiceSel.setAttribute('disabled', true);
                self.holdScoreSel.setAttribute('disabled', true);
                self.setCurrentScore(0);
                self.overlayContentSel.textContent = 'Yikes!!😩😩 U got 1';
                self.overlaySel.classList.toggle('hide');
                // self._isPlaying = false;
                this.dispatchEvent(
                    new CustomEvent("one", {
                        bubbles: true,
                        detail: {
                            text: () => self
                        },
                    }),
                );
                return;
            }
            self.updateCurrentScore(diceCount);
            // to avert condition where in from start player can hold on score without even having 1
            self.holdScoreSel.removeAttribute('disabled');
        });
        this.holdScoreSel.addEventListener('click', function (e) {
            /**
             * take the current score
             * add the current score in total score
             * see if the player is winner 
             * declare the winner 
             * stop the game 
             * else 
             * total score incremented 
             * player which pressed is paused 
             * disable roll dice 
             * diable holdscore
             * indicate the next player to play by pressing the roll dice
             */
            self.updateTotalScore(self.getCurrentScore());
            if (self._totalScore >= 100) {
                // player won the game 
                self.overlayContentSel.textContent = 'You won 🎉✌️🥳🏆'
                self.overlaySel.classList.toggle('hide');
                // trigger won event
                this.dispatchEvent(
                    new CustomEvent("won", {
                        bubbles: true,
                        detail: {
                            text: () => self
                        },
                    }),
                );
                return;
            }
            self.dice.reset();
            document.getElementById(`player${playerCount}`).classList.add('done-rolling');
            self.playerDiceSel.setAttribute('disabled', true);
            self.holdScoreSel.setAttribute('disabled', true);
            self.setCurrentScore(0);
            self.overlayContentSel.textContent = 'You Paused !! ⏸️';
            self.overlaySel.classList.toggle('hide');
            self._isPlaying = false;
            this.dispatchEvent(
                new CustomEvent("hold", {
                    bubbles: true,
                    detail: {
                        text: () => self
                    },
                }),
            );
        });
    }
    this.init = function (isActivePlayer) {
        this.doSetUp(isActivePlayer);
        this.attachEvents();
    }

}
