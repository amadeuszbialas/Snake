let px, py, gs, trail, xv, yv, tail, appleX, appleY, message, start, speed;

document.addEventListener("keydown", keyPush);

speed = 70;
setInterval(gameStart, speed);
py=px=10;
gs=20;
appleX=Math.floor(Math.random()*gs);
appleY=Math.floor(Math.random()*gs);
trail = [];
xv=yv=0;
tail = 5;
message = 'Last scores: <br><br>';


function gameStart(){
    let scoreArr =[];
    let score = tail - 5;
    const gameArea = document.getElementById("gameScreen");
    let ctx = gameArea.getContext("2d");
    document.getElementById('score').innerHTML = 'Score: ' + score;

    px+= xv;
    py+= yv;

    // // Next level
    // if(score == 2){
    //     this.speed = 40;
    // }

    //Game over if hit border
    if(px<0 || px>gs-1 || py<0 || py>gs-1){
        gameOver();
    }

    // Game screen
    ctx.fillStyle="#001184";
    ctx.fillRect(0,0, gameArea.width, gameArea.height);

    // Snake
    ctx.fillStyle='lime';
    for(let i=0; i<trail.length; i++){
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);

        //Game over if eat yourself
         if(trail[i].x==px && trail[i].y==py && start == true ){
            gameOver();
         }
    }

    trail.push({x:px, y:py});
    while(trail.length>tail){
        trail.shift();
    }

    // an apple
    ctx.beginPath();
    ctx.arc(appleX*gs+10, appleY*gs+10, 10, 0, Math.PI * 2, false)
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();

    // if eat an apple
    if(appleX==px && appleY==py){
        tail++;
        appleX=Math.floor(Math.random()*gs);
        appleY=Math.floor(Math.random()*gs);

        for(let j=0; j<trail.length; j++){
            if(appleX == trail[j].x && appleY == trail[j].y){
                appleX=Math.floor(Math.random()*gs);
                appleY=Math.floor(Math.random()*gs);
            }
        }
    }

    function gameOver(){
        let d;
        py=px=10;
        xv=yv=0;
        tail = 5;
        start = false;
        d = new Date();
        scoreArr.push('Score: '+score+' - '+ d.toUTCString());
        //score = tail - 5;
        for(let k=0; k<scoreArr.length; k++){
            message += scoreArr[k] + '<br>';
        }
        document.getElementById('lastScores').style.display = 'block';
        document.getElementById('lastScores').innerHTML = message;
    }
}

function keyPush(evt){
    document.getElementById('gameScreen').style.marginTop = '0px';
    switch(evt.keyCode){

        case 37:
            xv=-1; yv= 0;
            start = true;
            break;
        case 38:
            xv=0; yv= -1;
            start = true;
            break;
        case 39:
            xv=1; yv= 0;
            start = true;
            break;
        case 40:
            xv=0; yv= 1;
            start = true;
            break;
    }
}



