var tree;
var root;
var inNodeVal, button, addText;
function setup()
{ 
   root= null;	
	createCanvas(1000,500);
	background(125);
   addText = createElement('h4', 'Value of the node you want to add: ');
   addText.position(width+20, 10);
   
   inNodeVal = createInput();
   inNodeVal.position(width+20,addText.y +addText.height+40 );
   
   button = createButton('Add Node');
   button.position(inNodeVal.x + inNodeVal.width+10, inNodeVal.y );
   var val =inNodeVal.value();

   button.mousePressed(function() { addNode(inNodeVal.value());});

	
	/*for (var i=0; i< 10; i++)
	{
		tree.addValue(floor(random(0,100)));
	}
/*	tree.addValue(5);
	tree.addValue(3);
	tree.addValue(7);
	tree.addValue(6);
*/		
/*	console.log(tree);
	tree.traverse();
	var t=15;
    var result=tree.search(t);
	if (result == null)
	{
		console.log('Not found');
	}
	else
	{
		console.log(result);
	}*/
	
}
function draw() {
	
}




function addNode(val) {
	if(val=="")
	{
		window.alert('The node must have a value!');
		
	}
	else {
	
 var n=new Node(val);
 if(root == null)
  {
  	root=n;
  }	
 if(n!=root) root.addNode(n,0);
 console.log(n.value);
 n.printit();
}
}

function test(val) {
	 var name =val ;
  addText.html('hello '+name+'!');
  inNodeVal.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
	}
