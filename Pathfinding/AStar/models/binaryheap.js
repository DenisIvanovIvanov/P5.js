class BinaryHeap {
    constructor(scoreFn) {
        this.items = [];
        this.scoreFn = scoreFn;
    }

    push(item) {
        this.items.push(item);
        console.log("After push", this.items);
        this.sinkDown(this.items.length - 1);
        console.log("After sink", this.items);
    }
    
    pop() {
        var result = this.items[0];
        var end = this.items.pop();
        if (this.items.length > 0) {
            this.items[0] = end;
            this.bubbleUp(0);
        }
        return result;
    }

    remove() {
        var i = this.items.indexOf(node);
        var end = this.items.pop();

        if (i !== this.items.length - 1) {
            this.items[i] = end;

            if (this.scoreFn(end) < this.scoreFn(node)) {
                this.sinkDown(i);
            } else {
                this.bubbleUp(i);
            }
        }
    }

    size () {
        return this.items.length;
    }

    sinkDown(n) {
        var element = this.items[n];
        while (n > 0) {
            var parentN = ((n + 1) >> 1) - 1;
            var parent = this.items[parentN];
            if (this.scoreFn(element) < this.scoreFn(parent)) {
                this.items[parentN] = element;
                this.items[n] = parent;
                n = parentN;
            } else {
                break;
            }
        }
    }

    bubbleUp(n) {
        var length = this.items.length;
        var element = this.items[n];
        var elemScore = this.scoreFn(element);

        while (true) {
            var child2N = (n + 1) << 1;
            var child1N = child2N - 1;
            var swap = null;
            var child1Score;
            if (child1N < length) {
                var child1 = this.items[child1N];
                child1Score = this.scoreFn(child1);
                if (child1Score < elemScore) {
                    swap = child1N;
                }
            }

            if (child2N < length) {
                var child2 = this.items[child2N];
                var child2Score = this.scoreFn(child2);
                if (child2Score < (swap === null ? elemScore : child1Score)) {
                    swap = child2N;
                }
            }

            if (swap !== null) {
                this.items[n] = this.items[swap];
                this.items[swap] = element;
                n = swap;
            }
            else {
                break;
            }
        }
    }

    rescoreElement(cell) {
        this.sinkDown(this.items.indexOf(cell));
    }
}
