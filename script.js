// Function to handle switching between pages smooth
function nextPage(currentPage, targetPage) {
    document.getElementById(`page-${currentPage}`).classList.add('hide');
    document.getElementById(`page-${targetPage}`).classList.remove('hide');
}

// Elusive No Button logic 
const noBtn = document.getElementById('no-btn');

function moveNoButton() {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Function for Yes click
function sayYes() {
    document.getElementById('success-msg').style.display = 'block';
    noBtn.style.display = 'none';
    document.getElementById('yes-btn').disabled = true;
}
