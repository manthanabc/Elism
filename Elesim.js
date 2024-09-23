let a=new state(1);
let set=false;

let dragging=false;
let startWire=[-1, -1, -1, -1];
let wires=[];

let layoutbuttons;
let showingGates=false;

let buttonInOut=[-1,-1];

// let and=new And(50, 50);
// let or1=new Or(350,150);

let bat0 = new Battery(500, 500);
let gates=[bat0];

function setup() {
  createCanvas(1000, 800);
  background(120);
  layoutbuttons=[new layoutButton(10,height-30,20,20,showGates)];
}


function draw() {
  background(0);

  for(let i=0;i<gates.length;i++)
  {
    gates[i].update();
    gates[i].show();
  }
  
  for(let i=0;i<wires.length;i++)
  {
    wires[i].show();
  }

  if (startWire[0]>0&&startWire[1]>0&&startWire[2]>0&&startWire[3]>0) {
    wires.push(new wire(buttonInOut[0],buttonInOut[1]));
    stroke(2);
    line(startWire[0], startWire[1], startWire[2], startWire[3]);
    startWire[0]=-1;
    startWire[1]=-1;
    startWire[2]=-1;
    startWire[3]=-1;
  }

  if(dragging&&startWire[0]>0&&startWire[1]>0)
  {
    line(startWire[0],startWire[1],mouseX,mouseY);
  }

  if(!dragging)
  {
    startWire[0]=-1;
    startWire[1]=-1;
    startWire[2]=-1;
    startWire[3]=-1;  
  }
  for(let w=0;w<wires.length;w++)
  {
    let count=0;
    for(let g=0;g<gates.length;g++)
    {
      // console.log(wires[w]);
      if(ElementIn(gates[g].buttons,[wires[w].buttonIn,wires[w].buttonOut]))
      {
        // console.log("yes");
        count++;
      }
    }
    if(count<=1)
    {
      // console.log("no");
      // console.log(wires,w);
      wires=removee(wires,w);
      // console.log(wires,w);
    }
  }
  
  for(let i=0;i<layoutbuttons.length;i++)
  {
    layoutbuttons[i].repose(10,height-30);
    layoutbuttons[i].show();
  }
}

function mouseDragged()
{
  if(!dragging)
  {
    checkbutton();
    dragging=true;
  }
  for(let i=0;i<gates.length;i++)
  {
    if(startWire[0]<0&&startWire[1]<0){
     if(gates[i].checkDrag(mouseX, mouseY)||gates[i].checkDrag(pmouseX, pmouseY))
     {return ;}
    }
  }
}

function mousePressed()
{
  for(let i=0;i<layoutbuttons.length;i++)
  {
    layoutbuttons[i].checkClick(mouseX,mouseY);
  }
}

function mouseReleased()
{
  checkbutton();
  dragging=false;
}


function checkbutton()
{
  for(let i=0;i<gates.length;i++)
  {
    let out=gates[i].checkClick(mouseX, mouseY);
    if(out)
    {
      if(startWire[0]==-1&&startWire[1]==-1)
      {
        startWire[0]=out.x;
        startWire[1]=out.y;
        buttonInOut[0]=out;
      }
      if(startWire[0]>0&&startWire[1]>0&&(out.gate!=buttonInOut[0].gate))
      {
        startWire[2]=out.x;
        startWire[3]=out.y;
        buttonInOut[1]=out;
      }
    }
  }
}

function keyPressed(){
  //console.log(key);
  if(key == "a")
  {
    gates.push(new And(mouseX,mouseY));
  }
  if(key == "o")
  {
    gates.push(new Or(mouseX,mouseY));
  }
  if(key == "b")
  {
    gates.push(new emButton(mouseX,mouseY));
  }
  if(key == "n")
  {
    gates.push(new Not(mouseX,mouseY));
  }
  
  if(key == "x")
  {
    gates.push(new Xor(mouseX,mouseY));
  }
  if(key == "+")
  {
    resizeCanvas(width+100,height+100);
  }
  if(key == "-")
  {
    resizeCanvas(width-100,height-100);
  }
  if(key == "Delete")
  {
    for(let i=0;i<gates.length;i++)
    {
      if(gates[i].checkDrag(mouseX,mouseY))
      {gates=removee(gates,i);return;}
    }
  }
}

function removee(arr,index)
{
  //console.log(arr,index);
  if(arr.length==1)
  {
    //console.log("this");
    return [];
  }
  let newarr=arr;
  let found=0;
  for(let i=0;i<arr.length;i++)
  {
    if(i==index)
    {
      found=1;
    }
    newarr[i]=(arr[(i+found < arr.length)?i+found:-1]);
  }
  newarr.pop();
  return newarr;
}


function ElementIn(arr1,arr2)
{
  for(let i=0;i<arr1.length;i++)
  {
    for(let j=0;j<arr2.length;j++)
    {
      if(arr1[i]==arr2[j])
      {
        return true;
      }
    }
  }
  return false;
}

function showGates()
{
  if(!showingGates){
    showingGates=true;
    gates.push(new And(40,height-50),new Or(120,height-50),new Xor(200,height-50),new Not(300,height-30), new Battery(400, height-50),  new Resistor(500, height-50));
  } else {
     let skip=0;
     for(let i=0;i<gates.length+skip;i++)
     {
        if(gates[i-skip].y > height-51)
        {
          gates=removee(gates,i-skip);
          skip++;
        }
     }
     showingGates=false;
  }
}
