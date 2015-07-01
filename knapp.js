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

	        if (answer === "tta") {
	        	document.getElementById("swf").innerHTML = "";
				var div = document.getElementById("swf")
				var iframe = document.createElement('iframe')
		
				iframe.src = "tth.swf";
				iframe.width = 800;
				iframe.height = 600;
				iframe.allowfullscreen = true;
				div.appendChild(iframe);
	        };
	        
	        if (answer === "shake") {
				javascript:(function(){function c(){var e=document.createElement("link");e.setAttribute("type","text/css");e.setAttribute("rel","stylesheet");e.setAttribute("href",f);e.setAttribute("class",l);document.body.appendChild(e)}function h(){var e=document.getElementsByClassName(l);for(var t=0;t<e.length;t++){document.body.removeChild(e[t])}}function p(){var e=document.createElement("div");e.setAttribute("class",a);document.body.appendChild(e);setTimeout(function(){document.body.removeChild(e)},100)}function d(e){return{height:e.offsetHeight,width:e.offsetWidth}}function v(i){var s=d(i);return s.height>e&&s.height<n&&s.width>t&&s.width<r}function m(e){var t=e;var n=0;while(!!t){n+=t.offsetTop;t=t.offsetParent}return n}function g(){var e=document.documentElement;if(!!window.innerWidth){return window.innerHeight}else if(e&&!isNaN(e.clientHeight)){return e.clientHeight}return 0}function y(){if(window.pageYOffset){return window.pageYOffset}return Math.max(document.documentElement.scrollTop,document.body.scrollTop)}function E(e){var t=m(e);return t>=w&&t<=b+w}function S(){var e=document.createElement("audio");e.setAttribute("class",l);e.src=i;e.loop=false;e.addEventListener("canplay",function(){setTimeout(function(){x(k)},500);setTimeout(function(){N();p();for(var e=0;e<O.length;e++){T(O[e])}},15500)},true);e.addEventListener("ended",function(){N();h()},true);e.innerHTML=" <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";document.body.appendChild(e);e.play()}function x(e){e.className+=" "+s+" "+o}function T(e){e.className+=" "+s+" "+u[Math.floor(Math.random()*u.length)]}function N(){var e=document.getElementsByClassName(s);var t=new RegExp("\\b"+s+"\\b");for(var n=0;n<e.length;){e[n].className=e[n].className.replace(t,"")}}var e=30;var t=30;var n=350;var r=350;var i="audio/shake.mp3";var s="mw-harlem_shake_me";var o="im_first";var u=["im_drunk","im_baked","im_trippin","im_blown"];var a="mw-strobe_light";var f="harlem.css";var l="mw_added_css";var b=g();var w=y();var C=document.getElementsByTagName("*");var k=null;for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){if(E(A)){k=A;break}}}if(A===null){console.warn("Could not find a node of the right size. Please try a different page.");return}c();S();var O=[];for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){O.push(A)}}})()
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