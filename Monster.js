class Monster {
  constructor(x,y,widht,height){
		var options = {
		isStatic:true,	 
		resitution:0.5,	
      friction:1.0
    };
		this.body-=Bodies.rectangle(x,y,height,widht,options);
		this.widht=widht;
		this.height=height;
		this.image=loadImage("monster1.png");
		World.add(world, this.body);

	}
	display()
	{		
			push()
			translate(this.body.position.x.this.position.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.widht, this.height);
			pop();
			
	}
}
