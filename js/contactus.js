console.log("File read successfully");

function contactFormEmail() {
    alert("Im here!");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "hacklab2021@gmail.com",
        Password: "hacklab12345678",
        To: 'ahmad.ismail@publicismedia.com',
        From: "hacklab2021@gmail.com",
        Subject: "New Contact Form has been Submitted",
        // Subject: document.getElementById("subject").innerHTML,
        Body: "<html><p>A new message has been sent your way!</p><br></br><p style=\"display:inline\">User's name: </p></html>" + document.getElementById("formname").value +
            "<html><br></br><p style=\"display:inline\">User's email: </p></html>" + document.getElementById("formemail").value +
            // "<html><br></br><p style=\"display:inline\">User's phone number: </p></html>" + document.getElementById("formphone").innerHTML +
            "<html><br></br><p style=\"display:inline\">Message from User: </p></html>" + document.getElementById("formtextarea").value,
    });
    alert("Contact Us form request sent!");
};