function setup(){
cam = createCapture(VIDEO);
    cam.size(500,500);
    canvas = createCanvas(500,500);
    poseNet = ml5.poseNet(cam, modelload);
    poseNet.on('pose', gotposes);
}
function modelload() {console.info("Pose Net Ready");}
function gotposes(results) {
    if (results.length > 0) {
        console.log("results");
    }
}
function draw() {
    background('#969A97');
}