//function creditCheck() this function checks the input from the user from login.html
function creditCheck(){
    console.log("creditCheck() started");
    var firstName;      //creates the variable firstName
    var lastName;       //creates the variable lastName
    var fullName;       //creates the variable fullName
    var badgeNumb;      //creates the variable badgeNumb
    var fullnameLength; //creates the variable fullnameLength

    // extract the first name
    firstName = document.getElementById("fName").value;     //makes the variable firstName equal the id fName from the login page
    console.log("The first name is " + firstName);          //console logs the extracted first name

    //extract the last name
    lastName = document.getElementById("lName").value;      //makes the variable lastName equal the id lName from the login page
    console.log("The last name is " + lastName);            //console logs the extracted last name

    //build the full name
    fullName = firstName + " " + lastName;                  //makes the variable fullName equal the addition of firstName plus lastName (along with a added space in the middle)
    console.log("The full name is " + fullName);            //console logs the added full name

    //extract the badge number
    badgeNumb = document.getElementById("badgeID").value;   //makes the variable badgeNumb eqaul the id badgeID from the longin page
    console.log("The badge number is " + badgeNumb);        //console logs the badge number

    //figure out name length
    fullnameLength = fullName.length;                           //determines the length of the variable fullname in characters and then assigns it to the fullnameLength variable
    console.log("The full name length is " + fullnameLength);   //console logs the full name length

    //input validation
    if(fullnameLength > 20 || fullnameLength == 1){     //if the variable fullnameLength is greater than twenty or equals one then the login fails
        console.log("Invalid login, please try again");
        document.getElementById("loginStatus").innerHTML = "Invalid login, please try again";
    } else if(badgeNumb > 999 || badgeNumb < 1) {       //if the variable badgeNumb is greater than the value of 999 or less than 1 then the login fails
        console.log("Invalid badge ID, please try again");
        document.getElementById("loginStatus").innerHTML = "Invalid Badge ID, please try again";
    } else {    //otherwise the login succeeds and the user is presented with an alert box before being redirected to the UATSpace.html page
        console.log("Welcome");
        document.getElementById("loginStatus").innerHTML = "welcome";
        alert("welcome, " + fullName + " to UAT Space!!");
        location.replace("./UATSpace.html");
    }
}