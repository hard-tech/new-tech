// code boutton site négatif //

var buttonstate=0;
function onoff(element)
{
  buttonstate= 1 - buttonstate;
  if(buttonstate)
  {
    // document.querySelector(".invers-element").innerHTML = '<style>body{filter: invert(100%);}</style>';
    // $('#main').smoothState();
  }
  else
  {
    document.querySelector(".invers-element").innerHTML = '';
  }
}
function demarrage() {
    // Barre de Navigations //
    document.querySelector(".nav").innerHTML = '<nav><ul><li><a class="active" href="index.html">Home</a></li><li class="deroulant"><a href="#">Projet</a><ul class="sous"><li class="deroulant"><li><a href="Site web.html">Site web </a></li></ul></li><li class="deroulant"><a href="#">Mon compte</a><ul class="sous"><li ><a href="login.html">Connexion</a></li><li ><a href="sign-in.html">s\'identifier</a></li></ul></li><li class="deroulant"><a href="#">&nbsp;&nbsp;&nbsp;&nbsp; info &nbsp;&nbsp;&nbsp;&nbsp;</a><ul class="sous"><li ><a href="recrutement.html" class="r" >Recrutement</a></li><li ><a href="contact.html">Contact</a></li></ul></li><li style="float:right"><a href="about.html">&Agrave; propos</a></li></ul></nav>';
    
    // Boutton site negatif //
    // document.querySelector(".style-boutton-background-jour-nuit").innerHTML = '<div class="negatif"><h2 class="Bl">N&eacute;gatif</h2><label class="toggle" id="toggle"><input type="checkbox"  onclick="onoff(this)"><span class="slider round"></span></label></div>';


    // mode (jour/nuit) //

    $("#darkTrigger").click(function(){
      if ($(".box, .style-boutton-background-jour-nuit").hasClass("white-them")){
        $(".box, .style-boutton-background-jour-nuit").removeClass("white-them");
        // Mode jour text //
        document.querySelector(".mode-jour-nuit").innerHTML = 'Mode nuit';
        $(".box, .style-boutton-background-jour-nuit").addClass("dark-them");
      }
      else{
        $(".box, .style-boutton-background-jour-nuit").addClass("white-them");
        // Mode nuit text //
        document.querySelector(".mode-jour-nuit").innerHTML = 'Mode jour';
      }
    });
    
    $(document).ready(function () {
      var d = new Date();
      var n = d.getHours();
      if(n > 17 || n < 8){
        $(".box, .style-boutton-background-jour-nuit").addClass("dark-them");
        document.querySelector(".mode-jour-nuit").innerHTML = 'Mode nuit';
      }
      else{
        $(".box, .style-boutton-background-jour-nuit").addClass("white-them");
        // Mode nuit text //
        document.querySelector(".mode-jour-nuit").innerHTML = 'Mode jour';
      }
    });

}
window.addEventListener("load",demarrage);