class Food{

    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }
    display(){
    rectMode(CENTER);
    strokeWeight(5);
    stroke("green")
    fill("white");
    rect(this.x,this.y,this.width,this.height);
    }
    
    }