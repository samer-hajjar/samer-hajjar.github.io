console.log("File read successfully");

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "hacklab2021@gmail.com",
        Password: "hacklab12345678",
        To: 'ahmad.ismail@publicismedia.com',
        From: "hacklab2021@gmail.com",
        Subject: "New Job Application Submitted",
        Body: "<html><p>A new job application has been submitted.</p><br></br><p style=\"display:inline\">Position: </p></html>" + document.getElementById("jobname").innerHTML +
            "<html><br></br><p style=\"display:inline\">Applicant name: </p></html>" + document.getElementById("formname").value +
            "<html><br></br><p style=\"display:inline\">Applicant email: </p></html>" + document.getElementById("formemail").value +
            "<html><br></br><p style=\"display:inline\">Message from applicant: </p></html>" + document.getElementById("formcomment").value,
    });
    console.log("File read successfully");
}

function courseSendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "hacklab2021@gmail.com",
        Password: "hacklab12345678",
        To: 'ahmad.ismail@publicismedia.com',
        From: "hacklab2021@gmail.com",
        Subject: "New Course Enrollment Submitted",
        Body: "<html><p>A new course enrollment has been submitted.</p><br></br><p style=\"display:inline\">Course: </p></html>" + document.getElementById("coursename").innerHTML +
            "<html><br></br><p style=\"display:inline\">Applicant name: </p></html>" + document.getElementById("formname").value +
            "<html><br></br><p style=\"display:inline\">Applicant email: </p></html>" + document.getElementById("formemail").value +
            "<html><br></br><p style=\"display:inline\">Message from applicant: </p></html>" + document.getElementById("formcomment").value,
    });
    console.log("File read successfully");
}

var jobnamekeyword = document.getElementById("jobname").innerHTML;
var finalname = jobnamekeyword.replace(" ", "%20");
var finaludemyname = jobnamekeyword.replace(" ", "+");