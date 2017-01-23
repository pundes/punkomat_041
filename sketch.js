var raster = [];
var w;
var columns;
var valx, valy;
var l;
var t = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);

  w = 8;
  columns = floor(width/w);
  for (var i = 0; i < w; i++) {
    raster.push(new Raster(i * columns, 0));
  }
}

function draw() {
  background(0);

  for (var i = 0; i < raster.length; i++) {
    raster[i].display();
  }
}

function Raster(x, y) {
  this.x = x;
  this.y = y;
  this.position = createVector((0, 0));
  this.position.x = this.x;
  this.w = width/8;


  this.display = function () {

    push();
    stroke(255);
    strokeWeight(0.3);
    translate(this.position.x, this.position.y);
    //fill(50);
    //rect(0, 0, this.w, height);
    for(var i = 0; i < 50; i++) {
      t = t + 100;
      valx = height * noise(t+10);
      line(0, valx, this.w, valx);
    }
    strokeWeight(0.7);
    for(i = 0; i < 5; i++) {
      t = t + 100;
      valx = height * noise(t+10);
      l = random(10, this.w/3);
      line(0, valx, l, valx);
      valy = height * noise(t);
      l = random((this.w*3)/4, this.w);
      line(l, valy, this.w, valy );
    }
    pop();

  }
}
