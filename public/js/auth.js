var firebaseConfig = {
    apiKey: "AIzaSyBwhvrEwCgQZX57BSmx9qJWYe4sqLRJ-hE",
    authDomain: "azone-86fa8.firebaseapp.com",
    databaseURL: "https://azone-86fa8.firebaseio.com",
    projectId: "azone-86fa8"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);


//make and store firestore references 
const auth = firebase.auth();
const db = firebase.firestore();





$("#add-btn").on("click", function (event) {
    event.preventDefault()
    const email = $("#email").val().trim()
    const password = $("#signup-password").val().trim()

    
        auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === "auth/email-already-in-use") {
            alert("email already in use")
            
        }

    }).then(function (cred) {


        console.log(cred)
        alert("Account Creation Successful!")
        location.reload()
        
    })


});

$("#signOut").on("click", function (event) {
    event.preventDefault()

    auth.signOut().then(function () {
        console.log("user signed out")
    })

});


    $("#login").on("submit", function (event) {
        event.preventDefault()
        event.stopPropagation()
        console.log("clicked")

        const email = $("#loginEmail").val()
        const password = $("#loginPassword").val()
        auth.signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode + " " + errorMessage)
            if(errorCode==="auth/user-not-found"){
                alert("There is no account linked to that email. Please go to the Create a Login page to sign up.") 

            }
            else if(errorCode==="auth/wrong-password"){
                alert("Your password is incorrect. Click forgot password for assistance.")
                
            }


        }).then(function (cred) {


            console.log(cred)
            alert("Sign in Successful!")
            email.empty()
            password.empty()

        })

    })

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          // ...

          console.log("user is signed in")
        } else {
          // User is signed out.
          // ...

          console.log("user is signed out")
        }
      });
