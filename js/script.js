window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");

    // To set canvas width and height
    // Do not set with CSS as it will strech out your canvas and distort your drawing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, canvas.height);
    ctx.stroke();

    const text = "Helloyy!";
    const textX = canvas.width/2;
    const textY = canvas.height/2;
    
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 2;

    ctx.font = '80px Arial';

    // start, center, end
    ctx.textAlign = "center";

    // has top, middle, bottom, ideographic
    ctx.textBaseline = 'ideographic';

    ctx.fillText(text, textX, textY);
    ctx.strokeText(text, textX, textY);
});