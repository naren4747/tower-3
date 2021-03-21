class Bird{
    constructor (x,y){
        var boption={
            restitution:0.5,
            friction:1
          }
          this.body=Bodies.rectangle(x,y,50,50,boption)
          World.add(world,this.body)
    }
    display(){
        push()
        this.body.position.x=mouseX
        this.body.position.y=mouseY

        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        strokeWeight(4)
        stroke("green")
        rectMode(CENTER)
  rect(0,0,50,50)
  pop()
    }
}