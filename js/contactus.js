console.log("File read successfully");

function contactUs() {
    alert("Contact request sent!");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "hacklab2021@gmail.com",
        Password: "hacklab12345678",
        To: 'samer.hajjar@publicismedia.com',
        From: "hacklab2021@gmail.com",
        Subject: "New Contact Request Submitted",
        Body: 
        "<html><p>A new contact request has been submitted.</p><br><p style=\"display:inline\">Name: </p></html>" + 
            document.getElementById("formname").value +
            "<html><br><p style=\"display:inline\">Email: </p></html>" + 
            document.getElementById("formemail").value +
            "<html><br><p style=\"display:inline\">Message: </p></html>" + 
            document.getElementById("formcomment").value,
    });
 
};