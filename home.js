function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('submitBtn');
}


let otp_val = Math.floor(Math.random()*10000);
let emailbody = 
    <h2> Your OTP is </h2>&{opt_val};

    Email.send({
        secureToken : "e3023dda-5a2d-461b-b1f8-1c5277ca0aa3",
        To : email.value,
        From : "nduemmanuel48@gmail.com",
        Subject : "This is my Cyber Security Project 2",
        Body : emailbody
    }).then(
        message => {
            if (message === "OK"){
                alert("OTP send to your mail "+email.value);

                otpverify.style.display = "block";
                const fields_input = getElementsByClassName;
                const submitBtn = getElementsByClassName;

                submitBtn.addEventListener('click',()=>{
                    if(fields_input.value == opt_val){
                        alert("Email address verified...");
                    }
                    else{
                        alert("Invalied OTP");
                    }
                })
            }
        }
    )