var input = document.getElementById("input")
var button = document.getElementById("enter")
var ul = document.querySelector("ul");




function process()

{

	var check =  document.createElement("li");
	check.style.fontSize="20px";
	var newLI = document.createTextNode(input.value);				 
	check.appendChild(newLI);
	ul.appendChild(check);
	input.value="";
	
	var del = document.createElement("button");
	del.style.height="25px";
	del.style.width="85px";
	var newwLI = document.createTextNode("Task Done");
	
	del.appendChild(newwLI);
	check.appendChild(del);
					  
	
	
	del.onclick= function()
					{
						check.remove();
                        //check.children.remove();	
                     }      
                     
 	check.addEventListener("click", function ()  
 	{
        del.parentElement.classList.toggle("done");
        })
        
	del.style.margin="10px 0px 0px 20px";
				
	
	
}

function test1()

				{
					if(input.value.length > 0)
					{
						
						process(); 	
						
				     window.scrollBy({ 
  						     top: 100, // could be negative value
 							 left: 0, 
 							 behavior: 'smooth' 
						});													 	
												
					 }
					 
					 else if(input.value.length === 0)
					 {alert("Please enter your tasks");}
					 
					
					 
				}
				
function test2(Event)

		{
					if(input.value.length > 0 && Event.keyCode === 13)
					{
						process();
						window.scrollBy({ 
  						     top: 100, // could be negative value
 							 left: 0, 
 							 behavior: 'smooth' 
						});					}	
					
					 else if(input.value.length === 0 && Event.keyCode === 13 )
					 {alert("Please enter your tasks");}

					
				}
				
 
button.addEventListener("click", test1);

input.addEventListener("keypress", test2);


