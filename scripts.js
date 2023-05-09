document.addEventListener('DOMContentLoaded', () => {
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameOver = false;
    const cells = document.querySelectorAll('.cell');
    const messageElement = document.getElementById('message');

    function makeMove(index) {
        if (isGameOver || board[index] !== '') return;
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        if (checkWinner(currentPlayer)) {
            messageElement.textContent = `${currentPlayer} wins${currentPlayer} 玩家赢了!`;
            isGameOver = true;
        } else if (board.every(cell => cell !== '')) {
            messageElement.textContent = "It's a draw!打平手";
            isGameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function checkWinner(player) {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winConditions.some(condition => condition.every(index => board[index] === player));
    }

    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        isGameOver = false;
        messageElement.textContent = '';
        cells.forEach(cell => cell.textContent = '');
    }

    window.makeMove = makeMove;
    window.resetGame = resetGame;
});