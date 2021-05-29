let Email1= document.getElementById("Email1");
let Password1= document.getElementById("Password1");
let genre= document.getElementById("genre");
let successful= document.getElementById("successful");

function validate(){
    if(Email1.value=="" || Password1.value=="" || genre.value==""){
            alert("Please Enter Book Details ")
              return false;
    }
    else{
        alert("Book Successfully Entered")
              return true;
    }
}