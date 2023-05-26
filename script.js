
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2G0pdJc0o4cDkwpSXUL9VLpEPvXncaaE",
  authDomain: "captcha-4b951.firebaseapp.com",
  projectId: "captcha-4b951",
  storageBucket: "captcha-4b951.appspot.com",
  messagingSenderId: "986536261548",
  appId: "1:986536261548:web:0366ffd78aa1f81523ec09"
 });
  

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  // Function to generate a random captcha
  function generateCaptcha() {
    const characters = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      captcha += characters.charAt(randomIndex);
    }
    document.querySelector("s").textContent = captcha;
    return captcha; // Return the generated captcha
  }
  
  // Function to check if all input fields are filled
  function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');
  
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || !gender) {
      alert("Please fill in all the required fields.");
      return false;
    }
  
    return true;
  }
  
  // Function to check if the password and confirm password match
  function validatePassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    return true;
  }
  
  // Function to check if the captcha matches
  function validateCaptcha() {
    const userCaptcha = document.getElementById('txt').value;
    const generatedCaptcha = document.querySelector("s").textContent;
  
    if (userCaptcha !== generatedCaptcha) {
      alert("Captcha is incorrect.");
      return false;
    }
  
    return true;
  }

  function formSubmit() {
    if (validateForm() && validatePassword() && validateCaptcha()) {
     // const captcha = document.querySelector("s").textContent; // Get the displayed captcha
      signUp(); // Pass the captcha to the signUp() function
    }
  }
  
  // Function for signing up
  const signUp = (captcha) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        document.write("You are signed up. Proceed to sign in.");
  
        // Additional actions if needed
        window.location.assign("login.html")
  
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        alert("An error occurred during sign up. Please try again.");
      });
  }
  
  // Event listener for form submission
 
  
  // Call the function to generate and display the captcha code
  generateCaptcha();
  





    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    // const db = firebase.firestore();
    // const auth = firebase.auth();

    // // Rest of the code...

    // const signUp = () => {
    //   const email = document.getElementById("email").value;
    //   const password = document.getElementById("password").value;

    //   firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //       // Signed up successfully
    //       const user = userCredential.user;
    //       document.write("You are signed up. Proceed to sign in.");

    //       // Additional actions if needed

    //     })
    //     .catch((error) => {
    //       console.log(error.code);
    //       console.log(error.message);
    //       alert("An error occurred during sign up. Please try again.");
    //     });
    // }

    // // Function for signing in
    // const signIn = () => {
    //   const email = document.getElementById("email").value;
    //   const password = document.getElementById("password").value;

    //   firebase.auth().signInWithEmailAndPassword(email, password)
    //     .then((userCredential) => {
    //       // Signed in successfully
    //       const user = userCredential.user;
    //       alert("You are signed in.");
          
    //       // Additional actions if needed

    //     })
    //     .catch((error) => {
    //       console.log(error.code);
    //       console.log(error.message);
    //       alert("Invalid email or password. Please try again.");
    //     });
    // }



    // let timeout;
    // let captcha = "";

    // // Function to check if all input fields are filled
    // function validateForm() {
    //   const firstName = document.getElementById('firstName').value;
    //   const lastName = document.getElementById('lastName').value;
    //   const email = document.getElementById('email').value;
    //   const password = document.getElementById('password').value;
    //   const confirmPassword = document.getElementById('confirmPassword').value;
    //   const gender = document.querySelector('input[name="gender"]:checked');

    //   if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || !gender) {
    //     alert("Please fill in all the required fields.");
    //     return false;
    //   }

    //   return true;
    // }

    // // Function to check if the password and confirm password match
    // function validatePassword() {
    //   const password = document.getElementById('password').value;
    //   const confirmPassword = document.getElementById('confirmPassword').value;

    //   if (password !== confirmPassword) {
    //     alert("Passwords do not match.");
    //     return false;
    //   }

    //   return true;
    // }

    // // Function to check if the captcha matches
    // function validateCaptcha() {
    //   const userCaptcha = document.getElementById('txt').value;

    //   if (userCaptcha !== captcha) {
    //     alert("Captcha is incorrect.");
    //     return false;
    //   }

    //   return true;
    // }

    // // Event listener for form submission
    // function formSubmit() {
    //   if (validateForm() && validatePassword() && validateCaptcha()) {
    //     signUp();
    //   }
    // }

    // // Function to generate a random captcha
    // function generateCaptcha() {
    //     const characters = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    //     captcha = "";
    //     for (let i = 0; i < 6; i++) {
    //       const randomIndex = Math.floor(Math.random() * characters.length);
    //       captcha += characters.charAt(randomIndex);
    //     }
    //     document.querySelector("s").textContent = captcha;
    //   }
  
    //   // Call the function to generate and display the captcha code
    //   generateCaptcha();