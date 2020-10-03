var rect1,rect2,rect3,rect4,rect5,rect6,rect7;
var triangle1,triangle2,triangle3;

function setup() {
  createCanvas(800,400);

  


}
function draw() {
  background(255,255,255);
  rect1 = rect (70,200,50,200);
  rect2 = rect (50,100,15,300);
  rect3 = rect (355,100,15,300);
  rect4 = rect (300,200,50,200);
  rect5 = rect (120,250,50,150);
  rect6 = rect (250,250,50,150);
  rect7 = rect (170,280,80,120);
  triangle1 = triangle(65,200,95,150,125,200);
  triangle2 = triangle(355,200,325,150,295,200);
  triangle3 = triangle(170,280,215,160,250,280);
}