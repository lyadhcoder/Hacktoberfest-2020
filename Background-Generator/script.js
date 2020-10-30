var css = document.querySelector("h3");
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.querySelector("body");
var randomButton = document.getElementById("random");
var randomBlue = document.getElementById("randomblue");
var randomGreen = document.getElementById("randomgreen");
var randomRed = document.getElementById("randomred");

var leftValue, rightValue;

randomizeColors();

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function generateRandomColors(cor) {
    do{
		leftValue = {
			r: Math.floor(Math.random() * 255),
			g: Math.floor(Math.random() * 255),
			b: Math.floor(Math.random() * 255)
		};
		rightValue = {
			r: Math.floor(Math.random() * 255),
			g: Math.floor(Math.random() * 255),
			b: Math.floor(Math.random() * 255)
		};
		tomcorreto=false;
		if(!cor) tomcorreto=true;
		if(cor == 'blue' && leftValue.b > leftValue.r + 80 && leftValue.b > leftValue.g + 80 && rightValue.b > rightValue.r + 80 && rightValue.b > rightValue.g + 80) tomcorreto=true;
		if(cor == 'red' && leftValue.r > leftValue.b + 80 && leftValue.r > leftValue.g + 80 && rightValue.r > rightValue.b + 80 && rightValue.r > rightValue.g + 80) tomcorreto=true;
		if(cor == 'green' && leftValue.g > leftValue.r + 80 && leftValue.g > leftValue.b + 80 && rightValue.g > rightValue.r + 80 && rightValue.g > rightValue.b + 80) tomcorreto=true;
	}while(!tomcorreto);
}

function rgbToHex(rgb) {
    return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
  }

function randomizeColors(cor) {
    generateRandomColors(cor);
    body.style.background =
        "linear-gradient(to right, rgb("
        + leftValue.r + ", " + leftValue.g + ", " + leftValue.b
        + "), rgb("
        + rightValue.r + ", " + rightValue.g + ", " + rightValue.b
        + ")";
    css.textContent = body.style.background + ";";

    // Change inputs
    color1.value = rgbToHex(leftValue);
    color2.value = rgbToHex(rightValue);
}

randomButton.addEventListener("click", function(){randomizeColors('');});
randomBlue.addEventListener("click", function(){randomizeColors('blue');});
randomGreen.addEventListener("click", function(){randomizeColors('green');});
randomRed.addEventListener("click", function(){randomizeColors('red');});

 // Show initial values
css.textContent = body.style.background + ";";


