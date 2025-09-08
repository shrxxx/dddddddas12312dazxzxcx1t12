var error = document.querySelector(".error");

// Select the "Zeskanuj kod QR" button (the first .action div)
var scanQrButton = document.querySelectorAll(".action")[0];

// Add an event listener to the "Zeskanuj kod QR" button to show the error
scanQrButton.addEventListener('click', () => {
    error.classList.add("error_open");
});

// Select the "Pokaż kod QR" button (the second .action div)
var showQrButton = document.querySelectorAll(".action")[1];

// Add an event listener to the "Pokaż kod QR" button to redirect
showQrButton.addEventListener('click', () => {
    window.location.href = 'qr2.html';
});

// This part of the code remains the same, it closes the error box
document.querySelectorAll(".close").forEach((element) => {
    element.addEventListener('click', () => {
        error.classList.remove("error_open");
    });
});
