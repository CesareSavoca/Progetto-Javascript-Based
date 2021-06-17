var tastoMeno = document.getElementById ("meno");
tastoMeno.addEventListener('click', function(){
  var valoreAttuale = document.getElementById('casella').value;
   valoreAttuale = valoreAttuale - 1;
   document.getElementById('casella').value = valoreAttuale;
})
var tastoPiu = document.getElementById ("piu");
tastoPiu.addEventListener('click', function(){
  var valoreAttuale = document.getElementById('casella').value;
   valoreAttuale = valoreAttuale * 1 + 1;
   document.getElementById('casella').value = valoreAttuale;
})

var clickMeno = document.getElementById("meno");
clickMeno.addEventListener('click', function(){
  var uomo = document.getElementById("uomo").style.marginLeft;
  console.log(uomo);
  uomo = uomo.replace("px", "");
  console.log(uomo);
  uomo = uomo * 1 - 5 ;
  console.log(uomo);
  document.getElementById("uomo").style.marginLeft = uomo + "px";
    console.log(uomo);
})

var clickMeno = document.getElementById("piu");
clickMeno.addEventListener('click', function(){
  var uomo = document.getElementById("uomo").style.marginLeft;
  console.log(uomo);
  uomo = uomo.replace("px", "");
  console.log(uomo);
  uomo = uomo *1 + 5 ;
  console.log(uomo);
  document.getElementById("uomo").style.marginLeft = uomo + "px";
    console.log(uomo);
})
