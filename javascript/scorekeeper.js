var p1but = document.querySelector("#p1");
var p2but = document.querySelector("#p2");
var resetbutton = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numinput = document.querySelector("input");
var winscoredisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var winscore = 5;
var gameover = false;

p1but.addEventListener("click", function() {
    if(!gameover){
    p1score++;
        if(p1score === winscore) {
           //p1display.style.color= "green";
            p1display.classList.add("winner");
            gameover=true;
        }
    p1display.textContent = p1score;   
}});

p2but.addEventListener("click", function(){
    if(!gameover){
    p2score++; 
    if(p2score === winscore){
        p2display.classList.add("winner");
        gameover = true;
    }
    p2display.textContent = p2score;  
}
});
resetbutton.addEventListener("click" , function(){
    reset();
});

function reset(){
    p1score=0;
    p2score=0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
}
numinput.addEventListener("change", function(){
    winscoredisplay.textContent = numinput.value;
    winscore = Number(numinput.value);
    reset();  
});