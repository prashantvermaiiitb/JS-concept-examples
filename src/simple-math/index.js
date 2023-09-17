function generateTable() {
    const count = document.getElementById('count').value;
    const container = document.getElementById('table-container');

    for (let i = 2; i <= count; i++) {
        let div = document.createElement('div');
        div.classList.add('table');
        for (let j = 1; j < 11; j++) {
            const span = document.createElement('span');
            span.textContent = `${i} ☓ ${j} = ${i * j}`;
            div.appendChild(span);
        }
        container.appendChild(div);
    }
}

const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', function () {
    const container = document.getElementById('table-container');
    container.textContent = ''
    generateTable();
})