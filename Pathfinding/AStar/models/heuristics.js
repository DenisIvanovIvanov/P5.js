function manhattanDistance(current, end) {
    return Math.abs(current.x - end.x) + Math.abs(current.y - end.y);
}

function diagonal(current, end) {
    var d1 = Math.abs(current.x  - end.x);
    var d2 = Math.abs(current.y - end.y);
    return 1 * (d1 + d2) + (Math.sqrt(2) - 2 * 1) * Math.min(d1, d2);
}

// Euclidean and euclidean squared not recommended to use with A*