//Simple Dice Roller up to Six

function rollDice() {
  var result = Math.floor(Math.random() * 6) + 1;
  var dice = document.getElementById("dice");
  var faces = dice.getElementsByClassName("face");
  for (var i = 0; i < faces.length; i++) {
    faces[i].style.display = "none";
  }
  dice.getElementsByClassName("face")[result - 1].style.display = "block";
}
