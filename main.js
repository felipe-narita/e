var canvas = new fabric.Canvas('myCanvas');


playerX = 10;
playerY = 10;


blockImageWidth = 30;
blockImageHeight = 30;


var playerObject= "";
var blockImageObject= "";


function playerUpdate()
{
    fabric.Image.fromURL("player.png", function(Img) {
    playerObject = Img;


    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
    top:playerY,
    left:playerX
    });
    canvas.add(playerObject);


    });
}


function newImage(getImage)
{
    fabric.Image.fromURL(getImage, function(Img) {
    blockImageObject = Img;


    blockImageObject.scaleToWidth(blockImageWidth);
    blockImageObject.scaleToHeight(blockImageHeight);
    blockImageObject.set({
    top:playerY,
    left:playerX
    });
    canvas.add(blockImageObject);


    });


}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftkey == true && keyPressed =='80')
    {
        console.log("p e shift pressionadas juntas");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeigh").innerHTML = blockImageHeight;
        }
        if(e.shiftkey && keyPressed == '77')
        {
            console.log("m e shift pressionadas juntas");
            blockImageWidth = blockImageWidth - 10;
            blockImageHeight = blockImageHeight - 10;
            document.getElementById("currentWidth").innerHTML = blockImageWidth;
            document.getElementById("currentHeight").innerHTML = blockImageHeight;
        }

        if(keyPressed == '38' )
        {
            up();
            console.log("cima");
        }
        if(keyPressed == '40' )
        {
            up();
            console.log("baixo");
        }
        if(keyPressed == '37' )
        {
            up();
            console.log("esquerda");
        }
        if(keyPressed == '39' )
        {
            up();
            console.log("direita");
        }
        if(keyPressed == '87' )
        {
            newImage('wall.jpg');
            console.log("w");
        }
        if(keyPressed == '71' )
        {
            newImage('ground.png');
            console.log("g");
        }
        if(keyPressed == '76' )
        {
            newImage('light_green.png');
            console.log("l");
        }
        if(keyPressed == '84' )
        {
            newImage('trunk.jpg');
            console.log("t");
        }
        if(keyPressed == '82' )
        {
            newImage('roof.jpg');
            console.log("r");
        }
        if(keyPressed == '89' )
        {
            newImage('yellow_wall.png');
            console.log("y");
        }
        if(keyPressed == '68' )
        {
            newImage('dark_green.png');
            console.log("d");
        }
        if(keyPressed == '85' )
        {
            newImage('unique.png');
            console.log("u");
        }
        if(keyPressed == '67' )
        {
            newImage('cloud.jpg');
            console.log("c");
        }

}

function up()
{
    if(playerY >=0)
    {
        playerY = playerY - blockImageHeight;
    
        console.log("Quando a tecla direcional Cima for pressionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
        }
}
function down()
{
    if(playerY <=500)
    {
        playerY = playerY + blockImageHeight;
    
        console.log("Quando a tecla direcional Cima for pressionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
        }
}
function left()
{
    if(playerX >0)
    {
        playerX = playerX - blockImageWidth;
    
        console.log("Quando a tecla direcional Cima for pressionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
        }
}
function right()
{
    if(playerY <=850)
    {
        playerX = playerY + blockImageHeight;
    
        console.log("Quando a tecla direcional Cima for pressionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
        }
}


