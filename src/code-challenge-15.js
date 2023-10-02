/**
 * Coding Challenge
 */
const poll = {
    question: 'What is your programming language ?',
    options: ['0: Javascript', '1 : Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));
        console.log(answer);
        typeof answer === 'number' && answer < this.options.length && this.answers[answer]++;
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Polls results are ${this.answers.join(', ')}`);
        }
    }
};

const pollBtn = document.createElement('button');
pollBtn.classList.add('poll');
pollBtn.textContent = 'Select Your Programming language !! '
pollBtn.style.padding = '16px';
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));
document.body.append(pollBtn);

// create a button listener
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 4] })
poll.displayResults.call({ answers: [5, 2, 4] }, 'array')