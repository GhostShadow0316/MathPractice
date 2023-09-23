
const delay = (ms=2500) => new Promise(res => setTimeout(res, ms));

animation = async function(elem, text) {
    setTimeout(()=>{
        elem.classList.add("up");
        setTimeout(()=> {
            elem.innerHTML = text.replaceAll(" ", "&nbsp;");
            setTimeout(()=>{
                elem.classList.remove("up");
                elem.classList.add("down");
                setTimeout(()=> { elem.classList.remove("down"); }, 1000)
            }, 500)
        }, 1000)
    }, 600)
}

zoom = async function(elem) {
    elem.style["font-size"] = "150px";
}
