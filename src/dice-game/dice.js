/**
 * Dice object 
 */
function Dice() {
    // dice place holder
    this.element = document.getElementById('dice');
    this.defaultText = '??';
    /**
     * Rolling the Dice and returning the count for usage
     */
    this.roll = function () {
        const count = Math.trunc(Math.random() * 6) + 1;
        this.element.textContent = count;
        return count;
    }
    /**
     * resetting the dice to default text which is ?? 
     */
    this.reset = function () { this.element.textContent = this.defaultText; }
}