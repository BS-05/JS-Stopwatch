function modalShow() {
    document.getElementById("modal-container").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closeModal() {
    document.getElementById("modal-container").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Change Color Functions
function green() {
    document.body.classList.remove('orange-mode');
    document.body.classList.remove('dark-mode');
    document.body.classList.toggle('green-mode');
}

function orange() {
    document.body.classList.remove('green-mode');
    document.body.classList.remove('dark-mode');
    document.body.classList.toggle('orange-mode');
}

function dark() {
    document.body.classList.remove('green-mode');
    document.body.classList.remove('orange-mode');
    document.body.classList.toggle("dark-mode");
}


// Stopwatch

let milli = 00;
let seconds = 00;

let startButton = document.getElementById('start-btn');
let stopButton = document.getElementById('stop-btn');
let resetButton = document.getElementById('reset-btn');
let elementSeconds = document.getElementById('seconds');
let elementMilli = document.getElementById('milli');
let interval ;

function buttonStart() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

function startTimer() {
    milli++;

    if (milli < 9) {
        elementMilli.innerHTML = "0" + milli;
    }

    if (milli > 9) {
        elementMilli.innerHTML = milli;
    }

    if (milli > 99) {
        seconds++;
        elementSeconds.innerHTML = "0" + seconds;
        milli = 0;
        elementMilli.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        elementSeconds.innerHTML = seconds;
    }
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    seconds = 00;
    milli = 00;
    elementSeconds.innerHTML = seconds;
    elementMilli.innerHTML = milli;
}