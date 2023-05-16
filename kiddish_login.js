document.getElementById("textbox").innerHTML = ""; 
function mic(){

  document.getElementById("textbox").innerHTML = "";  

var synth = window.speechSynthesis;

speak_data = "What is your Name";

var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);
setTimeout(function()
    { 
      recognition.start();
    }, 1000);

  
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

  recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
     
}
}


function addUser() {

  user_name = document.getElementById("textbox").value;


  localStorage.setItem("user_name", user_name);
  if(user_name != ""){
    window.location = "kiddish_room.html";
  }
  else{
    document.getElementById("textbox").innerHTML = "Say your name";
  }
  
    
}

