class Log{
    constructor (x,y,height,angle){
        var boption={
            restitution:0.5,
            friction:1
          }
          this.body=Bodies.rectangle(x,y,20,height,boption)
          this.height=height
          Matter.Body.setAngle(this.body,angle)
          World.add(world,this.body)
    }
    display(){
        push()
       
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("brown")
        strokeWeight(4)
        stroke("green")
        rectMode(CENTER)
  rect(0,0,20,this.height)
  pop()
    }
}