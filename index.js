let p1 = 0;
let p2 = 0;

document.querySelector(".drum").addEventListener("click", function(){

  btnAnimation();

      var random = Math.floor(Math.random()*3)+1;
      var imgsrc = "images/rock" + random + ".png";
      document.querySelectorAll("img")[0].setAttribute("src", imgsrc);

      var random2 = Math.floor(Math.random()*3)+1;
      var imgsrc2 = "images/rock" + random2 + ".png";
      document.querySelectorAll("img")[1].setAttribute("src", imgsrc2);


      if (random==1 && random2==2){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
        p2++;
        document.querySelector(".res2").innerHTML = "Player 2: "+ p2;
      }else if (random==1 && random2==3){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
        p1++;
        document.querySelector(".res1").innerHTML = "Player 1: " + p1;
      }else if(random==2 && random2==1){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
        p1++;
        document.querySelector(".res1").innerHTML = "Player 1: " + p1;
      }else if(random==2 && random2==3){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
        p2++;
        document.querySelector(".res2").innerHTML = "Player 2: "+ p2;
      }else if(random==3 && random2==1){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
        p2++;
        document.querySelector(".res2").innerHTML = "Player 2: "+ p2;
      }else if(random==3 && random2==2){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
        p1++;
        document.querySelector(".res1").innerHTML = "Player 1: " + p1;
      }else{
        document.querySelector("h1").innerHTML = "draw!";
      }
      if (p1==3 || p2==3){console.log("p1 "+ p1);console.log("p2 "+p2);
        if (p1>p2){
          document.querySelector(".heading").classList.add("drumwinner");
        }else{
          document.querySelector(".heading").classList.add("drumwinner");
        }
        // document.querySelector(".drum").classList.add("drumagain");
        // document.querySelector(".drumagain").innerHTML = "Play Again";
        document.querySelector(".drum").classList.add("bfr");
        document.querySelector(".again").classList.remove("bfr");
        startAgain();
      }



});

// function startAgain(){
//   document.querySelector(".drum").addEventListener("keypress", function(){
//     // btnAnimation();
//     if (event.key == "p"){
//       document.querySelector(".heading").classList.remove("drumwinner");
//       // document.querySelector(".drumagain").innerHTML = "Play";
//       // document.querySelector(".drum").classList.remove("drumagain");
//
//       p1=0;
//       p2=0;
//       document.querySelector(".res1").innerHTML = p1;
//       document.querySelector(".res2").innerHTML = p2;
//     }
//
//  });
// }

function startAgain(){
    document.querySelector(".again").addEventListener("click", function(){
      btnAnimation();
      document.querySelector(".drum").classList.remove("bfr");
      document.querySelector(".again").classList.add("bfr");
      document.querySelector(".heading").classList.remove("drumwinner");
      p1=0;
      p2=0;
      document.querySelector(".res1").innerHTML = "Player 1: " + p1;
      document.querySelector(".res2").innerHTML = "Player 2: " + p2;
   });
  }


function btnAnimation(){
  var animate = document.querySelector(".drum")
  animate.classList.add("pressed");
  setTimeout(function(){
    animate.classList.remove("pressed");
  }, 100);
}
