
	
createTable("div","");
createTable("input","FirstName");
createTable("input","firstname");
createTable("br");
createTable("input","LastName");
createTable("input","lastname");
createTable("br");
createTable("input","Age");
createTable("input","age");
createTable("br");
createTable("input","Salary");
createTable("input","salary");
createTable("br");
createTable("input","Department");
createTable("input","department");
reseting();
function createTable(type,value1){
	var employeetab=document.getElementById("employee");
	var tagc = document.createElement(type);
	tagc.value=value1;
	tagc.id=value1;
	employeetab.appendChild(tagc);

}
function reseting(){
	document.getElementById("department").value="";
	document.getElementById("salary").value="";
	document.getElementById("age").value="";
	document.getElementById("lastname").value="";
	document.getElementById("firstname").value="";
}
