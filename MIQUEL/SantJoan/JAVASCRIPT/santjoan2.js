function augmentarNumEstrelles(){
  let augmentarNumEstrelles= document.getElementsByClassName("numEstrelles")[0].value;
  localStorage.setItem("stars",augmentarNumEstrelles);
  let estrelles = localStorage.getItem('stars');
  document.getElementsByClassName("val")[0].innerHTML=estrelles;
}

function dibuixar(){
    let randomColor=getRandomColor();
    let numEstrelles=parseInt(localStorage.getItem('Estrelles'));
    let radi=parseInt(localStorage.getItem('Radi'));
    /*let distanciaMin=localStorage.getItem('Distancia');
  */   
    let c = document.getElementById("blackscreen");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    for(var i=0;i<numEstrelles;i++){
      var cx=Math.random()*c.width;
      var cy=Math.random()*c.height;
      ctx.moveTo(cx,cy);
      ctx.arc(cx,cy,radi,0,Math.PI*2);
    }
    let opacitat=Math.random()*1;
    ctx.fillStyle=randomColor;
    ctx.fill(); 
  }

  function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    if (color=='#000000'){
      return false;
    }else{
    return color;
    }
}

  function tornar(){
    location.href="../HTML/SantJoan.html"
  }
  
  window.onload=function start(){
    const boto=document.getElementsByTagName("button")[0];
    boto.addEventListener("click",tornar);
    dibuixar();
    
  }