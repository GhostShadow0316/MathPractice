
num = (n) => {
    n = Number(n);
    if (n<0) { return `- ${Math.abs(n)}`; }
    else { return `+ ${n}` }
}

// url
let URLObject = new URL(window.location.href);
let params = new URLSearchParams(URLObject.search);
let url = (window.location.href).split("?")[0];
var qe  = ((params.get("qe") || "2916").split(""));
var n   = (params.get("n") || "54");
var qe2 = ([qe.pop(), qe.pop()].reverse().toString().replace(",", ""));
var qe1 = (qe.toString().replace(",", ""));

var again = document.getElementById("again");

var tutor = document.getElementsByTagName("tutor")[0];
// tutor.innerHTML = `<label id="qe1">29</label><label id="qe2">16</label>`

var qe1_l  = document.getElementById("qe1");
var qe2_l  = document.getElementById("qe2");
var squares = [
    document.getElementById("n0"),
    document.getElementById("n1"),
    document.getElementById("n2"),
    document.getElementById("n3"),
    document.getElementById("n4"),
    document.getElementById("n5"),
    document.getElementById("n6"),
    document.getElementById("n7"),
    document.getElementById("n8"),
    document.getElementById("n9")
]

main = async () => {
    await delay(600);
    highlight(qe1_l, "red");
    await delay(600);
    highlight(squares[Number(n[0])], "red");
    await delay(900);
    highlight(qe1_l);
    highlight(squares[Number(n[0])]);
}

// again.addEventListener("click", async () => {
//     again.toggleAttribute("disabled");
//     zoom_out(tutor);
//     tutor.innerHTML = `<label id="x">${a}</label>x <label id="qe1_l">${num(b)}</label> = <label id="qe2_l">${c}</label>`
//     x  = document.getElementById("x");
//     qe1_l = document.getElementById("qe1");
//     qe2_l = document.getElementById("qe2");
//     await delay(500);
//     main();
// });
