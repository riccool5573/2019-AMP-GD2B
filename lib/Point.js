class Point {
  constructor(position,color,height){

    this.position = position;
    this.color = color;
    this.height = height



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
}
