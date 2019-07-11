function validateForm() {

		if ( document.getElementById("bId").value == 0 ) {
			alert(" please enter Id " );
			return false;
		}
		else if ( document.getElementById("bName").value == 0 ) {
			alert(" please enter name " );
			return false;
		}
		else if ( document.getElementById("bPrice").value == 0 ) {
			alert(" please enter price " );
			return false;
		}
	
		console.log("strUser");
		var e = document.getElementById("bCatg");
		var strUser = e.options[e.selectedIndex].text;
		console.log(strUser);
		document.write(strUser);

	}
