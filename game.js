window.onload=function(){
    document.addEventListener("keydown", keyPush);
    setInterval(gameStart, 1000/10);
};

let px, py, gs, tc, trail, xv, yv, tail, ax, ay, score;
py=px=5;
ax=ay=10;
gs=tc=20;
trail = [];
xv=yv=0;
tail = 5;

function gameStart(){
    const gameArea = document.getElementById("gameScreen");
    let ctx = gameArea.getContext("2d");
    let score = tail-5;
    document.getElementById('score').innerHTML = 'Score: ' + score;

    px+= xv;
    py+= yv;

    if(px<0){
        px = tc - 1;
    }
    if(px>tc-1){
        px = 0;
    }
    if(py<0){
        py = tc - 1;
    }
    if(py>tc-1){
        py = 0;
    }

    trail.push({x:px, y:py});
    while(trail.length>tail){
        trail.shift();
    }

    // Game screen
    ctx.fillStyle="#23480d";
    ctx.fillRect(0,0, gameArea.width, gameArea.height);


    // Snake
    ctx.fillStyle='lime';
    for(let i=0; i<trail.length; i++){
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);
        // if(trail[i].x==px && trail[i].y==py){
        //     tail=2;
        // }
    }

    // an apple
    ctx.fillStyle='red';
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);

    // if eat an apple
    if(ax==px && ay==py){
        tail++
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
}

function keyPush(evt){
    switch(evt.keyCode){
        case 37:
            xv=-1; yv= 0;
            break;
        case 38:
            xv=0; yv= -1;
            break;
        case 39:
            xv=1; yv= 0;
            break;
        case 40:
            xv=0; yv= 1;
            break;
    }
}



