const rows = 50;
const cols = 50;

let cellW;
let cellH;
let board = [];
let startPoint;
let endPoint;
let heap;

function setup() {
    createCanvas(800, 800);
    cellW = width / rows;
    cellH = height / cols;

    createBoard();
    
}
  
function draw() {
    background(220);
    drawBoard();
}

function createBoard() {
    for (let i = 0; i < cols; i++)
        board[i] = new Array(rows);

    for (let x = 0; x < rows; x++) {
        for (let y = 0; y < cols; y++) {
            board[x][y] = new Cell(x, y, cellW, cellH);
        }
    }
}

function drawBoard() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          board[i][j].show();
        }
    }
}