function validateForm() {
		
  		var x = document.getElementById("skills").value;
  		console.log(x);

		if ( document.getElementById("sId").value == 0 ) {
			alert(" please enter your Id " );
			return false;
		}
		else if ( document.getElementById("sName").value == 0 ) {
			alert(" please enter your name " );
			return false;
		}
		else if ( document.getElementById("sAddress").value == null 
			|| document.getElementById("sAddress").value == null ) {
			console.

			alert(" please enter your address " );
			return false;
		}else{
			alert("Values submitted Succesfully" );
			return true;
		}

	}