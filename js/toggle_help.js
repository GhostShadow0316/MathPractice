

var help_a = document.getElementById("help_a");
var iframe = document.getElementsByTagName("iframe")[0];

iframe.height = "480px";
iframe.width  = "100%";

toggle_iframe = () => {
    if (iframe.style["display"]=="") { iframe.style["display"] = "block" }
    else { iframe.style["display"] = "" }
    iframe.scrollIntoView();
}

help_a.addEventListener("click", toggle_iframe);
