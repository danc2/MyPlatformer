var Enemy = function() {
this.image= document.createElement("img");

this.x= canvas.width/2;
this.y= canvas.height/2;
this.width= 165;
this.height= 125;
this.image.src= "img/skeleton.png";
}
Enemy.prototype.update = function(deltaTime)
{

}
Enemy.prototype.draw= function()
{
context.save();
context.translate(this.x, this.y);
context.rotate(this.rotation);
context.drawImage(this.image, -this.width/2, -this.height/2);
context.restore();
}