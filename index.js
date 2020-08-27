// document.querySelector('button').addEventListener("click",handleClick);
// function handleClick() {
//   alert("I am Clicked!");
// }


for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
     document.querySelectorAll('.drum')[i].addEventListener("click",function functionName() {
              var buttonInnerHtml = this.innerHTML;
              makeSound(buttonInnerHtml);

     });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
});

     function makeSound(key) {
       switch (key) {
         case "a":
             var tom_1 = new Audio('tom-1.mp3');
             tom_1.play();
             break;
         case "k":
               var tom_2 = new Audio('tom-2.mp3');
               tom_2.play();
               break;
        case "n":
               var tom_4 = new Audio('tom-3.mp3');
               tom_4.play();
               break;
        case "s":
               var kick_bass = new Audio('tom-4.mp3');
               kick_bass.play();
               break;

        case "h":
               var snare = new Audio('snare.mp3');
               snare.play();

         default:

       }
     }
