class Bob{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution: 0.5,
            density:1.2,
            friction:0.5,
        }
        this.body= Bodies.circle(x,y,25,options);
        this.x = x;
        this.y = y;
        this.r = r;


    }

    display(){
        //push();
       // ellipseMode(RADIUS);
        fill(254,0,255);
        strokeWeight(3);
        circle(this.x , this.y, this.r);
        //pop();
    }
}