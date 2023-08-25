var uname;
var phone;
var subject;
var email;
var message;

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "bryanjoeadams@gmail.com",
        Password : "7A62EEC25F0FC18598BC7932C2BFB302DCAC",
        To: 'bryanjoeadams@gmail.com',
        From: 'bryanjoeadams@gmail.com',
        Subject: subject,
        Body: "Name:${uname}\nPhone:${phone}\nEmail:${email}\n${message}",
    }).then(function (message) {
        alert(message);
        alert("Updated")
    });
}

function submit(){
    uname = document.getElementById('name').value;
    phone = document.getElementById('phone').value;
    subject = document.getElementById('subject').value;
    email = document.getElementById('email').value;
    message = document.getElementById('message').value;

    sendEmail();

}