//Declare a function to validate whatever user inputs
 function validate(){
    //Variable declaration so that the correct elements are read 
    var name = document.forms["contact"]["name"].value; 
    var email = document.forms["contact"]["email"].value
    var message = document.forms["contact"]["message"].value;
    //Email regex to ensure that whatever user writes on the box corresponds to the format
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //if statements to alert the user and display error messages
    //Name validation to ensure that at least something is typed in
    if (name == "") {
       //There 
       errorName.innerHTML="Enter your name!"
       var a = false
    } else {
        //Remove the error text if the format is correct
        errorName.innerHTML=""
    }
    //Email validation to ensure something is typed in and it confirms with the email format
    if(email.match(mailformat)==null){
        errorEmail.innerHTML="Enter a valid E-mail!"
        var a = false 
    }else{
        //Remove the error text if the format is correct
        errorEmail.innerHTML=""
    }
    //Message validation to ensure something is typed in
    if (message == "") {
        errorMessage.innerHTML="Enter a message!"
        var a =false
    } else{
        //Remove the error text if the format is correct
        errorMessage.innerHTML=""
    }
    //return a (which is false)
    return a 
}

