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
    startPoint = board[0][0];
    startPoint.wall = false;
    endPoint = board[rows - 1][cols - 1];
    endPoint. wall = false;

    heap = new BinaryHeap(function(cell) {
        return cell.f;
    });

    // starting point
    heap.push(startPoint);
}
  
function draw() {
    background(220);
    drawBoard();

    AStar().then(path => {
        if (path.length > 0) {
            // draw path
            for (var cell of path) {
                cell.show(color(0, 0, 0));
            }
        } else {
            console.error("No path found");
        }
    });
    noLoop();
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

async function AStar() {
    while (heap.size() > 0) {
        var currentNode = heap.pop();
        
        // found it, create path
        if (currentNode == endPoint) {
            var current = currentNode;
            var path = [];
            while (current.previousCell) {
                path.push(current);
                current = current.previousCell;
            }
            return path.reverse();
        }

        currentNode.closed = true;
        var neighbors = currentNode.getNeighbors(board);
        for (let i = 0; i < neighbors.length; i++) {
            var neighbor = neighbors[i];
            if (neighbor.closed || neighbor.wall)
                continue;

            var gScore = currentNode.g + neighbor.cost;
            var neighborVisited = neighbor.visited;
            if (!neighborVisited || gScore < neighbor.g) {
                neighbor.visited = true;
                neighbor.previousCell = currentNode;
                neighbor.h = diagonal(neighbor, endPoint); // or manhattanDistance(...);
                neighbor.g = gScore;
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.show(color(255, 0, 0));

                if (!neighborVisited)
                    heap.push(neighbor);
                else
                    heap.rescoreElement(neighbor);

                // slow down for better visualization
                await sleep(30);
            }
        }
    }

    return [];
}

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}
