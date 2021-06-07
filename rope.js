class Rope{
    constructor(bodyA,pointB){
var option={
    bodyA : bodyA,
    pointB : pointB,
    length : 300,
    stiffness : 1.2
}
        this.rope = Constraint.create(option)
        World.add(world,this.rope)
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(3)
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}