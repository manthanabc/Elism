class button
{
  constructor(x,y,gate,outputButton=false,state=0,size=8)
  {
    this.x=x;
    this.y=y;
    this.size=size;
    this.state=state;
    this.type=outputButton;
    this.gate=gate;
}
  
  show()
  {
     fill(((this.state==1)?255:0),0,0);
     ellipse(this.x,this.y,this.size,this.size);
  }
  
  checkClick(x,y)
  {
   if((x>this.x-this.size/2&&x<this.x+this.size/2)&&(y>this.y-this.size/2&&y<this.y+this.size/2))
   {
     if(!this.type){
       this.state=(this.state==1)?0:1;
     }
     return this;
   } else {
      return false;
   }
  }
}
