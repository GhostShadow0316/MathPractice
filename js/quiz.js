// Functions

setStatus = (text= "&nbsp;", color= "#fff", ms= 1000) => {
    status_p.style["color"] = color;
    status_p.innerHTML = text;
    setTimeout(()=>{ status_p.innerHTML = "&nbsp;" }, ms);
};

newQuiz = () => {
    res = quiz();
    var eq  = res[0];
    var val = res[1];
    x = res[2];
    var abc = res[3];
    console.log(x);

    equation_p.innerHTML = eq;
    equation_p.value = val;
    ans_inp.value = "";
    if (abc!=null) { tutor_a.href = `tutorial/LE1V.html?a=${abc[0]}&b=${abc[1]}&c=${abc[2]}`; }

    correct_p.innerHTML = `Correct: ${correct}`;
    wrong_p  .innerHTML = `Wrong: ${wrong}`;
    total_p  .innerHTML = `Total: ${total}`;

};

check = function(a, b) {
    if (typeof(b)!="object") b = [b];
    return (a.length === b.length) && (a.every(function(value, index) { return value === b[index]}));
    // if (typeof(b)=="object") {
    //     return (a.length === b.length) && (a.every(function(value, index) { return value === b[index]}));
    // } else if (typeof(b)=="number") {
    //     return (a==b);
    // }
};

submit = () => {
    ans = get_ans();

    if (check(ans, x)) {
        correct++;
        total++;
        setStatus("Correct!", "green");
    } else {
        wrong++;
        total++;
        setStatus("Wrong!", "red");
    }

    newQuiz();
}

// Main

var btn_new     = document.getElementById("new");
var equation_p  = document.getElementById("equation");
var equation_tt = document.getElementById("copy");
var ans_inp     = document.getElementById("ans");
var btn_submit  = document.getElementById("submit");
var status_p    = document.getElementById("status");
var tutor_a     = document.getElementById("tutor");
var correct_p   = document.getElementById("correct");
var wrong_p     = document.getElementById("wrong");
var total_p     = document.getElementById("total");

var correct = 0;
var wrong   = 0;
var total   = 0;

var x;

// Event

btn_new.addEventListener("click", newQuiz);
btn_submit.addEventListener("click", submit);

ans_inp.addEventListener('keypress', (e) => { if (e.key=="Enter") { submit(); } });

equation_p.addEventListener("click", (e) => {
    navigator.clipboard.writeText(equation_p.value);
    setStatus("Copied!", "cyan");
})

// First quiz
newQuiz();
