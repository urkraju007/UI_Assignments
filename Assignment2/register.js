
var vehicleData = [	{year:2015,make:"Audi",model:"A4"},
					{year:2014,make:"Benz",model:"c2000"},
					{year:2015,make:"Maruti",model:"s-cross"},
					{year:2013,make:"Maruti",model:"s-cross"},
					{year:2015,make:"Maruti",model:"WagonR"}];
var Year=[];
var Make=[];
var Model=[];	
function importingData(){
		
		for(i=0;i<vehicleData.length;i++)
			Year[i]=vehicleData[i].year;
			Year=removeDuplicates(Year);
		//Make=removeDuplicates(vehicleData,Make,"make");
		//Model=removeDuplicates(vehicleData,Model,"model");
}
function removeDuplicates(inputarray)
{
	var x=false;
	var dropDown=[];
	for(i=0;i<inputarray.length;i++)
	{
		x=false;
		for(j=0;j<=dropDown.length;j++)
		{
			
			if(inputarray[i] == dropDown[j])
			{
				x=true;
				break;
			}
		}
		if(x==false)
			dropDown.push(inputarray[i]);
	}
	return dropDown;
}

function filterMake(parm1,parm2,parm3,parm4)
{
	var Make=[];
	for(i=0;i<parm2.length;i++)
	{
		if(parm1 == parm2[i][parm3])
		{
			Make.push(parm2[i][parm4]);
		}
	}
	return Make;
}

function createOption(option,id,value){
	var optEle=document.getElementById(id);
	var tagOpt=document.createElement("option");
	var text=document.createTextNode(value);
	tagOpt.appendChild(text);
	optEle.appendChild(tagOpt);
}

function selYear(){
	importingData();
	createOption("option","year","Select Year");
	for(i=0;i<Year.length;i++)
		createOption("option","year",Year[i]);
}

function selMake(){
	document.getElementById("make").options.length=0;
	document.getElementById("model").options.length=1;
	createOption("option","make","Select Make");
	var a = document.getElementById("year").value;
	Make = filterMake(a,vehicleData,"year","make");	
	Make = removeDuplicates(Make);
	for(i=0;i<Make.length;i++)
		createOption("option","make",Make[i]);
	
}

function selModel(){
	document.getElementById("model").options.length=0;
	createOption("option","model","Select Model");
	var b = document.getElementById("make").value;
	Model = filterMake(b,vehicleData,"make","model");	
	Model = removeDuplicates(Model);
	for(i=0;i<Model.length;i++)
		createOption("option","model",Model[i]);	
}
