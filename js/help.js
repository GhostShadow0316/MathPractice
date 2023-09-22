
var format_div = document.getElementById("format");


// url
let URLObject = new URL(window.location.href);
let params = new URLSearchParams(URLObject.search);
let url = (window.location.href).split("?")[0]
var type = (params.get("type")).toLowerCase();

switch (type) {
    case "le1v":
        console.log("LE1V");
        break;
    case "le2v":
        console.log("LE2V");
        format_div.style["display"] = "block";
        break;
    case "qe":
        console.log("QE");
        break;
    case "sqr":
        console.log("Square Root");
        break;
}

