function max() {
	document.getElementById("max").onclick = function() {
	  var num1 = parseInt(document.getElementById("num1").value);
	  var num2 = parseInt(document.getElementById("num2").value);
	  if(num1 < num2)
	    alert(num2);
	  else
	    alert(num1);
	};
}