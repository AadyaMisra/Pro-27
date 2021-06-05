class Chain {
    constructor(bodyA,bodyB){
        var chainoptions={
            bodyA:bodyA,
            bodyB:bodyB,
            lenght:20,
            stiffness:0.1
}
this.chain= Constraint.create(chainoptions)
World.add(world,this.chain)

    
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(3)
        fill("green")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        
    }


}