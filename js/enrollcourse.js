console.log("File read successfully");

function enrollCourse() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "hacklab2021@gmail.com",
        Password: "hacklab12345678",
        To: 'ahmad.ismail@publicismedia.com',
        From: "hacklab2021@gmail.com",
        Subject: "New Course Enrollement Request Submitted",
        Body: "<html><p>A new course enrollement request has been submitted.</p><br></br><p style=\"display:inline\">Course: </p></html>" + document.getElementById("coursename").innerHTML +
            "<html><br></br><p style=\"display:inline\">Applicant name: </p></html>" + document.getElementById("formname").value +
            "<html><br></br><p style=\"display:inline\">Applicant email: </p></html>" + document.getElementById("formemail").value +
            "<html><br></br><p style=\"display:inline\">Message from applicant: </p></html>" + document.getElementById("formcomment").value,
    });
    alert("Course enrollement request sent!");
};