function blastoffTimer() {
    //logs the blast off timer within the console
    console.log("blastoffTimer() started");
    //variable to keep time
    var currTime = 50;
    //timer at 50
    setTimeout(function () {
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 0);

    //timer at 45
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 5000);

    //timer at 16
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 10000);

    //timer at 14
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 15000);

    //timer at 12
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 20000);

    //timer at 10
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 25000);

    //timer at 8
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 30000);

    //timer at 6
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 35000);

    //timer at 4
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 40000);

    //timer at 2
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 45000);

    //timer at blastoff
    setTimeout(function () {
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = "Blastoff!!!";
    }, 50000);
}

//craps tracking variables
var wins = 0;
var loses = 0;
var draws = 0;

function playCraps() {
    console.log("playCraps() started");
    //create variable die 1 for the die 1 roll
    var die1 = 0;
    //create variable die 1 for the die 1 roll
    var die2 = 0;
    //create variable to store die1 + die2
    var sum = 0;

    //roll the dice for die 1
    //rolling the die
    die1 = 1 + Math.floor(6 * Math.random());
    //displaying the result on the console
    console.log(die1);

    //same for die 2
    //rolling the die
    die2 = 1 + Math.floor(6 * Math.random());
    //displaying the result on the console
    console.log(die2);

    //determine sum
    sum = die1 + die2;
    //displaying the result on the console
    console.log("The sum of the two dice is: " + sum);

    //display the die1 on the webpage
    document.getElementById("die1Res").innerHTML = die1;
    //display the die2 on the webpage
    document.getElementById("die2Res").innerHTML = die2;
    //display the sum on the webpage
    document.getElementById("diceSum").innerHTML = sum;

    //determine game result
    //describes the loss function, if the sum is 11 or 7 it is a loss
    if (sum == 11 || sum == 7) {
        //displays loss log in console
        console.log("Game result : loss");
        //displays "You lose!!!!!!!" on the webpage
        document.getElementById("gameRes").innerHTML = "You lose!!!!!!!";
        //tracks loses by number
        loses++;
        //refers to losesRes element id from UATSpace.html
        document.getElementById("losesRes").innerHTML = loses;
        //describes the win function, if die 1 is equal to die 2 then it is a win
    } else if (die1 == die2 && die1 % 2 == 0) {
        //displays win log in console
        console.log("Game result : win");
        //displays "You win!!!!!" on the webpage
        document.getElementById("gameRes").innerHTML = "You win!!!!!";
        //tracks wins by number
        wins++;
        //refers to winsRes element id from UATSpace.html
        document.getElementById("winsRes").innerHTML = wins;
        //describes the push function, if the sum is not 11 or 7 and the dice are not eqaul, it is a push
    } else {
        //displays push log in console
        console.log("Game result : push");
        //displays "Push, you did not lose." on the webpage
        document.getElementById("gameRes").innerHTML = "Push, you did not lose.";
        //tracks draws by number
        draws++;
        //refers to drawRes element id from UATSpace.html
        document.getElementById("drawsRes").innerHTML = draws;
    }
}
//this is a function for a better blast of timer, the timer counts down by 5s from 50
function btrBlastoffTimer() {
    //logs when the blast of timer has started into the console
    console.log("blastoffTimer() started");
    //variable to keep time
    var currTime = 50;
    //this is a loop for a smaller blast off timer, it counts by 5 from 50 and once it reaches the halfway point of 25 a warning appears
    for (var i = 0; i < 11; i = i + 1) {
        //this gets done i number of times
        setTimeout(function () {
            //logs the current count down timer in the console
            console.log("currTime = " + currTime);
            //a if statement defining when the text "Blastoff!!!" appears which is at the 0 timer mark
            if (currTime == 0) {
                //replaces the blast off timer count down with "Blastoff!!!"
                document.getElementById("blastoffDis").innerHTML = "Blastoff!!!";
                //a else if statement defining when to display the warning text which will appear once the timer reaches below 25
            } else if (currTime < 25) {
                //displays the warning text with the current countdown timer in between
                document.getElementById("blastoffDis").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currTime + " sec left";
                //this makes the countdown continue after reaching below 25
                currTime = currTime - 5;
                //a else statement that displays "(x) seconds left up" until the <25 point
            } else {
                //displays the text " sec left" on the webpage
                document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
                //this is the countdown timer that substracts 5 every 5 seconds from 50 to 20
                currTime = currTime - 5;
            }
        }, 5000 * i);
    }
}

