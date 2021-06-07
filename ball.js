class Ball{
    constructor(x,y,r){
var Option={
    density:1
}
        this.body=Bodies.circle(x,y,r,Option);
        this.r = r;
        World.add(world,this.body)
    }
    display(){
 
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}