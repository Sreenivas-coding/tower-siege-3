class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.Visibility = 255
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
      display(){
        console.log(this.Visibility);
         if(this.body.speed < 3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visibility = this.Visibility - 5;
           tint(255,this.Visibility);
           pop();
         }
        }
         score(){
          if (this.Visibility < 0 && this.Visibility > -1005){
            score++;
  
          }
        }
      
      
      
      }