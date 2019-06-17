var display = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var result = document.querySelector("#reload");
var squaresArray = Array.from(squares);
var easy = document.querySelector("#difficulty_easy");
var hard = document.querySelector("#difficulty_hard");
var newcolors = document.querySelector("#context");
var difficulty = 3;
easy.classList.add("active");
var res;

function newColors(){
    res = Math.floor(Math.random()*difficulty);
    for(var i =0 ; i < difficulty; i++){
        var red = Math.floor(Math.random()*256);
        var green = Math.floor(Math.random()*256);
        var blue = Math.floor(Math.random()*256);
        if(i == res)
            display.textContent = `RGB(${red},${green},${blue})`;
        squares[i].style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 1)`;
    }

    for(var i = difficulty; i< 6; i++){
        squares[i].setAttribute("visibility","hidden");
    }
}

function check(a){
    if(squaresArray.indexOf(a) == res){
        console.log("Yep,right!");
        result.textContent = "You Win";
    }
    else{
        console.log("Nope");
        result.textContent = "You Lose";
    }
    console.log(`index : ${squaresArray.indexOf(a)} , res : ${res}`);
    newColors();
}
// In a loop, the value of i is not the value it had when the listener was added, 
//but the value it has when the listener is executed. When the listener is executed, the loop has already ended, 
//so the value of i will be the value it had when the loop ended
newColors();
for(var i =0 ; i< 6; i++){
    squaresArray[i].addEventListener("click",function(){
        check(this);
    });
}

easy.addEventListener("click",function(){
    easy.classList.add("active");
    hard.classList.remove("active");
    difficulty = 3; 
    newColors();
});

hard.addEventListener("click",function(){
    hard.classList.add("active");
    easy.classList.remove("active");
    difficulty = 6;
    newColors(); 
});

newcolors.addEventListener("click",function(){
    newColors();
});

newcolors.addEventListener("mouseenter",function(){
    newcolors.classList.toggle("hovercolor");
});

newcolors.addEventListener("mouseout",function(){
    newcolors.classList.toggle("hovercolor");
});