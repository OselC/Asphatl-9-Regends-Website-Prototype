// <--------- Javascript for Toggle Menu ---------->
var navLinks = document.getElementById("navLinks");

        function showMenu(){
            navLinks.style.right = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-200px";
        }

// Validation

function validateData(){
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var date = document.getElementById("birth-date").value
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var terms = document.getElementById("terms")
    
    let success = true;

        // If login not valid
        if(username.length < 4 || username.length > 10){
              alert("Username must be between 4 - 10 characters.")
              success = false
            }
            else if(!email.endsWith("@gmail.com")){
                alert("Email must end with '@gmail.com'")
                success = false
            }
            else if(date === ""){
                alert("Please insert date of birth.")
                success = false
            }
            else if(!male.checked && !female.checked){
                alert("Gender must be selected.")
                success = false
            }
            else if(!terms.checked){
                alert("You must agree with terms and conditions.")
                success = false
            }
        
        // If login is valid
        if(success == true){
            alert("Login Successfull.")
        }

}
