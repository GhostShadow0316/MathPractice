
num = (n) => {
    n = Number(n);
    if (n<0) { return `- ${Math.abs(n)}`; }
    else { return `+ ${n}` }
}

// url
let URLObject = new URL(window.location.href);
let params = new URLSearchParams(URLObject.search);
let url = (window.location.href).split("?")[0]
var a  = (params.get("a"));
var b  = (params.get("b"));
var c  = (params.get("c"));
var bc = (c-b);


tutor = document.getElementsByTagName("tutor")[0];
tutor.innerHTML = `<label id="x">${a}</label>x <label id="n1">${num(b)}</label> = <label id="n2">${c}</label>`

x  = document.getElementById("x");
n1 = document.getElementById("n1");
n2 = document.getElementById("n2");

main = async () => {
    await delay(100);
    animation(n1, "");
    animation(n2, `${bc}`);
    await delay();
    animation(x, "");
    animation(n2, `${bc}/${a}`);
    await delay();
    animation(n2, `${bc/a}`);
    await delay(3000);
    zoom(tutor);
}

main();
