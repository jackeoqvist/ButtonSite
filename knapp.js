//Random displayer when button is pressed
var knapp = function(){	

	var funktioner = 
		[function() {
			document.getElementById("demo").innerHTML = "Awesomeness";
			
		},
		
		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo");
			var img = document.createElement('img');
			img.src = 'http://ak-hdl.buzzfed.com/static/2013-10/enhanced/webdr01/30/12/anigif_enhanced-buzz-14674-1383151956-4.gif';
  			div.appendChild(img);
		},
			function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo");
			var img = document.createElement('img');
			img.src = 'bilder/3.gif';
  			div.appendChild(img);
		},
  		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo");
			var img = document.createElement('img');
			img.src = 'bilder/72.gif';
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
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "https://www.youtube.com/embed/RkBm9NjUKbY?autoplay=1";
			iframe.width = 500;
			iframe.height = 500;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		},

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "http://eelslap.com/";
			iframe.width = 600;
			iframe.height = 600;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		},

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "http://www.partridgegetslucky.com/";
			iframe.width = 600;
			iframe.height = 600;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		},

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "https://www.youtube.com/embed/X16G2hsVI9w?autoplay=1";
			iframe.width = 500;
			iframe.height = 500;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		},

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo");
			var img = document.createElement('img');
			img.src = 'http://i.kinja-img.com/gawker-media/image/upload/s--X83WpYxL--/c_fit,fl_progressive,q_80,w_320/193t2cgbq0wmmgif.gif';
  			div.appendChild(img);
		},

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo");
			var img = document.createElement('img');
			img.src = 'http://images4.fanpop.com/image/photos/22400000/Random-Gif-random-22481623-474-268.gif';
  			div.appendChild(img);
		},
		

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "http://www.riddlydiddly.com/";
			iframe.width = 500;
			iframe.height = 500;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		},

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "https://www.youtube.com/embed/09m0B8RRiEE?autoplay=1";
			iframe.width = 500;
			iframe.height = 500;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		},


		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "http://www.sanger.dk/";
			iframe.width = 600;
			iframe.height = 600;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		}


		];

		var i = Math.floor(Math.random() * funktioner.length);
		funktioner[i]();
};
	
	//button Keybind
	document.addEventListener('keydown', function(event) {
	    if(event.keyCode == 32) {
	        changeImage();
	        knapp();
	    }
	});

	
	//Prompt Eeaster Egg code Keycode = HOME
	document.addEventListener('keydown', function(event) {
	    if(event.keyCode == 36) {
	        var answer = prompt("Type something!")

	        if (answer === "gravity") {
	        	var gravity = document.createElement("script");
				gravity.src = "http://gravityscript.googlecode.com/svn/trunk/gravityscript.js";
				document.body.appendChild(gravity);
	        };

	        if (answer === "tth") {
	        	document.getElementById("swf").innerHTML = "";
				var div = document.getElementById("swf")
				var iframe = document.createElement('iframe')
		
				iframe.src = "tth.swf";
				iframe.width = 800;
				iframe.height = 600;
				iframe.allowfullscreen = true;
				div.appendChild(iframe);
	        }
	    }
	});

	
	//random background color
	function setbackground() {
	    window.setTimeout( "setbackground()", 10000000); //  milliseconds delay

	    var index = Math.round(Math.random() * 9);

	    var ColorValue = "FFFFFF"; // default color - white (index = 0)

	    if(index == 1)
	        ColorValue = "079DFF"; 
	    if(index == 2)
	        ColorValue = "3CFF3B"; 
	    if(index == 3)
	        ColorValue = "FFCE20"; 
	    if(index == 4)
	        ColorValue = "FF9135"; 
	    if(index == 5)
	        ColorValue = "E049FF"; 
	    if(index == 6)
	        ColorValue = "6257FF"; 
	    if(index == 7)
	       ColorValue = "FF00F0"; 
	    if(index == 8)
	        ColorValue = "3366FF"; 
	   if(index == 9)
	        ColorValue = "CCCCCC"; 

	   document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

		}

		//Random title color
		function setbackgroundTitle()
		{
		    window.setTimeout( "setbackgroundTitle()", 600); //  milliseconds delay

		    var index = Math.round(Math.random() * 4);

		    var ColorValue = "FFFFFF"; // default color - white (index = 0)

		    if(index == 1)
		        ColorValue = "66FF33"; 
		    if(index == 2)
		        ColorValue = "FF0000"; 
		    if(index == 3)
		        ColorValue = "FF00FF"; 
		    if(index == 4)
		        ColorValue = "0000FF"; 


		    document.getElementById("title")[0].style.backgroundColor = "#" + ColorValue;

		}