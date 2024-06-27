function setup() {
    createCanvas(400, 400);
    background("blue");
  }
  
  function draw() {
    
    
    stroke("purple");
    fill("pink");
    
    
   // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
    rect(mouseX,mouseY,15,15);
    }
    
     
  }