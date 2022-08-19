console.log("margin_set");
//console.log("frameCount:", frameCount);

let leftMargin = 40;
let topMargin = 40;


function setup() {
  createCanvas(2017, 1760);
 
}

function draw() {
  
console.log('frameCount:',frameCount);

  grey();

 

   if (frameCount <= 300){
    stroke(255);
    fill(255);
  }
   
    if (frameCount >= 600){
      stroke(255);
      fill(0);

    }
    
    if (frameCount >= 900){
      stroke(255);
      fill(255,0,0);

    }

    if (frameCount >= 1100){
      stroke(255,0,0);
      noFill();
    
    }

    if (frameCount >= 1500){
      stroke(255,0,0);
      fill(255,0,0);
    }

    if (frameCount >= 2000){
      stroke(255);
      fill(0);
    }

    if (frameCount >= 2500){
      stroke(255);
      fill(255);
    }


}

function grey(kleur) {
  background(0);
  //fill(kleur);
  
  strokeWeight(5); 

  //we can set a translation before our for loop
  //to add margin to our drawing
  translate(leftMargin, topMargin);

  for (var i = 0; i < width; i += 200) {
    for (var j = 0; j < height; j += 200) {
      push();
      translate(i, j);
      rotate(frameCount/250);
      rect(0, 0, 100, 100);
      pop();
    }
  }
}

// function mousePressed() {
//   save('imag.png');
 