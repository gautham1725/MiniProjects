function validate(){

			var e = document.getElementById("user");
			var result = e.options[e.selectedIndex].value;
			
			if ( document.getElementById("username").value == 0 || 
				document.getElementById("username").value == ""  ) {

				alert(" please enter your Username " );
				return false;

			}else if (document.getElementById("password").value == 0 || 
					document.getElementById("password").value == "") {

				alert(" please enter your password " );
				return false;

			}else if (result == "" || 
					result == "none") {

				alert(" please enter your type " );
				return false;

			}
			
			console.log("fun called");
			var e = document.getElementById("user");
			var result = e.options[e.selectedIndex].value;
			console.log(result);

			if(result == 1){

				console.log("inside if");
				window.open("file:///D:/training/Mini%20Project/adminPage.html");

			}else if(result == 0){

				console.log("inside if else");
				window.open("file:///D:/training/Mini%20Project/studentPage.html");

			}else{
				return false;
			}
		}