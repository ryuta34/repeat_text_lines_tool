function execute(){
	repText = '';
	getData();
	countLines();
	repeatTexts();
	hundleDownload();
}

function seeResult(){
	repText = '';
	getData();
	countLines();
	repeatTexts();
	displayResult();
}

function getData(){
	t = document.getElementById("input_textarea").value;
	n = document.getElementById("number").value;
	t_arr = t.split('\n');
}

function countLines(){
	lineNum = t_arr.length;
}

function repeatTexts(){
	for (var i = 0; i < lineNum; i++) {
		for (var j = 0; j < n; j++) {
			repText = repText+t_arr[i]+'\n';
		}
	}
}

function displayResult(){
	document.getElementById("result_textarea").value = repText;
}

function hundleDownload(){
	// create file from text
	var blob = new Blob([repText], {"type" : "text/plain"});
	// download file
	if (window.navigator.msSaveBlob) {
		window.navigator.msSaveBlob(blob, "repeat.txt");

		// open file in case of msSaveOrOpenBlob
		window.navigator.msSaveOrOpenBlob(blob, "repeat.txt");
	}else{
		document.getElementById("download").href = window.URL.createObjectURL(blob);
	}
}

