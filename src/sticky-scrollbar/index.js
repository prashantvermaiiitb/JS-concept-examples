const sections = document.querySelectorAll('section');
const randomColors = (min = 0, max = 255) => Math.floor(Math.random() * (max - min + 1) + min)
const separators = document.querySelectorAll('div.separator-div');
const giveSectionBackground = () => {
    sections.forEach(section => {
        console.log("🚀 ~ file: index.js:7 ~ giveSectionBackground ~ section:", section, `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`)
        section.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
    });
}
function attacHeaderForEachSection() {
    separators.forEach((separator, i) => {
        const headingInnerHtml = `SECTION-${i + 1}`.padStart(20, '-').padEnd(36, '-');//('-').repeat(20);
        separator.innerHTML = headingInnerHtml;
        separator.style.textAlign = 'center';
        separator.style.padding = '10px';
        separator.style.fontSize = '25px';
        separator.style.backgroundColor = '#cacaca';//`rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
    });
}
function init() {
    giveSectionBackground();
    attacHeaderForEachSection();
}
init();