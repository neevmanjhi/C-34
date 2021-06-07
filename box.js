class Box {
    constructor(x,y,w,h){
        var Option={
            isStatic : false
        }
this.body = Bodies.rectangle(x,y,w,h,Option)
this.w = w;
this.h = h;
World.add(world,this.body)
    }

    display(){
        angleMode(RADIANS)
        push ();
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
          rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop ();
    }
}