function startFun() {   //a function for the start button
    console.log("startFun() started");  //logs inside the console that the startFun() has started
    //set up prelim
    document.getElementById("data").rows["time_seconds"].innerHTML = "reading data";
    //the value index equals zero
    index = 0;
    //a timer variable which sets the interval to update display and gives it a time interval
    timer = setInterval(updateDisplay, timeInterval);
    //disables the start button when clicked
    document.getElementById("startButton").disabled = true;
    //enables the stop button when the start button is clicked
    document.getElementById("stopButton").disabled = false;
}

function stopFun() {    //a function for the stop button
    console.log("stopFun() started");   //logs inside the console that the stopFun() has started
    //disables the stop button when clicked
    document.getElementById("stopButton").disabled = true;
    //enables the start button when the stop button is clicked
    document.getElementById("startButton").disabled = false;
    //clears the timer when the stop button is clicked
    clearInterval(timer);
    //clear the clock. the text below replaces the clock time when the stop button is selected
    document.getElementById("clockTime").innerHTML = " Press Start to display current time";
}

//audio on off button function
function muteFun() {
    //background audio variable
    var audio = document.getElementById("backgroundaudio");
    //button variable
    var button = document.getElementById("mutebutton");
    //console logs when the button is clicked on
    console.log("muteFun() started")
    //statement for playing/pausing audio
    if (audio.paused) {
        //play audio
        audio.play();
        //changes button image to soundON.png
        button.src = "soundON.png";
        //unmute audio console log
        console.log("Audio playing");
    } else {
        //pause audio
        audio.pause();
        //changes button image to soundOFF.png
        button.src = "soundOFF.png";
        //mute audio console log
        console.log("Audio muted");
    }
}
//this class holds the data
class InputData{
    //this constructor makes the objects
    constructor(
        time_seconds,       //time property
        latitude,           //latitude property
        longitude,          //longitude property
        gps_altitude,       //gps altitude property
        bmpSensor_altitude, //bmp altitude sensor property
        bmpSensor_pressure, //bmp pressure sensor property
        bmpSensor_temp,     //bmp temperature sensor property
        digSensor_temp,     //digital temperature senor property
        cssSensor_temp,     //css temperature sensor property
        cssSensor_eCO2,     //eCO2 css sensor property
        cssSensor_TVOC,     //TVOC css sensor property
        UV,                 //UV property
        accelX,             //acceleration X property
        accelY,             //acceleration Y property
        accelZ,             //acceleration Z property
        magneticX,          //magnetic X property
        magneticY,          //magnetic Y property
        magneticZ,          //magnetic Z property
        gyroX,              //gyro X property
        gyroY,              //gyro Y property
        gyroZ,              //gyro Z property
    ){
        //substanciate the time proprerty
        this.time_seconds = time_seconds;
        //substanciate the direction in latitude property
        this.latitude = latitude;
        //substanciate the direction in longitude property
        this.longitude = longitude;
        //substanciate the gps altitude property
        this.gps_altitude = gps_altitude;
        //subtanciate the bmp sensor altitude property
        this.bmpSensor_altitude = bmpSensor_altitude;
        //substanciate the bmp sensor pressure property
        this.bmpSensor_pressure = bmpSensor_pressure;
        //substanciate the bmp sensor temperature property
        this.bmpSensor_temp = bmpSensor_temp;
        //substanciate the digital sensor temperature property
        this.digSensor_temp = digSensor_temp;
        //substanciate the CSS sensor temperature property
        this.cssSensor_temp = cssSensor_temp;
        //substanciate the CSS sensor eCO2 property
        this.cssSensor_eCO2 = cssSensor_eCO2;
        //substanciate the CSS sensor TVOC property
        this.cssSensor_TVOC = cssSensor_TVOC;
        //substanciate the UV property
        this.UV = UV;
        //substanciate the acceleration in X property
        this.accelX = accelX;
        //substanciate the acceleration in Y property
        this.accelY = accelY;
        //substanciate the acceleration in Z property
        this.accelZ = accelZ;
        //substanciate the magnetic field in X property
        this.magneticX = magneticX;
        //substanciate the magnetic field in Y property
        this.magneticY = magneticY;
        //substanciate the magnetic field in Z property
        this.magneticZ = magneticZ;
        //substanciate the gyroscope in X property
        this.gyroX = gyroX;
        //substanciate the gyroscope in Y property
        this.gyroY = gyroY;
        //substanciate the gyroscope in Z property
        this.gyroZ = gyroZ;
    }
}

function getData(){                 //a function for geting the loadedData variable from loadData
    var loadedData = loadData();    //the variable loadedData is created by equaling the loadData value
    return loadedData;              //returns the variable loadedData so it could be used
}

