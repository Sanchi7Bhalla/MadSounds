var divlength = document.querySelectorAll('.song').length;
console.log(divlength);

for(var i=0; i<divlength; i++) {
 var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);
 var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1 = new Audio();
song1.src = "music/1.mp3";

var song2 = new Audio();
song2.src = "music/2.mp3";

var song3 = new Audio();
song3.src = "music/3.mp3";

var song4 = new Audio();
song4.src = "music/4.mp3";

var song5 = new Audio();
song5.src = "music/5.mp3";

var song6 = new Audio();
song6.src = "music/6.mp3";

function playsong()
{
 var songId = this.innerHTML;
 console.log(songId); 
 switch (songId) {
  case "FEARLESS":
   song1.play();
   break;

  case "SPEAK NOW":
   song2.play();
   break;

  case "RED":
   song3.play();
   break;

  case "1989":
   song4.play();
   break;

  case "REPUTATION":
   song5.play();
   break;

  case "LOVER":
   song6.play();
   break;

  default:
   console.log("wrong input");
   break;
 }
}

function pausesong(){
 var songId = this.innerHTML;
 console.log(songId);

 switch (songId) {
  case "FEARLESS":
   song1.pause();
   break;

  case "SPEAK NOW":
   song2.pause();
   break;

  case "RED":
   song3.pause();
   break;

  case "1989":
   song4.pause();
   break;

  case "REPUTATION":
   song5.pause();
   break;

  case "LOVER":
   song6.pause();
   break;

  default:
   console.log("wrong input");
   break;
 }
}

