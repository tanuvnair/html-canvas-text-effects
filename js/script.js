window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");

    // To set canvas width and height
    // Do not set with CSS as it will strech out your canvas and distort your drawing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});