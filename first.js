
score =0;
cross =true;

audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");

setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode===38){
        dino =document.querySelector(".dino");
        dino.classList.add("animatedino");
        setTimeout(() => {
            dino.classList.remove("animatedino")


            
        }, 700);
    }
    if(e.keyCode===39){
        dino =document.querySelector(".dino");
        
    dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left = dinox+122+"px";

            
        }
        
    if(e.keyCode===37){
        dino =document.querySelector(".dino");
        
    dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left = (dinox-122)+"px";

            
        }
}

setInterval(() => {
    dino = document.querySelector(".dino");
    gameover = document.querySelector(".gameover");
    
    obstacle = document.querySelector(".obstacle");



    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));


    
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));


    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    console.log(offsetX,offsetY)
    if(offsetX< 93 && offsetY<52){
        gameover.style.visibility = "visible"
        obstacle.classList.remove("obstacleani")
        audio.play();
        setTimeout(() => {
            audiogo.pause()
            audio.pause()
            
        }, 1000);
    }
    else if( 
        offsetX<145 && cross){
        score+=1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
        
    

}, 10);
function updatescore(score){
    scorecount.innerHTML = "your score" + score
}
    