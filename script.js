const text = "Frontend Developer";
let index = 0;

function typeEffect() {

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);
    }
}

typeEffect();

function showAbout(){

    document.getElementById("about").scrollIntoView({
        behavior:"smooth"
    });

}