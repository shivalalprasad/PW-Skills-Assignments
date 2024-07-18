// function matchPassword() {  
//     var pw1 = document.getElementById("password");  
//     var pw2 = document.getElementById("conform_password");  
//     if(pw1 != pw2)  
//     {   
//       alert("Passwords did not match");  
//     }
//      else {  
//       alert("Account created successfully");  
//     }  
//   }  
function login(){
    document.getElementById("login").style.display="block";
    document.getElementById("signup").style.display="none";
}
function signup(){
    document.getElementById("signup").style.display="block";
    document.getElementById("login").style.display="none";
}