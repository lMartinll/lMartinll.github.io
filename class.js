    //below is the class for a shape
class Shape{
    //below is a constructor that initializes the objects of the class
    constructor(
        numSides,   //the shapes number of sides is given here
        numCorners, //the shapes number of corners is given here
        color       //the shapes color is given here
    ){  //we need to substanciate. below are properties for the class above
        this.numSides = numSides;       //properties for number of sides
        this.numCorners = numCorners;   //properties for number of corners
        this.color = color;             //properties for color
    }
    //methods
    rotate(deg){    //rotate method
        console.log("rotate this shape " + deg + " number of degrees"); //console logs the rotation of a shap in degrees
    }
}
    //below is the class for the rectangle relating to the rectangle of the table
class Rectangle {
    constructor(
        lengthX,    //length of x axis side of rectangle
        lengthY,    //length of y axis side of rectangle
        posX,       //x coordinate for center of rectangle
        posY        //x coordinate for center of rectangle
    ){  //we need to substanciate
        this.lengthX = lengthX;     //sets the value of object lengthX to the property of lengthX
        this.lengthY = lengthY;     //sets the value of object lengthY to the property of lengthY
        this.posX = posX;   //sets the value of object posX to the property of posX
        this.posY = posY;   //sets the value of object posY to the property of posY
    }
    //methods
    calcArea(){     //a method for calculating area
        console.log("calcArea started");    //logs the initialization of calcArea inside of the console
        area = lengthX, lengthY;            //defines the area which is given by the length of X and Y
        return area;                        //passes back the value of area
    }

    calcPeri(lengthX, lengthY){     //a method for calculating perimeter, the length of X and Y are included
        console.log("calcPeri started");    //logs the initialization of calcPeri inside of the console
        peri = 2*(lengthX + lengthY);       //gives a value to peri by multiplying the added length of X and Y by 2
        return peri;                        //passes back the value of peri
    }

}

function smSArea(){     //a function for a small area
    console.log("smSArea() started");   //logs the start of the smSArea() function
    var smarea = smSquare.calcArea();   //creates the variable smarea which equals the value of smSquare and calcArea
    console.log(smarea);                //logs the value of smarea into the console
}