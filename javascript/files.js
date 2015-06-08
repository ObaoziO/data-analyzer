"use strict"; // strict mode syntax
// Opens a file
var openFile = function(event) {
  var input = event.target;
  type = askType();
  var colorlist = document.getElementById("colors");
  while(colorlist.firstChild){
    colorlist.removeChild(colorlist.firstChild);
  }
  // use PapaParse for handing the csv file
  var results = Papa.parse(input.files[0], {
  	complete: function(results) {
      var resData = results.data;
      if((resData[resData.length-1].length == 1) && (resData[resData.length-1][0] == "")){
        results.data.pop();
      }
  		loadData(results);
  	}
  });
};

// provides the openFile function call to the DOM
var loadListener = function(){
  document.getElementById('files').addEventListener('change', openFile, false);

}

function askType(){
	var type = prompt("Enter desired chart type", "Line");
	if(!type){
		return "line";
	}
	else if(type.toLowerCase() === "bar"){
		//console.log("bar");
		return "bar";
	}
	else if(type.toLowerCase() === "line"){
		//console.log("line");
		return "line";
	}
	else{
		//console.log("line");
		return "line";
	}
}
