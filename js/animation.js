
close_btn = document.getElementById("close");
close_btn.addEventListener("click", () => { close(); })


const delay = (ms=600+900+900+900+900) => new Promise(res => setTimeout(res, ms));

animation = async function(elem, text, text2="") {
    // duration: 600+1000+1000+1000+1000 = 4600
    setTimeout(() => {
        elem.classList.add("up");
        setTimeout(() => {
            elem.innerHTML = text.replaceAll(" ", "&nbsp;").replaceAll("--",  "+");
            setTimeout(() => {
                elem.innerHTML = text2.replaceAll(" ", "&nbsp;");
                setTimeout(() => {
                    elem.classList.remove("up");
                    elem.classList.add("down");
                    setTimeout(() => { elem.classList.remove("down"); }, 900) // down
                }, 900) // bc down
            }, 900) // c-b => bc
        }, 900) // b = c => c-b
    }, 600) // go up
}

zoom_in = async function(elem) {
    size = style(elem, "font-size").replace("px", "") * 2 + "px";
    elem.style.fontSize = size;
}

zoom_out = async function(elem) {
    size = style(elem, "font-size").replace("px", "") / 2.0 + "px";
    elem.style.fontSize = size;
}
