var character = ducument.getElementById("character");
var block = ducument.getElementById("block");
function jump(){
  if(character.classList !="animate"){
  character.classList.add("animate");
  }
  setTimeout(function(){
      character.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function(){
 var characterTop = 
   parsInt(window.getCumputedStyle(character).getPropertyValue("top"));
   var blockLeft = 
   parsInt(window.getCumputedStyle(block).getPropertyValue("left"));
  If (blockLeft<20 && blockLeft>0 && characterTop>=130){

    block.style.animation = "none";
     block.style.display = "none";
    alert("U Lost");
  }
},10);
