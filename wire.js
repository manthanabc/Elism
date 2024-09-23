class wire
{
  constructor(buttonIn,buttonOut)
  {
    this.buttonIn=buttonIn;
    this.buttonOut=buttonOut;
    this.state=buttonIn.state;
    buttonOut.state=this.state;
    this.direction=0;
  }
  
  show()
  {
    let buttonIn=this.buttonIn;
    let buttonOut=this.buttonOut;

    if(buttonIn.state==1)
    {
      this.activate();
    } else {
     this.deactivate(); 
    }
    
    
    fill(255);
    stroke(255);
    line(buttonIn.x,buttonIn.y,buttonOut.x,buttonOut.y);
  }
  
  activate()
  {
    this.state=1;
    this.buttonIn.state=1;
    this.buttonOut.state=1;
  }
  deactivate()
  {
    this.state=0;
    this.buttonIn.state=0;
    this.buttonOut.state=0;
  }
}
