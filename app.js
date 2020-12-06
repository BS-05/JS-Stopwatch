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