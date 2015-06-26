var knapp = function(){
	
	document.getElementById("demo").innerHTML = "Greattastic"

	var funktioner = 
		[function() {
			document.getElementById("demo").innerHTML = "Greattastic";
		},
		function() {
			document.getElementById("demo").innerHTML = "Awesomeness";
		},
		function() {
			document.getElementById("demo").innerHTML = "Crazyness";
		}

		];

		var i = Math.floor(Math.random() * funktioner.length);
		funktioner[i]();
};
