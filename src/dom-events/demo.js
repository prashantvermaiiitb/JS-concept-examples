/**
 * Generating Random colors within a range
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
const randomColors = (min = 0, max = 255) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * Paint all the divs with random colors
 */
function paintAllDivs() {
    const allDivs = document.querySelector('#container').querySelectorAll('div');
    allDivs.forEach(div => {
        div.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
    })
}

function attachDomEvents() {
    /**
     * Triggered when HTML is parsed completely not dependent upon the 
     * JS loading unless placed in between as the Blocked script.
     */
    document.addEventListener('DOMContentLoaded', function (e) {
        console.log("🚀 ~ file: demo.js:23 ~ e, DOMContentLoaded:", e);
    });
    /**
     * Will be called when the page is loaded entirely with all images 
     * and external CSS are loaded on the page 
     */
    window.addEventListener('load', function (e) {
        console.log("🚀 ~ file: demo.js:26 ~ e, Page fully loaded:", e);
    });
    /**
     * unbeforeunload will be called immediately before the person is 
     * going to leave the page that's applicable to refresh of the webpage as well, but refresh
     * only once post that in the same tab it was not appearing to work :()
     */
    window.addEventListener('beforeunload', function (e) {
        console.log("🚀 ~ file: demo.js:26 ~ e, Page is going to be unloaded:", e);
        /**
         * without below you will not be seeing the dialog for asking 
         * permission of the user.
         */
        e.preventDefault();
        console.log("🚀 ~ file: demo.js:26 ~ e, onbeforeunloaded:", e);
        e.returnValue = 'This message will not be used !';
    });
}

function init() {
    paintAllDivs();
    attachDomEvents();
}

init();