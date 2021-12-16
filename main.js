//https://teachablemachine.withgoogle.com/models/Quu_rypjZ/




Webcam.set({
    width:351,
    height:301,
    image_format:"png",
    png_quality:91
});

camera= document.getElementById("camera");

Webcam.attach("#camera");


function takepic()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>'; 
});

};
console.log('ml5 version:',ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Quu_rypjZ/model.json',modelLoaded);

function modelLoaded()
{
console.log("model is loaded... YAY!!");
}


function check()
{
img=document.getElementById('capture_image');
classifier.classify(img, gotResult);

}


function gotResult(error, results)
{
    if (error){
        console.error(error) ;
    } else{
        console.log (results);
        document.getElementById("objectname").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
