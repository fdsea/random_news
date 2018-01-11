'use strict';

export default class Header {
  constructor(ctx, x, y) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
		this.size = this.getRandom(10, 30); 
		this.color = `hsl(${this.getRandom(0, 359)}, 100%, 50%)`;
		this.posX = this.getRandom(this.size, this.x - this.size);
		this.posY = this.getRandom(this.size, this.y - this.size);
		this.velX = this.getRandom(-0.1, 0.1);
		this.velY = this.getRandom(-0.1, 0.1);
	}
	getRandom(min, max){
		return(Math.random() * (max - min) + min);
	}
	createParticle(){
		this.velX === 0 ? this.velX = 0.1 : this.velX;
		this.velY === 0 ? this.velY = 0.1 : this.velY;
		
		this.posX = this.posX += this.velX;
		this.posY = this.posY += this.velY;
		
		if(this.posX >= this.x - this.size){
			 this.velX = -this.velX;
		}
		if(this.posX <= this.size){
			 this.velX = -this.velX;
		}
		if(this.posY >= this.y - this.size){
			 this.velY = -this.velY;
		}
		if(this.posY <= this.size){
			 this.velY = -this.velY;
		}
		
		this.ctx.beginPath();
		this.ctx.arc(this.posX, this.posY, this.size, 0, Math.PI*2);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
		//ctx.strokeStyle = '#000';
		//ctx.stroke();
		//ctx.lineWidth=8;
		this.ctx.closePath();
	}
}
