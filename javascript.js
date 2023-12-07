//console.log("bop");
var xSnakePos = [4,4,4];
var ySnakePos = [6,7,8];
var xSnakePosOld = [4,4,4];
var ySnakePosOld = [6,7,8];

var xApple = [4];
var yApple = [2];

var lost = false;

var xSadFace = [3,5,3,5,2,3,4,5,6];
var ySadFace = [2,2,3,3,6,5,5,5,6];

var keyInput = '';
setTimeout(updateSnakeDisplay, 1000);




document.addEventListener('keydown', (event) => 
{
    if(event.code == 'KeyW' && keyInput != 'KeyS')
    {
        keyInput = 'KeyW';
    }
    else if(event.code == 'KeyA' && keyInput != 'KeyD')
    {
        keyInput = 'KeyA';
    }
    else if(event.code == 'KeyS' && keyInput != 'KeyW')    
    {
        keyInput = 'KeyS';
    }
    else if(event.code == 'KeyD' && keyInput != 'KeyA')    
    {
        keyInput = 'KeyD';
    }
});

function updateSnakeDisplay()
{
    //reset button

    document.querySelector('#restart-snake') .addEventListener('click', e => { 
        xSnakePos = [4,4,4];
        ySnakePos = [6,7,8];
        xSnakePosOld = [4,4,4];
        ySnakePosOld = [6,7,8];

        xApple = [4];
        yApple = [3];

        lost = false;

        keyInput = ''; 
    }) 




    if(!lost)
    {
    var inGrid = '';

    xSnakePosOld = xSnakePos;
    ySnakePosOld = ySnakePos;
    //sends screen to id of draw-grid
    //document.getElementById("draw-grid").innerHTML = inGrid;
    //input and direction code
    if(keyInput == 'KeyW')
    {
        ySnakePos.unshift(ySnakePosOld[0]-1);
        xSnakePos.unshift(xSnakePosOld[0]);
    }
    if(keyInput == 'KeyA')
    {
        xSnakePos.unshift(xSnakePosOld[0]-1);
        ySnakePos.unshift(ySnakePosOld[0]);
    }
    if(keyInput == 'KeyS')
    {
        ySnakePos.unshift(ySnakePosOld[0]+1);
        xSnakePos.unshift(xSnakePosOld[0]);
    }
    if(keyInput == 'KeyD')
    {
        xSnakePos.unshift(xSnakePosOld[0]+1);
        ySnakePos.unshift(ySnakePosOld[0]);
    }

    //lost mechanics
    if(xSnakePos[0] < 0 || xSnakePos[0] > 8 || ySnakePos[0] < 0 || ySnakePos[0] > 8)
    {
        lost = true;
    }
    else
    {
        for(var selfHarm = 1; selfHarm < xSnakePos.length-1; selfHarm++)
        {
            if(xSnakePos[0] == xSnakePos[selfHarm] && ySnakePos[0] == ySnakePos[selfHarm])
            {
                lost = true;
            }
        }
    }

    //apple eating and relocation
    //clears tail
    if(keyInput != '')
    {
        ySnakePos.pop();
        xSnakePos.pop();
    if(xSnakePos[0] == xApple[0] && ySnakePos[0] == yApple[0])
    {
        xSnakePos.push(xSnakePosOld[xSnakePosOld.length - 1]);
        ySnakePos.push(ySnakePosOld[ySnakePosOld.length - 1]);        
        
       
        for(var appleSpotAvail2 = 0; appleSpotAvail2 < xSnakePos.length; appleSpotAvail2++)
        {
            for(var appleSpotAvail = 0; appleSpotAvail < xSnakePos.length; appleSpotAvail++)
            {
                for(var snakeBodyTest = 0; snakeBodyTest < xSnakePos.length; snakeBodyTest++)
                {

                    if(xApple[0] == xSnakePos[snakeBodyTest] && yApple[0] == ySnakePos[snakeBodyTest])
                    {
                        xApple[0] = Math.round(Math.random() * (8 - 0));
                        yApple[0] = Math.round(Math.random() * (8 - 0));
                        appleSpotAvail = 0;
                        appleSpotAvail2 = 0;
                        snakeBodyTest = 0;
                    }
                
                }
            }
        }
    }
    }
    
    



    for(var y = 0; y < 9; y++)
    {
        for(var x = 0; x < 9; x++)
        test1: {
            //prints snake
            for(var showSnake = 0; showSnake < xSnakePos.length; showSnake++)
            {   
                if(x == xSnakePos[showSnake] && y == ySnakePos[showSnake])
                {
                    inGrid = inGrid +'<div class="draw-box-player"></div>';
                    break test1;
                }
            }
            if(x == xApple && y == yApple)
            {
                inGrid = inGrid +'<div class="draw-box-apple"></div>';
            }
            //prints blank
            else if(true)
            {
                inGrid = inGrid +'<div class="draw-box"></div>';
            }
            
        }
        
    }
    
    

    

    document.getElementById("draw-grid").innerHTML = inGrid;

    //setTimeout(updateSnakeDisplay, 200);
    
    }

    if(lost)
    {
        inGrid = '';
        for(var y = 0; y < 9; y++)
        {
            
            for(var x = 0; x < 9; x++) 
            test1: {
                //prints snake
                for(var sad = 0; sad < xSadFace.length; sad++)
                {   
                    if(x == xSadFace[sad] && y == ySadFace[sad])
                    {
                        inGrid = inGrid +'<div class="draw-box-apple"></div>';
                        break test1;
                    }
                }
                inGrid = inGrid +'<div class="draw-box"></div>';
                
            } 
            
        }
        document.getElementById("draw-grid").innerHTML = inGrid;
        //setTimeout(updateSnakeDisplay, 200);
    }
    setTimeout(updateSnakeDisplay, 200);
}

