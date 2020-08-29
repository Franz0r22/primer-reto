 function visualiza_segundo() {
    document.getElementById('john').style.visibility='visible';
    document.getElementById('john').style.display='block';
    document.getElementById('john-text').style.visibility='visible';
    document.getElementById('john-text').style.display='block';
    document.getElementById('john-title').style.visibility='visible';
    document.getElementById('john-title').style.display='block';
    document.getElementById('tanya').style.visibility='hidden';
    document.getElementById('tanya').style.display='none';
    document.getElementById('tanya-text').style.visibility='hidden';
    document.getElementById('tanya-text').style.display='none';
    document.getElementById('tanya-title').style.visibility='hidden';
    document.getElementById('tanya-title').style.display='none';
 };

 function visualiza_primero() {
    document.getElementById('tanya').style.visibility='visible';
    document.getElementById('tanya').style.display='block';
    document.getElementById('tanya-text').style.visibility='visible';
    document.getElementById('tanya-text').style.display='block';
    document.getElementById('tanya-title').style.visibility='visible';
    document.getElementById('tanya-title').style.display='block';
    document.getElementById('john').style.visibility='hidden';
    document.getElementById('john').style.display='none';
    document.getElementById('john-text').style.visibility='hidden';
    document.getElementById('john-text').style.display='none';
    document.getElementById('john-title').style.visibility='hidden';
    document.getElementById('john-title').style.display='none';
 }

 document.body.onkeydown = function(event) {
      if(event.keyCode == 39) {
         visualiza_segundo();
   }  else if (event.keyCode == 37){
         visualiza_primero();
   }
}



 //document.body.addEventListener("keydown", visualiza_segundo);