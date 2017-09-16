
    window.onload=function(){

        const gameArea = document.getElementById("gameScreen");
        let ctx = gameArea.getContext("2d");
        document.addEventListener("keydown", keyPush);
        setInterval(game, 1000/15);
    }

    let px, py, gs, tc, xv, yv;
    px=py=10;
    gs=tc=20;
    xv=yv=0;

    function game(){
        px+= xv;
        py+= yv;
        ctx.fillStyle="black";
       // ctx.fillRect(0,0, gameArea.width, gameArea.height);

    }

    function keyPush(evt){
        switch(evt.keyCode){
            case 37:
                xv=-1; yv= 0;
                console.log('lewo');
                break;
            case 38:
                xv=0; yv= -1;
                console.log('gora');

                break;
            case 39:
                xv=1; yv= 0;
                console.log('prawo');

                break;
            case 40:
                xv=0; yv= 1;
                console.log('dol');

                break;
        }
    }


