 var pressed = false;

 function changeImage() {

 	console.log(document.getElementById("knappbild").src)
    if  (pressed == false)
    {
    	pressed = true;
        document.getElementById("knappbild").src = "bilder/button-pressed.png";
       setTimeout(changeImage, 100);
        
    }
    else 
    {
    	pressed = false;
    	 document.getElementById("knappbild").src = "bilder/button.png";

    }

}