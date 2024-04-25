function validateform() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if(firstname == "") {
      document.getElementById("errormessage1").innerHTML = "First Name cannot be empty";
      // document.getElementById("errormessage1").style.display = "inline";
      document.getElementById("svg1").style.display = "inline";
      document.getElementById("firstname").style.border = "1px solid #FF7979";
    }
    if(lastname == "") {
      document.getElementById("errormessage2").innerHTML = "Last Name cannot be empty";
      // document.getElementById("errormessage2").style.display = "inline";
      document.getElementById("svg2").style.display = "inline";
      document.getElementById("lastname").style.border = "1px solid #FF7979";
    }
    if(email == "") {
      document.getElementById("errormessage3").innerHTML = "Looks like this is not an email";
      // document.getElementById("errormessage3").style.display = "inline";
      document.getElementById("svg3").style.display = "inline";
      document.getElementById("email").style.border = "1px solid #FF7979";
    }
    if(password == "") {
      document.getElementById("errormessage4").innerHTML = "Password cannot be empty";
      // document.getElementById("errormessage4").style.display = "inline";
      document.getElementById("svg4").style.display = "inline";
      document.getElementById("password").style.border = "1px solid #FF7979";
    }
       else {
      alert ("Your free trial has started!");
    }
    sessionStorage.setItem("firstname_key", firstname);
    sessionStorage.setItem("lastname_key", lastname);
    sessionStorage.setItem("email_key", email);
    sessionStorage.setItem("password_key", password);
}
function removeErrorMessage1(){
  document.getElementById("errormessage1").innerHTML= "";
  document.getElementById("svg1").style.display = "none";
  document.getElementById("firstname").style.border = "1px solid #DEDEDE";
  }
function removeErrorMessage2(){
document.getElementById("errormessage2").innerHTML= "";
document.getElementById("svg2").style.display = "none";
document.getElementById("lastname").style.border = "1px solid #DEDEDE";
}
function removeErrorMessage3(){
document.getElementById("errormessage3").innerHTML= "";
document.getElementById("svg3").style.display = "none";
document.getElementById("email").style.border = "1px solid #DEDEDE";
}
function removeErrorMessage4(){
document.getElementById("errormessage4").innerHTML= "";
document.getElementById("svg4").style.display = "none";
document.getElementById("password").style.border = "1px solid #DEDEDE";
}






