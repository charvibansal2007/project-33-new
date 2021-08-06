class Snow{

    constructor(x,y){
        this.body = Bodies.circle(x,y,20);
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);
        this.x = x;
        this.y = y;
    }

    display(){
        var pos = this.body.position;
        image(this.image, pos.x , pos.y,50 ,50);
        
    }
}