const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const boardContainer = document.querySelector(".board");

// Add event listeners for swipe gestures
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(event) {
    switch (event.key) {
        case 'ArrowUp':
            swipeUp();
            break;
        case 'ArrowDown':
            swipeDown();
            break;
        case 'ArrowLeft':
            swipeLeft();
            break;
        case 'ArrowRight':
            swipeRight();
            break;
    }
    display();
}

/*function swipeUp() {
    // Implement logic for swiping up
    console.log('Swiped Up');
}

function swipeDown() {
    // Implement logic for swiping down
    console.log('Swiped Down');
}

function swipeLeft() {
    // Implement logic for swiping left
    console.log('Swiped Left');
}

function swipeRight() {
    // Implement logic for swiping right
    console.log('Swiped Right');
}*/
function swipeUp() {
    for (let col = 0; col < 4; col++) {
        let temp = [0, 0, 0, 0];
        let index = 0;
        for (let row = 0; row < 4; row++) {
            if (board[row][col] !== 0) {
                temp[index] = board[row][col];
                index++;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (temp[i] === temp[i + 1] && temp[i] !== 0) {
                temp[i] *= 2;
                temp[i + 1] = 0;
            }
        }
        index = 0;
        for (let row = 0; row < 4; row++) {
            if (temp[index] !== 0) {
                board[row][col] = temp[index];
                index++;
            } else {
                board[row][col] = 0;
            }
        }
    }
    assignRandom();
}

function swipeDown() {
    for (let col = 0; col < 4; col++) {
        let temp = [0, 0, 0, 0];
        let index = 3;
        for (let row = 3; row >= 0; row--) {
            if (board[row][col] !== 0) {
                temp[index] = board[row][col];
                index--;
            }
        }
        for (let i = 3; i > 0; i--) {
            if (temp[i] === temp[i - 1] && temp[i] !== 0) {
                temp[i] *= 2;
                temp[i - 1] = 0;
            }
        }
        index = 3;
        for (let row = 3; row >= 0; row--) {
            if (temp[index] !== 0) {
                board[row][col] = temp[index];
                index--;
            } else {
                board[row][col] = 0;
            }
        }
    }
    assignRandom();
}

function swipeLeft() {
    for (let row = 0; row < 4; row++) {
        let temp = [0, 0, 0, 0];
        let index = 0;
        for (let col = 0; col < 4; col++) {
            if (board[row][col] !== 0) {
                temp[index] = board[row][col];
                index++;
            }
        }
        for (let i = 0; i < 3; i++) {
            if (temp[i] === temp[i + 1] && temp[i] !== 0) {
                temp[i] *= 2;
                temp[i + 1] = 0;
            }
        }
        index = 0;
        for (let col = 0; col < 4; col++) {
            if (temp[index] !== 0) {
                board[row][col] = temp[index];
                index++;
            } else {
                board[row][col] = 0;
            }
        }
    }
    assignRandom();
}

function swipeRight() {
    for (let row = 0; row < 4; row++) {
        let temp = [0, 0, 0, 0];
        let index = 3;
        for (let col = 3; col >= 0; col--) {
            if (board[row][col] !== 0) {
                temp[index] = board[row][col];
                index--;
            }
        }
        for (let i = 3; i > 0; i--) {
            if (temp[i] === temp[i - 1] && temp[i] !== 0) {
                temp[i] *= 2;
                temp[i - 1] = 0;
            }
        }
        index = 3;
        for (let col = 3; col >= 0; col--) {
            if (temp[index] !== 0) {
                board[row][col] = temp[index];
                index--;
            } else {
                board[row][col] = 0;
            }
        }
    }
    assignRandom();
}

function display() {
    let elem = 0;
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === 0) {
                boardContainer.children[elem].style.color = "";
                boardContainer.children[elem].innerText = "";
                boardContainer.children[elem].style.backgroundColor = "";
                elem++;
            } else {
                if (board[row][col] >= 128) {
                    boardContainer.children[elem].style.color = "white";
                }
                boardContainer.children[elem].innerText = board[row][col];
                boardContainer.children[elem].style.backgroundColor = changeColor(row, col);
                elem++;
            }
        }
    }
}

function assignRandom() {
    let row = Math.floor(Math.random() * 4)
    let col = Math.floor(Math.random() * 4)
    if (board[row][col] == 0) {
        let chance = Math.random();
        if (chance > 0.9)
            board[row][col] = 4;
        else board[row][col] = 2;
    } else {
        try {
            assignRandom();
        } catch {
            console.log("game over");
        }
    }
}

function changeColor(row, col) {
    let value = board[row][col];
    return `hsla(220, ${(100/12)*(Math.log2(value))}%, ${100-Math.log2(value)*12}%,${100-Math.log2(value)/12}%)`;
}

assignRandom();
assignRandom();
display();