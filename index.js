let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);

if (randomNumber1 === 0) {

    document.getElementById("i11").style.display = "block";
} else if (randomNumber1 === 1) {

    document.getElementById("i12").style.display = "block";
} else if (randomNumber1 === 2) {
    document.getElementById("i13").style.display = "block";

} else if (randomNumber1 === 3) {
    document.getElementById("i14").style.display = "block";

} else if (randomNumber1 === 4) {
    document.getElementById("i15").style.display = "block";

} else if (randomNumber1 === 5) {
    document.getElementById("i16").style.display = "block";

}
if (randomNumber2 === 0) {
    document.getElementById("i21").style.display = "block";

} else if (randomNumber2 === 1) {
    document.getElementById("i22").style.display = "block";

} else if (randomNumber2 === 2) {
    document.getElementById("i23").style.display = "block";

} else if (randomNumber2 === 3) {
    document.getElementById("i24").style.display = "block";

} else if (randomNumber2 === 4) {
    document.getElementById("i25").style.display = "block";

} else if (randomNumber2 === 5) {
    document.getElementById("i26").style.display = "block";

}



if (randomNumber1 === randomNumber2) {
    document.getElementById("draw").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.getElementById("draw").textContent = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    document.getElementById("draw").textContent = "Player 2 Wins";
}