let Email1= document.getElementById("Email1");
let Password1= document.getElementById("Password1");
let successful= document.getElementById("successful");

function validate(){
    if(Email1.value=="" || Password1.value==""){
            alert("Please Enter Author Details")
              return false;
    }
    else{
        alert("Author Successfully Entered")
              return true;
    }
}