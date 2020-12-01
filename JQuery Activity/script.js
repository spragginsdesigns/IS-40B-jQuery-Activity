function parseUserData() {
    $("#main-form").hide();
    $(".header1").css("background-color", "pink");
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var pNumber = document.getElementById("pnumber").value;
    var eMail = document.getElementById("email").value;
    var res = "Name: " + firstName + " " + lastName + "<br>" + "Phone Number: " + pNumber + "<br>" + "Email: " + eMail + "<br>";
    // Can Also Use: var res = `Name: ${firstName} ${lastName}<br>Phone Number: ${pNumber}<br>Email: ${eMail}<br>`;
    document.getElementById("display").innerHTML = res;
}