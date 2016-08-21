// Playing with P5.js - Brett Fraley - 2016

// @class - A 'Grid' is for rendering evenly spaced shapes of equal columns and rows,
// which proper 'grids / netting' is curently incomplete.

function Grid(w, h, ncols, nrows, margin) {
    this.w = w;
    this.h = h;
    this.ncols = ncols;
    this.nrows = nrows;
    this.margin = margin;

    this.render = function() {
        for (var i = 0; i < this.ncols; i++) {
            rect(this.margin * i, this.margin * i, this.w, this.h);
            rect(this.margin * 2 * i, this.margin * 2 * i, this.w - 10, this.h - 10);
            rect(mouseX, mouseY, 100, 100);
            ellipse(100,100,100 + mouseX, 100 + mouseY);
        }
    };
}

// Initialize new grid and call grid.render.

function renderGrid() {
    var grid = new Grid(25, 25, 10, 100, 25);
    grid.render();
}

// P5 Setup and Draw runtime routines.

function setup() {
  createCanvas(700, 500, WEBGL);
}

function draw() {
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.50);
  renderGrid();
}
