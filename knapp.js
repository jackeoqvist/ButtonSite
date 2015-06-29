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
		
		/*	function() {
				window.alert("Hello to you sir!")
			}, */

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo");
			var img = document.createElement('img');
			img.src = 'http://ak-hdl.buzzfed.com/static/2013-10/enhanced/webdr01/30/12/anigif_enhanced-buzz-14674-1383151956-4.gif';
  			div.appendChild(img);
		},

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "https://www.youtube.com/embed/B-N1yJyrQRY?autoplay=1";
			iframe.width = 500;
			iframe.height = 500;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		},

		function() {
			var div = document.getElementById("demo").innerHTML = "";
			window.open("http://www.partridgegetslucky.com/")
		},

		function() {
			var div = document.getElementById("demo").innerHTML = "";
			window.open("http://eelslap.com/")
		},
		
		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "https://www.youtube.com/embed/RkBm9NjUKbY?autoplay=1";
			iframe.width = 500;
			iframe.height = 500;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		}



		];

		var i = Math.floor(Math.random() * funktioner.length);
		funktioner[i]();
};
