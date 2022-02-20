song = "";

function preload()
{
    song = loadSound("music.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rigthWristX = 0;
rigthWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = m15.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
fuction gotPoses(results)
{
    if(results.length > 0)
        {
            scoreRigthWrist = resuls[0].pose.keypoints[10].score;
            scoreLeftWrist = resuls[0].pose.keypoints[9].score;
            console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
            
            rigthWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rigthWrist.y;
            console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
            
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;                        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

        }
}