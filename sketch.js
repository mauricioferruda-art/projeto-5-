//projeto 5 - Controlando o mouse
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(mouseX,mouseY,20);
  if(mouseX > width){
    text("mouse fora da tela",150,200);
  }
  if(mouseY > height){
    text("mouse fora da tela",150,200);
  }
  
}