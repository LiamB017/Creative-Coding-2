function drawBoxes(numBoxes,strokeColor,strokeThick){
    let boxSize=width/numBoxes
    
   
    for(let j=0; j<numBoxes; j++) { 
        for(let i=0; i<numBoxes; i++){
            noFill();
            strokeWeight(strokeThick)
            stroke(strokeColor);
            push();
            translate(i*boxSize,j*boxSize)
           rotate(45)
            rect(0,0,boxSize,boxSize);
            pop();
        }
    } 
}