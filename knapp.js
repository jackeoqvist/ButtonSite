var knapp = function(){
	
	

	var funktioner = 
		[function() {
			document.getElementById("demo").innerHTML = "Greattastic";
			
		},
		function() {
			document.getElementById("demo").innerHTML = "Awesomeness";
			
		},
		function() {
			document.getElementById("demo").innerHTML = "Crazyness";
			
		},
		
		function() {
			window.alert("Hello to you sir!")
		},

		function() {
			var div = document.getElementById("demo");
			var img = document.createElement('img');

			img.src = 'http://ak-hdl.buzzfed.com/static/2013-10/enhanced/webdr01/30/12/anigif_enhanced-buzz-14674-1383151956-4.gif';
  			div.appendChild(img);
		}



		];

		var i = Math.floor(Math.random() * funktioner.length);
		funktioner[i]();
};
