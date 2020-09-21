// this is my auth.js file 
const loginButton = document.getElementById('login-button');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

longinButton.onclick= function() {
    const email = loginEmail.value;
    const password = loginPassword.value;
    

const promise = firebase.auth().signInWithEmailAndPassword(email, password);
promise.then(alert("Successfully Logged In!"));
    
    
promise.catch(function(error){
        console.log(error);
        alert(error.message);
    });
}
