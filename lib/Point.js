class Point {
  constructor(position,color,height,draggable){

    this.position = position;
    this.color = color;
    this.height = height
    this.draggable = false || draggable;
    if(this.draggable){
      this.drag();
    }

    }

    draw(context){

      context.beginPath();
      context.strokeStyle = this.color;
      context.fillStyle = this.color;
        context.arc(this.position.dx,this.position.dy,this.height,0,2*Math.PI);
      context.stroke();
      context.fill();
      context.closePath();
    }
    drag(){
      console.log("got here");
      let dragging = false;
      
window.addEventListener('mousedown',(evt)=>{
  let mouseVector = new Vector2d(evt.clientX,evt.clientY);
  let difference = new Vector2d(0,0);
    difference.differenceVector(point.position,mouseVector);
    if(difference.magnitude <= point.height){
      dragging = true;
      console.log("works");
      }
    })

    window.addEventListener('mousemove',(evt)=>{
      if(dragging){
      this.position.dx = evt.clientX;
      this.position.dy = evt.clientY;
      }
    })

    window.addEventListener('mouseup',()=>{
      dragging = false;
    })

    }
}
