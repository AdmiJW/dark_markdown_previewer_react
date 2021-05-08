const beep = document.createElement('audio');
beep.src = 'sounds/beep.mp3';

const selected = document.createElement('audio');
selected.src = 'sounds/select.mp3';

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