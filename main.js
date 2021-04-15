Webcam.set({
width:250,
height:300,
image_format:'png',
png_quality:100
});
view=document.getElementById("live")
Webcam.attach("live");
function picture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/[...]model.json")