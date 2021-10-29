var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start(){
    document.getElementById("textBox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("textBox").innerHTML = content
    if(content == "take my selfie."){
        speak()
    }
}

function speak(){
    var synth = window.speechSynthesis
    speak_data = "Taking your selfie in 2000 years. Wait Please!"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
    Webcam.attach(camera)
    setTimeout(function(){
        take_selfie();
        save();
    },5000);
}

camera = document.getElementById("camera")

Webcam.set({
    width:1000,
    height:1200,
    image_format:'png',
    png_quality:90
});


function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie_imge" src = "'+data_uri+'"/>';
    });
}

function save(){
    link = document.getElementById("link")
    image = document.getElementById("selfie_image").src
    link.href = image
    link.click();
}