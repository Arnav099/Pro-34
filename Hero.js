class Hero {
  constructor(x,y,widht,height)
	{
		var options = { 
			Istatic:false,
			restitution:0,
			density: 1.2, 
			friction:1
		};
		this.body=bodies.rectangle (x,y,height,widht,options);
		this.widht=widht;
		this.height=height;
		this.image=loadImage("superhero1.png");
		World.add(world, this.body);

	}
	
	display()
	{
			var angle=this.body.angle;
			var pos=this.body.position;
			push();
			translate(this.body.position.x,this.body.y);
			imageMode(CENTER);
			image(this.image,0,0,this.widht,this.height);
			pop();	
			
	}
}
