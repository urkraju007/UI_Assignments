
var employee=[];
var i=0;
var d=0;
function getEmployee(){
	
	
	i=employee.length-1;
	if(d==0 || d<=i){
		if(d!=0)
			i=i-d;	
		document.getElementById("department").value=employee[i];
		i--;
		document.getElementById("salary").value=employee[i];
		i--;
		document.getElementById("age").value=employee[i];
		i--;
		document.getElementById("lastname").value=employee[i];
		i--;
		document.getElementById("firstname").value=employee[i];
		i--;
		d=d+5;
	}
	else 
		reseting();
	
}
function addEmployee()
{		
	i=employee.length;
	employee[i] = document.getElementById("firstname").value;
	i++;
	employee[i] = document.getElementById("lastname").value;
	i++;
	employee[i] = document.getElementById("age").value;
	i++;
	employee[i] = document.getElementById("salary").value;
	i++;
	employee[i] = document.getElementById("department").value;
	i++;
	d=0;
	reseting();
	
}
function reseting(){
	document.getElementById("department").value="";
	document.getElementById("salary").value="";
	document.getElementById("age").value="";
	document.getElementById("lastname").value="";
	document.getElementById("firstname").value="";
}


