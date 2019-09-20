const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
let mouseVector = new Vector2d(0,0);
let difference = new Vector2d(0,0);
canvas.width = width;
canvas.height = height;
var Points = [];
let counter = 0;
for(i = 0; i < 10; i++){
    let i = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
    i.draw(context);
    Points.push(i);
}

function reset(){

  Points = [];
  for(i = 0; i < 10; i++){
      let i = new Point(new Vector2d(Math.random()*1000,Math.random()*400),"black",Math.random()*30);
      i.draw(context);
      Points.push(i);
  }
  for (let i = 0; i < Points.length; i++){
    context.fillText(i + 1, Points[i].position.dx , Points[i].position.dy - 5 - Points[i].height);
  }
}


console.log(Points);
for (let i = 0; i < Points.length; i++){
  context.fillText(i + 1, Points[i].position.dx , Points[i].position.dy - 5 - Points[i].height);
}
window.addEventListener('click',(evt)=>{

  mouseVector.dx = evt.clientX;
  mouseVector.dy = evt.clientY;
    console.log(mouseVector.dx,mouseVector.dy);
    difference.differenceVector(Points[counter].position,mouseVector);
    if(difference.magnitude <= Points[counter].height){
      Points[counter].color = "red";
      Points[counter].draw(context);
      counter++;
      if (counter == 10){
        console.log("done");

        while (counter > 0){
        counter -= 1;
        Points[counter].color = "black";

        context.clearRect(0, 0, canvas.width, canvas.height);
        reset();

      }
      }
    }
})
