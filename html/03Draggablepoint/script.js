const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let dragging = false;
canvas.width = width;
canvas.height = height;
let point = new Point(new Vector2d(300,300),"red", 20, true);
point.draw(context);

function animation(){
requestAnimationFrame(animation);
context.clearRect(0,0,width,height);
point.draw(context);
}

animation();