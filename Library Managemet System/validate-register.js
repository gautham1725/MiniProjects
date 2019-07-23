function validate(){			

			console.log("inside validate");

			if ( document.getElementById("username").value == 0 || 
				document.getElementById("username").value == ""  ) {

				alert(" please enter your Username " );
				return false;

			}else if (document.getElementById("password").value == 0 || 
					document.getElementById("password").value == "") {

				alert(" please enter your password " );
				return false;

			}else  {

				alert(" Values Submitted Successfully !! " );
			}

}