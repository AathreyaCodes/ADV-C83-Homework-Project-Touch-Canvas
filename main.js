canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width = 10;

MouseEvent = "empty";

canvas.addEventListener("mousedown", myMouseDown)

function myMouseDown() {
    color = document.getElementById("c").value;
    width = document.getElementById("w").value;

    MouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(){
    MouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(){
    MouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", myMouseMove)
function myMouseMove(e){

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if(MouseEvent == "mouseDown"){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;

            console.log("Last position of X and Y coordinates were: " + last_position_of_x + ", " + last_position_of_y)
            ctx.moveTo(last_position_of_x, last_position_of_y)

            console.log("Current position of X and Y coordinates are: " + current_position_of_mouse_x + ", " + current_position_of_mouse_y)
            ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
            ctx.stroke();
        }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;

}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e){
    console.log("myTouchmove")
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("Last position of X and Y coordinates:");
    console.log("X= " + last_position_of_x + " and Y= " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of X and Y coordinates:");
    console.log("x= " + current_position_of_touch_x + " and y= " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}