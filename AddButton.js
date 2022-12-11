class layoutButton
{
  constructor(x,y,sx,sy,func)
  {
    this.x=x;
    this.y=y;
    this.sx=sx;
    this.sy=sy;
    this.func=func;
  }
  
  checkClick(x,y)
  {
    if((x>this.x && x<this.x+this.sx)&&(y>this.y && y<this.y+this.sy))
    {
      this.func();
    }
  }
  
  repose(x,y)
  {
    this.x=x;
    this.y=y;
  }
  
  show()
  {
    noStroke();
    fill(255);
    rect(this.x,this.y,this.sx,this.sy);
    fill(150);
    rect(this.x+this.sx/2.3,this.y,3,this.sy);
    rect(this.x,this.y+this.sy/2.3,this.sx,3);
  }
}
