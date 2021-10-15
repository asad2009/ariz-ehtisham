Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 100
});
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="Caputeredimage" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dkuah9Her/model.json',modelLoaded);
function modelLoaded(){

}