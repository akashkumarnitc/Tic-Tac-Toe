document.getElementById("menuBar").onclick = function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

const boxes = document.querySelectorAll('.Box');
let currentPlayer = 'X';
let xScore = 0;
let oScore = 0;

boxes.forEach(box => {
    box.addEventListener('click', function() {
        if (this.textContent === '') {
            this.textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                alert(currentPlayer + ' wins!');
                updateScore(currentPlayer);
                resetGame();
            } else if (Array.from(boxes).every(box => box.textContent !== '')) {
                alert('It\'s a draw!');
                resetGame();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin(player) {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winPatterns.some(pattern => 
        pattern.every(index => boxes[index].textContent === player)
    );
}

function updateScore(player) {
    if (player === 'X') {
        xScore++;
        document.getElementById('px-score').textContent = xScore;
    } else {
        oScore++;
        document.getElementById('po-score').textContent = oScore;
    }
}

function resetGame() {
    boxes.forEach(box => box.textContent = '');
    currentPlayer = 'X';
}