// this is my create.js file 
const signupButton = document.getElementById('submit-sign-up');
const signupUsername = document.getElementById('sign-up-username');
const signupEmail = document.getElementById('sign-up-email');
const signupPassword = document.getElementById('sign-up-password');

// this function allows the user to sign up when they click a button
signupButton.onclick = function(){
    //take the email and password and send it to firebase
    const email = signupEmail.value;
    const password = signupPassword.value;
    //firebase.auth().createUserWithEmailAndPassword(email, password);

const promise = firebase.auth() .createUserWithEmailAndPassword(email, password);
promise.then(updateUser)
    
  function updateUser(credentials){
      const userInfo = {
          displayName: signupUsername.value
      };
      credentials.user.updateProfile(userInfo);
      alert("Succesfully created a user")
  }    
    promise.catch(function(error){
        console.log(error);
        alert(error.message);
    });
};
