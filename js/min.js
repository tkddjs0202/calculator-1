function min() {
	document.getElementById("min").onclick = function() {
	  var num1 = parseInt(document.getElementById("num1").value);
	  var num2 = parseInt(document.getElementById("num2").value);
	  if(num1 < num2)
	    alert(num1);
	  else
	    alert(num2);	  
	};
}