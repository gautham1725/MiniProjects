function validateForm() {

		if ( document.getElementById("bId").value == 0 ) {
			alert(" please enter book Id " );
			return false;
		}
		else if ( document.getElementById("bName").value == 0 ) {
			alert(" please enter book name " );
			return false;
		}
		else if ( document.getElementById("bPrice").value == 0 ) {
			alert(" please enter book price " );
			return false;
		}else{
			alert("Values submitted Succesfully" );
		}


	}
