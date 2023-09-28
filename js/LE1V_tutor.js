
num = (n) => {
    n = Number(n);
    if (n<0) { return `- ${Math.abs(n)}`; }
    else { return `+ ${n}` }
}

// url
let URLObject = new URL(window.location.href);
let params = new URLSearchParams(URLObject.search);
let url = (window.location.href).split("?")[0];
var a  = (params.get("a") || "2");
var b  = (params.get("b") || "3");
var c  = (params.get("c") || "7");
var bc = (c-b);

again = document.getElementById("again");

tutor = document.getElementsByTagName("tutor")[0];
tutor.innerHTML = `<label id="x">${a}</label>x <label id="n1">${num(b)}</label> = <label id="n2">${c}</label>`

x  = document.getElementById("x");
n1 = document.getElementById("n1");
n2 = document.getElementById("n2");

main = async () => {
    animation(n1, "");
    animation(n2, `${c} - ${b}`, `${bc}`);
    await delay();
    animation(x, "");
    animation(n2, `${bc} / ${a}`, `${bc/a}`);
    await delay();
    zoom_in(tutor);
    await delay(500);
    again.toggleAttribute("disabled");
}

again.addEventListener("click", async () => {
    again.toggleAttribute("disabled");
    zoom_out(tutor);
    tutor.innerHTML = `<label id="x">${a}</label>x <label id="n1">${num(b)}</label> = <label id="n2">${c}</label>`
    x  = document.getElementById("x");
    n1 = document.getElementById("n1");
    n2 = document.getElementById("n2");
    await delay(500);
    main();
});
