var n1 = Math.floor(Math.random() * 6) + 1;
var n2 = Math.floor(Math.random() * 6) + 1;

var p1 = "./images/dice"+n1+".png";
var p2 = "./images/dice"+n2+".png";

document.querySelectorAll(".grid img")[0].setAttribute("src", p1);
document.querySelectorAll(".grid img")[1].setAttribute("src", p2);


if (n1 > n2)
    document.querySelector(".score").innerHTML = "player 1 wins";
else if (n1 < n2)
    document.querySelector(".score").innerHTML = "player 2 wins";
else
    document.querySelector(".score").innerHTML = "Draw";
