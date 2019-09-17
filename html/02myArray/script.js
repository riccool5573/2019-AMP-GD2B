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
let q = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let A = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let B = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let C = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let D = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let E = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let F = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let G = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let H = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let I = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
let J = new Point(new Vector2d(Math.random()*1000,Math.random()*400),100,Math.random()*30);
A.draw(context);
B.draw(context);
C.draw(context);
D.draw(context);
E.draw(context);
F.draw(context);
G.draw(context);
H.draw(context);
I.draw(context);
J.draw(context);
Points.push(A);
Points.push(B);
Points.push(C);
Points.push(D);
Points.push(E);
Points.push(F);
Points.push(G);
Points.push(H);
Points.push(I);
Points.push(J);
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
    }

})
