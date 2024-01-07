// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.

var name = urlParams.get("name");
var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = "Hello " + name;
