class Pin{
    constructor(x, y, width, height) {
      this.visibility=255;
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("sprites/pin.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        

        if(this.body.speed<3){
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image,0,0,this.width, this.height);
          pop();

        }else{
          
          World.remove(world,this.body)
          push()
         this.visibility=this.visibility-5;
          tint(255,this.visibility)
         
          pop()
        }
      }
      score(){
        if(this.visiblity<0 && this.visiblity>-1005){
         score=score+1
     
        }
      }
}