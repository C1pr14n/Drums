/*var numberOfDrumButtons = document.querySelectorAll(".drum");
 for(var i=0; i<numberOfDrumButtons.length; i++){ // o varianta mai buna pt a aplica functia la toate butoanele

   document.querySelectorALl(".drum")[i].addEventListener("click", function (){//folosim fct fara nume ce o definim direct in input
     alert("I got clicked");
  });//atunci cand butonul este apasat va primi(click) va primi functia de mai jos//handleClick este fara paranteze pt ca nu vrem ca sa actioneze functia direct, ci numai sa o avem ca si input pt atunci cand user-ul activeaza butonul

} // porneste loop-ul de la primul buton, adica 0 si se opreste la nr-ul returnat de Selectorul pt clasa .drum, adica 7 si ii aplica functia claseo .drum pt respectivul buton, dupa care incrementeaza cu 1 si trece la urmatorul buton pana ajuge la butonul 7
*/


//  INCERCAM VARIANTA DE MAI SUS CE NU FUNCRIONEAZA IN MODUL MANUAL


//____________________Detecting Button Press______________________//

document.querySelector(".w").addEventListener("click", handleClick);//atunci cand butonul este apasat va primi(click) va primi functia de mai jos//handleClick este fara paranteze pt ca nu vrem ca sa actioneze functia direct, ci numai sa o avem ca si input pt atunci cand user-ul activeaza butonul
document.querySelector(".a").addEventListener("click", handleClick);
document.querySelector(".s").addEventListener("click", handleClick);
document.querySelector(".d").addEventListener("click", handleClick);
document.querySelector(".j").addEventListener("click", handleClick);
document.querySelector(".k").addEventListener("click", handleClick);
document.querySelector(".l").addEventListener("click", handleClick);

function handleClick(){
  var buttonInnerHTML = this.innerHTML; // variabila care va inregistra butonul apasat
  makeSound(buttonInnerHTML);           // aici va fi litera pe care am apasat-o cu mouse-ul
  // console.log(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

//______________________Detecting Keyboard Press_______________________//

//in addEventListener-ul de mai jos(care poate fi denumit oricum: "anotherAddEventListener") avem o functie de tip "callback"
document.addEventListener("keydown", function(event){// acum intreaga pagina de web ("document") va asculta sa vada daca este apasat vreun buton de la tastatura
    makeSound(event.key); // "event = ce s-a apasat
    //IDEEA E CA Atunci cand se apasa o tasta aici mai sus, tasta respectiva va fi inregistrata de functia "makeSound" si verificata mai jos in "switch"-ul creat; Unde va fi trecuta sub numele de :"key"
    // console.log(event);//aici va aparea litera pe care am apasat-o de la tastatura si va fi luata ca input pt functia de mai jos
    buttonAnimation(event.key);
});

//___________Litera de mai sus va fi input pt functia de mai jos si va actiona sunetul in functie de litera apasata
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      // console.log(key);
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    default:console.log(event);
  }
}

//____________Animatiile______________//

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);//aici intra o singura litera din switch-ul de mai sus(k, l, s...) si daca vrem sa avem animatie pt fiecare buton va trebui sa folosim clasa (ex.: ".w"), iar pt asta o sa facem o concatenare
    activeButton.classList.add("pressed"); //adaugam o clasa noua pt activeButton !!! Aici nu avem nevoie sa specificam cu "." clasa pe care o adaugat
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);  //functie prestabilita timeout ce are ca parametrii functia de remove "pressed" data de noi si delay-ul cu care sa o execute


}






















//_________________________________________________________//
