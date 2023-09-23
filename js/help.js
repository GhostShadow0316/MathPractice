
var format_div = document.getElementById("format");


// url
let URLObject = new URL(window.location.href);
let params = new URLSearchParams(URLObject.search);
let url = (window.location.href).split("?")[0]
var type = (params.get("type")).toLowerCase();

switch (type) {
    case "le1v":
        break;
    case "le2v":
        format_div.style["display"] = "block";
        break;
    case "qe":
        break;
    case "sqr":
        break;
}

