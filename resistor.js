class Resistor
{
  constructor(x, y, voltage=5){
    this.x=x;
    this.y=y;
    this.voltage = voltage;
    this.output=0;
    this.size=[40, 60];
    this.buttonSize=8;
    this.buttons=[new button(this.x, this.y+this.size[0], this), new button(this.x, this.y+30, this)];
    this.buttons = this.reposButtons(this.buttons)
  }
  
  setPos(x,y)
  {
    this.x=x;
    this.y=y;
    this.buttons=this.reposButtons(this.buttons);
  }
  
  checkDrag(x,y)
  {
    let marginx=25;
    
    let halfWidth = this.size[0] / 2;
    let halfHeight = this.size[1] / 2;

    let rectCenterX = this.x;
    let rectCenterY = this.y;

    let left = rectCenterX - halfWidth;
    let right = rectCenterX + halfWidth;
    let top = rectCenterY - halfHeight;
    let bottom = rectCenterY + halfHeight;

    if (x > left && x < right && y > top && y < bottom) {
        this.x =x;
        this.y = y;
        this.buttons=this.reposButtons(this.buttons);
        return true;
    } else { return false; }
    
  }
  
  checkClick(x,y)
  {
    for(let i=0;i<this.buttons.length;i++)
    {
      let out=this.buttons[i].checkClick(x,y);
      if(out){
       return out;
      }
    }
    return false ;
  }
  
  update()
  {
  }
  
  show()
  {
   stroke(255);
  
   fill(50);
    strokeWeight(4);
    stroke(255);

    let size = 17;
    let slen = 5;

    push()
    translate(0, -2);
    line(this.x, this.y-size/2, this.x+slen, this.y-size/2+5);
    line(this.x+slen, this.y-size/2+5, this.x-slen, this.y+size/2-5);
    line(this.x-slen, this.y+size/2-5, this.x+slen, this.y+size/2);
    line(this.x+slen, this.y+size/2, this.x-slen, this.y+size/2+5);
    line(this.x-slen, this.y+size/2+5, this.x+slen, this.y+size/2+10);
    line(this.x+slen, this.y+size/2+10, this.x, this.y+size/2+15);
    
    line(this.x, this.y-size, this.x, this.y-(size/2)-4);
    line(this.x, this.y+size*0.6*2+10, this.x, this.y+size*0.6+size);
    pop();
   for(let i=0 ;i<this.buttons.length; i++)
   {
     this.buttons[i].show();
   }
  }
  
  reposButtons(buttons)
  {
  let size = 20;
   buttons[0].x=this.x;
   buttons[0].y=this.y-size;
   buttons[1].x=this.x;
   buttons[1].y=this.y+size * 0.6 + size;
   
   return buttons;
  }
}
