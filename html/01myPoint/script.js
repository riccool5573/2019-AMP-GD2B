const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;




function getRandom(max){
  return Math.floor(Math.random()*max);
}


function animate(){
  requestAnimationFrame(animate);

  let A = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let B = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let C = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let D = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let E = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let F = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let G = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let H = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let I = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let J = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let K = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let L = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let M = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let N = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let O = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let P = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let Q = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let R = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let S = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let T = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let U = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let V = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let W = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let X = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);
  let Y = new Point(new Vector2d(getRandom(width),getRandom(height)),getRandom()*255,"black","#" + getRandom(255*255*255).toString(16));
  let Z = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16),);

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
K.draw(context);
L.draw(context);
M.draw(context);
N.draw(context);
O.draw(context);
P.draw(context);
Q.draw(context);
R.draw(context);
S.draw(context);
T.draw(context);
U.draw(context);
V.draw(context);
W.draw(context);
X.draw(context);
Y.draw(context);
X.draw(context);
}
animate();
