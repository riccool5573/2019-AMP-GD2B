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
  for(i = 0; i < 20; i++){
      let i = new Point(new Vector2d(getRandom(width),getRandom(height)),"black","#" + getRandom(255*255*255).toString(16));
        i.draw(context);
  }
}
animate();
