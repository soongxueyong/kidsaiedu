
var canvas, ctx, saveButton, clearButton;
var pos = {x:0, y:0};
var rawImage;
// var model;
init()
var trained = false

function getModel() {
	return model;
}


function setPosition(e){
    // pos.x = e.clientX-200;
    // pos.y = e.clientY-10;
	var canvasBox = canvas.getBoundingClientRect(); //获取canvas元素的边界框
	pos.x = (e.clientX - canvasBox.left)*(canvas.width/canvasBox.width), //对canvas元素大小与绘图表面大小不一致时进行缩放
	pos.y = (e.clientY - canvasBox.top)*(canvas.height/canvasBox.height)
}
    
	
function draw(e) {
    if(e.buttons!=1) return;
    ctx.beginPath();
    ctx.lineWidth = 24;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'white';
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    rawImage.src = canvas.toDataURL('image/png');
}
    
function erase() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,280,280);
}
    
function classify() {
    var raw = tf.browser.fromPixels(rawImage,1);
    var resized = tf.image.resizeBilinear(raw, [28,28]);
    var tensor = resized.expandDims(0);
    
    var prediction = model.predict(tensor);
    var pIndex = tf.argMax(prediction, 1).dataSync();
    
    var classNames = ["0", "1", "2", 
                      "3", "4", "5", "6",
                      "7",  "8", "9"];
            
            
    alert(classNames[pIndex]);
}
    
function init() {
    canvas = document.getElementById('canvas');
    rawImage = document.getElementById('canvasimg');
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,280,280);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mousedown", setPosition);
    canvas.addEventListener("mouseenter", setPosition);
    saveButton = document.getElementById('sb');
	saveButton.hidden = true;
    saveButton.addEventListener("click", classify);
    clearButton = document.getElementById('cb');
    clearButton.addEventListener("click", erase);
	clearButton.hidden = true;
}



