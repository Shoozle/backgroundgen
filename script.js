var css = document.querySelector("h3");
var color1 = document.querySelector(".colour1");
var color2 = document.querySelector(".colour2");
var body = document.getElementById("gradient");
var randbtn = document.querySelector(".randbtn");

function setGradient(){
        body.style.background = "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    
        css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient); //Don't need the () cos function gets called with the event automatically

randbtn.addEventListener("click", function(){
    color1.value = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    color2.value = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    setGradient();
});