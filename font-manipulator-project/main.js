var leftWristx = 0;
var rightWristx = 0;
var difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
   
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}



function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        console.log("rightWristx" + rightWristx + "leftWristx" + leftWristx);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor (leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }

    }

    function draw()
{
    background ('#00FFF9');
    textSize(difference);
    fill('#4b0082');
    text("Zara",50 , 400)

}