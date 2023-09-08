var uname;
var phone;
var subject;
var email;
var message;



window.addEventListener("DOMContentLoaded", (event) => {
    let subject_field = document.getElementById('subject')
    let message_field = document.getElementById('message')

    subject_field.addEventListener("change",(e)=>{
        subject = document.getElementById('subject').value;
        // console.log(message);

        document.getElementById('submit-button').setAttribute('href', "mailto: bryanjoeadams@gmail.com?subject="+subject+'&body='+message+'')
    })

    message_field.addEventListener("change",(e)=>{
        message = document.getElementById('message').value;
        // console.log(message);

        document.getElementById('submit-button').setAttribute('href', "mailto: bryanjoeadams@gmail.com?subject="+subject+'&body='+message+'')
    })
});

// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "bryanjoeadams@gmail.com",
//         Password : "7A62EEC25F0FC18598BC7932C2BFB302DCAC",
//         To: 'bryanjoeadams@gmail.com',
//         From: 'bryanjoeadams@gmail.com',
//         Subject: subject,
//         Body: "Name:${uname}\nPhone:${phone}\nEmail:${email}\n${message}",
//     }).then(function (message) {
//         alert(message);
//         // alert("Updated")
//     });
// }

// function submit(){
//     uname = document.getElementById('name').value;
//     phone = document.getElementById('phone').value;
//     subject = document.getElementById('subject').value;
//     email = document.getElementById('email').value;
//     message = document.getElementById('message').value;

//     sendEmail();

// }