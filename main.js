canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
car_images_array=["AAAAAAAAAAHHHHHHHHHHHHHHH.jpg"];
random_number=Math.floor(Math.random()*1);
console.log(random_number);
rover_width=100;
rover_height=90;
background_image=car_images_array[random_number];
car_image="AAAAAAAAAAHHHHHHHHHHHHHHH.jpg.png";
car_x=10;
car_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onloag=uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag=new Image;
    car_imgTag.onload=uploadrover;
    car_imgTag.src=downloadf.jpg;

}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(car_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
}
function up()
{
    if(rover_y>=0)
    {
        car_y=car_y-10;
        console.log("When up arrow is pressed =" + car_x+"-"+car_y);
        uploadBackground();
        uploadcar();
    }

    function down()
{
    if(car_y<=500)
    {
        car_y=car_y-10;
        console.log("When down arrow is pressed, x=" + car_x+"| y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function left()
{
    if(car_x>=0)
    {
        car_x=car_x-10;
        console.log("When left arrow is pressed, x= " + car_x+"| y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
function right()
{
    if(car_x<=700)
    {
        car_x=car_x+10;
        console.log("When right arrow is pressed, x= " + car_x+"| y="+car_y);
        uploadBackground();
        uploadcar();
    }
}
}