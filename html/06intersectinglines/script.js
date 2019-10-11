const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let A = new Point(new Vector2d(300,200),100,10,true);
let B = new Point(new Vector2d(500,300),100,10,true);
let C = new Point(new Vector2d(600,100),100,10,true);
let D = new Point(new Vector2d(800,500),100,10,true);
let S = new Point(new Vector2d(0,0),"red",10);
let l = new LinearFunction(1,1);
let h = new LinearFunction(1,1);
function animate(){
requestAnimationFrame(animate);
context.clearRect(0,0,canvas.width,canvas.height);
A.draw(context);
B.draw(context);
C.draw(context);
D.draw(context);
l.defineLineByTwoPoints(A,B);
h.defineLineByTwoPoints(C,D);
l.draw(context);
S.position.dx = l.intersection(h).x;
S.position.dy = l.intersection(h).y;
S.draw(context);
h.draw(context);

}
animate();