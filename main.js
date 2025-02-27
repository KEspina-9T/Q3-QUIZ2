		// JS EVENT onmousover
		function mouseOver(){
			Submit.style.background	= "#E9DDDD";
			Submit.style.color = "black";

		}
		// JS EVENT onmouseout
		function mouseOut(){
			Submit.style.background	= "#704A4C";
			Submit.style.color = "white";

		}

		// JS EVENT onclick
		function clickAlert() {
			var name = document.getElementById("FullName").value;

  			alert('Thanks! '  + name + ' Please proceed to the next step!');
  		}

		// JS EVENT onchange
		document.getElementById("FullName").onchange = function() {changeToCapital()}
		function changeToCapital(){
			var input = document.getElementById("FullName");
			input.value = input.value.toUpperCase();
		}


		// Discount (the discount needs to be exact with the student id for it to apply, kaya I used the ===) 
		function checkDiscount() {
		    var type = document.getElementById("type").value;
		    var Price = 300;
		    var discount= (type === "student") * 0.2;
		    var discountedPrice = Price - ( discount * Price);
		    var round_discountedPrice = discountedPrice.toFixed(2)
		    
		    alert('Your ticket price is ' + round_discountedPrice + ' Please proceed to the Last step!') ;

		}

		function claim(){
			alert('Your ticket is sent to your email, enjoy the ride!')
		}
