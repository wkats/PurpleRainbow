function Drop(){
	this.x = 0;
	this.y = 0;
	this.z = 0;

	this.updateZ = function(){	
	this.z = random (1,15);
	this.x = random(2,width);
	this.y = map(this.z,1,15,-50,-100);
	this.drpWidth = map(this.z,1,15,1,4);
	this.drpSize = map(this.z,1,15,1,12);
	this.velocity = map(this.z,1,15,1,20);
	}
	
	this.updateZ();

	this.show = function(){
		fill(colorDrop.r,colorDrop.g,colorDrop.b);
		strokeWeight(this.drpWidth)
		line(this.x,this.y,this.x,this.y+this.drpSize);
	}

	this.update = function(){
		this.y += this.velocity;
		if(this.y>=height){
			this.updateZ();
		}
	}
}