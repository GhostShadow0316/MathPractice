
close_btn = document.getElementById("close");
close_btn.addEventListener("click", () => { close(); })

var duration = 0.4;
var tFunc = "ease";
var delay_ = 0;
var count = 1;
var direction = "normal";
var fillMode = "forwards"

const delay = (ms=600+900+900+900+900) => new Promise(res => setTimeout(res, ms));

animation = async function(elem, text, text2="") {
    // duration: 600+900+900+900+900 = 4200
    await delay(600);
    elem.style["animation"] = `up ${duration}s ${tFunc} ${delay_}s ${count} ${direction} ${fillMode}`;
    await delay(900);
    elem.innerHTML = text.replaceAll(" - -",  " + ").replaceAll(" ", "&nbsp;");
    await delay(900);
    elem.innerHTML = text2.replaceAll(" ", "&nbsp;");
    await delay(900);
    elem.style["animation"] = `down ${duration}s ${tFunc} ${delay_}s ${count} ${direction} ${fillMode}`;
    await delay(900);
    elem.style["animation"] = "";
}

zoom_in = async function(elem) {
    size = style(elem, "font-size").replace("px", "") * 2 + "px";
    elem.style.fontSize = size;
}

zoom_out = async function(elem) {
    size = style(elem, "font-size").replace("px", "") / 2.0 + "px";
    elem.style.fontSize = size;
}
