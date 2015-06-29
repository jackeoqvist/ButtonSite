var knapp = function(){
	
	

	var funktioner = 
		[function() {
			document.getElementById("demo").innerHTML = "Awesomeness";
			
		},
		
		/*	function() {
				window.alert("Hello to you sir!")
			}, */

			/*gif*/
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
			iframe.width = 500;
			iframe.height = 500;
			iframe.allowfullscreen = true;
			div.appendChild(iframe);
		},

		function() {
			document.getElementById("demo").innerHTML = "";
			var div = document.getElementById("demo")
			var iframe = document.createElement('iframe')
	
			iframe.src = "http://www.partridgegetslucky.com/";
			iframe.width = 500;
			iframe.height = 500;
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
		}

		];

		var i = Math.floor(Math.random() * funktioner.length);
		funktioner[i]();
};
	