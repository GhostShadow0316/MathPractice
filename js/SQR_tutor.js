
num = (n) => {
    n = Number(n);
    if (n<0) { return `- ${Math.abs(n)}`; }
    else { return `+ ${n}` }
}

// url
let URLObject = new URL(window.location.href);
let params = new URLSearchParams(URLObject.search);
let url = (window.location.href).split("?")[0];
var qe  = (params.get("qe").split(""));
var n   = (params.get("n"));
var qe2 = ([qe.pop(), qe.pop()].reverse().toString().replace(",", ""));
var qe1 = (qe.toString().replace(",", ""));

again = document.getElementById("again");

tutor = document.getElementsByTagName("tutor")[0];
tutor.innerHTML = `<label id="qe1">72</label><label id="qe2">25</label>`

qe1_l = document.getElementById("qe1");
qe2_l = document.getElementById("qe2");

main = async () => {
    animation(qe1_l, `${n[0]}²`, `${n[0]*n[0]}`);
    await delay();
    animation(qe1_l, `${qe1}`, `${qe1}`);
    // await delay();
    // animation(x, "");
    // animation(qe2_l, `${bc}/${a}`, `${bc/a}`);
    // await delay(5000);
    // zoom_in(tutor);
    // await delay(500);
    // again.toggleAttribute("disabled");
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
