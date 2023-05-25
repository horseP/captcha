// var allValue = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']

// var cVal1 = allValue[Math.floor(Math.random()*allValue.length)];
// var cVal2 = allValue[Math.floor(Math.random()*allValue.length)];
// var cVal3 = allValue[Math.floor(Math.random()*allValue.length)];
// var cVal4 = allValue[Math.floor(Math.random()*allValue.length)];
// var cVal5 = allValue[Math.floor(Math.random()*allValue.length)];
// var cVal6 = allValue[Math.floor(Math.random()*allValue.length)];

// var cValue = cVal1+cVal2+cVal3+cVal4+cVal5+cVal6;
// alert(cValue)

// captchaValue.innerHTML = cValue

// // thisvalue = "";
// // inputCaptcha.addEventListener('change',function(){
// //     thisvalue = inputCaptcha.value;
// //     alert(thisvalue)
// // })

// //  .addEventListener('click',function(){
// //     if(cValue == thisvalue){
// //         alert('valid');
// //         document.registration_form.submit();
// //     }else if(inputCaptcha.value == ""){
// //         alert('Invalid captcha');
// //     }else{
// //         alert('Invalid captcha'); 
// //     }
// // })

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB2G0pdJc0o4cDkwpSXUL9VLpEPvXncaaE",
  authDomain: "captcha-4b951.firebaseapp.com",
  projectId: "captcha-4b951",
  storageBucket: "captcha-4b951.appspot.com",
  messagingSenderId: "986536261548",
  appId: "1:986536261548:web:0366ffd78aa1f81523ec09"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();


   const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    document.write("You are Signed Up")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
   }

   