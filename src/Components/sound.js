const beep = document.createElement('audio');
beep.src = require('../sounds/beep.mp3');

const selected = document.createElement('audio');
selected.src = require('../sounds/select.mp3');

export default {
    playBeep: () => {
        beep.load();
        beep.play();
    },
    playSelect: () => {
        selected.load();
        selected.play();
    }
};