//a function for organizing the data in rows from legend, value, and to units
function dataRow(legend, value, units){
    msg = "<td>";           //the value msg equals the output of "<td>"
    msg += legend;          //adds the value of msg to the legend variable
    msg += ": </td><td>";   //adds the value of msg to two outputs of "<td>"
    msg += value;           //adds the value of msg to the value variable
    msg += " " + units;     //adds the value of msg to the output of " " added by the variable of units
    msg += "</td>";         //adds the value of msg to the output of "</"
    return msg;
}

function updateDisplay() {
    console.log("updateDisplay() started");
    theTime = new Date();
    //test the time before showing
    //using special if statement for below 10 seconds, conditions ? do if true : do if false
    console.log(theTime.getHours() + ":" + 
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + 
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    //adding the screen time
    document.getElementById("clockTime").innerHTML = (theTime.getHours() + ":" + 
        (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + 
        (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));

    //time for table updating
    var timeRead = data[index].time_seconds;

    //starting table updates after 9 seconds
    if (timeRead > 9){
        //updating the first row named time_seconds
        document.getElementById("data").rows["time_seconds"].innerHTML = 
            dataRow("Time elapsed", data[index].time_seconds, "seconds");
        //updating the second row named latitude
        document.getElementById("data").rows["latitude"].innerHTML = 
            dataRow("Latitude", data[index].latitude, "");
        //updating the third row named longitude
        document.getElementById("data").rows["longitude"].innerHTML = 
            dataRow("Longitude", data[index].longitude, "");
        //updating the fourth row named gps altitude
        document.getElementById("data").rows["gps_altitude"].innerHTML = 
            dataRow("GPS altitude", data[index].gps_altitude, "");
        //updating the fifth row named bmp altitude
        document.getElementById("data").rows["bmp_altitude"].innerHTML = 
            dataRow("BMP altitude", data[index].bmpSensor_altitude, "");
        //updating the sixth row named bmp pressure
        document.getElementById("data").rows["bmp_pressure"].innerHTML = 
            dataRow("BMP pressure", data[index].bmpSensor_pressure, "");
        //updating the seventh row named bmp temperature
        document.getElementById("data").rows["bmp_temperature"].innerHTML = 
            dataRow("BMP temperature", data[index].bmpSensor_temp, "");
        //updating the eighth row named dig temperature
        document.getElementById("data").rows["dig_temperature"].innerHTML = 
            dataRow("Digital temperature", data[index].digSensor_temp, "");
        //updating the ninth row named css temperature
        document.getElementById("data").rows["css_temperature"].innerHTML = 
            dataRow("CSS temperature", data[index].cssSensor_temp, "");
        //updating the tenth row named css eco2
        document.getElementById("data").rows["css_eco2"].innerHTML = 
            dataRow("CSS eCO2", data[index].cssSensor_eCO2, "");
        //updating the eleventh row named css tvoc
        document.getElementById("data").rows["css_tvoc"].innerHTML = 
            dataRow("CSS TVOC", data[index].cssSensor_TVOC, "");
        //updating the twelth row named UV
        document.getElementById("data").rows["uv"].innerHTML = 
            dataRow("UV", data[index].UV, "");
        //updating the thirteenth row named acceleration x
        document.getElementById("data").rows["accelx"].innerHTML = 
            dataRow("Accelerometer X", data[index].accelX, "");
        //updating the fourteenth row named acceleration y
        document.getElementById("data").rows["accely"].innerHTML = 
            dataRow("Accelerometer Y", data[index].accelY, "");
        //updating the fifteenth row named acceleration z
        document.getElementById("data").rows["accelz"].innerHTML = 
            dataRow("Accelerometer Z", data[index].accelZ, "");
        //updating the sixteenth row named magnetic x
        document.getElementById("data").rows["magneticx"].innerHTML = 
            dataRow("Magnetic X", data[index].magneticX, "");
        //updating the seventeenth row named magnetic y
        document.getElementById("data").rows["magneticy"].innerHTML = 
            dataRow("Magnetic Y", data[index].magneticY, "");
        //updating the eighteenth row named magnetic z
        document.getElementById("data").rows["magneticz"].innerHTML = 
            dataRow("Magnetic Z", data[index].magneticZ, "");
        //updating the nineteenth row named gyro x
        document.getElementById("data").rows["gyrox"].innerHTML = 
            dataRow("Gyro X", data[index].gyroX, "");
        //updating the twenty row named gyro y
        document.getElementById("data").rows["gyroy"].innerHTML = 
            dataRow("Gyro Y", data[index].gyroY, "");
        //updating the twenty first row named gyro z
        document.getElementById("data").rows["gyroz"].innerHTML = 
            dataRow("Gyro Z", data[index].gyroZ, "");
    }
    //movesindex to the next number unless we run out over 500, then it updates to 0
    if(index < 500){    //if the variable index is less than 500 then add one
        index++;
    } else {            //other wise the variable index equals 0
        index = 0;
    }
}
