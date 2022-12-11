class Not
{
  constructor(x,y,instate1=0,instate2=0){
    if(instate1==0)
    {
       instate1=new state(0);
    }
    if(instate2==0)
    {
       instate2=new state(0);
    }
    this.instate1=instate1;
    this.instate2=instate2;
    this.outstate1=new state(0);
    this.x=x;
    this.y=y;
    this.output=0;
    this.size=[30,10];
    this.buttonSize=8;
    this.buttons=[new button(this.x,this.y+5,this),new button(this.x+30,this.y+5,this,true)];
  }
  
  setPos(x,y)
  {
    this.x=x;
    this.y=y;
    this.buttons=this.reposButtons(this.buttons);
  }
  
  checkDrag(x,y)
  {
    let marginx=8;
    
    if((x<this.size[0]-marginx+this.x&&x>this.x+marginx)&&(y<this.size[1]+this.y&&y>this.y))
    {
      this.x=x-this.size[0]/2;
      this.y=y-this.size[1]/2;
      this.buttons=this.reposButtons(this.buttons);
      return true;
    }
    else
    {
      return false; 
    }
    
  }
  
  checkClick(x,y)
  {
    for(let i=0;i<this.buttons.length;i++)
    {
      let out=this.buttons[i].checkClick(x,y);
      if(out){
       //if(this.buttons[i].checkClick(x,y))
       return out;
      }
    }
    return false ;
  }
  
  update()
  {
    
    this.buttons[1].state=(this.buttons[0].state==1)?0:1;
    this.ouput=this.buttons[1].state;
    this.outstate1=this.output;
  }
  
  show()
  {
     stroke(255);
    
     fill(50);
     rect(this.x,this.y,this.size[0],this.size[1]);
          
     for(let i=0 ;i<this.buttons.length; i++)
     {
       this.buttons[i].show();
     }

     noStroke();
     textSize(10);
     fill(255);
     push();
     translate(this.x,this.y);
     rotate(radians(90));
     text("N",2,-10);
     pop();
  }
  
  reposButtons(buttons)
  {
    for(let i=0;i<buttons.length;i++)
    {
     buttons[i].x=this.x+((i==0)?0:30);
     buttons[i].y=this.y+5;
    }
    return buttons;
  }
}
