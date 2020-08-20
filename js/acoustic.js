var divlength = document.querySelectorAll('.song').length;
console.log(divlength);

for(var i=0; i<divlength; i++) {
 var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);
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
   if(song1.paused)
      {song1.play();
        song2.pause();
        song3.pause();
        song4.pause();
        song5.pause();
        song6.pause();
      }
      else
      song1.pause();
         
   break;

  case "SPEAK NOW":
    if(song2.paused)
    {song2.play();
      song1.pause();
      song3.pause();
      song4.pause();
      song5.pause();
      song6.pause();}
    else
    song2.pause();
   break;

  case "RED":
    if(song3.paused)
    {song3.play();
      song2.pause();
      song1.pause();
      song4.pause();
      song5.pause();
      song6.pause();}
    else
    song3.pause();
   break;

  case "1989":
    if(song4.paused)
    {song4.play();
      song2.pause();
      song3.pause();
      song1.pause();
      song5.pause();
      song6.pause();}
    else
    song4.pause();
   break;

  case "REPUTATION":
    if(song5.paused)
    {song5.play();
      song2.pause();
      song3.pause();
      song4.pause();
      song1.pause();
      song6.pause();}
    else
    song5.pause();
   break;

  case "LOVER":
    if(song6.paused)
    {song6.play();
      song2.pause();
      song3.pause();
      song4.pause();
      song5.pause();
      song1.pause();}
    else
    song6.pause();
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

