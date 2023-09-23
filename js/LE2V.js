// Level

quiz = () => {
    e = 0.0001;
    while (Math.floor(e) != e) {
        x = generate(1, 9);
        _ = generate(1, 9);
        y = x*_;
        d = generate(1, 9);
        e = d/_;
    }

    _ = generate(1, 9);
    a = d*_;
    b = Number(-a*x/y);
    c = generate(1, 9);
    a -= c;

    eq1 = `${num(d, 1, 0)}x = ${num(e, 1, 0)}y`;
    eq2 = `${num(a, 1, 0)}x ${num(b)}y ${num(c*x)} = 0`;
    eqs = eq1 + "<br>" + eq2;
    val = eq1 + " | " + eq2;

    if (x==y) { return [eqs, eqs, ["*", x]]; }

    return [eqs, val, [x, y], null];
}

get_ans = () => {
    ans = (ans_inp.value).split(" ");
    ans = ans.map((n) => { return Number(n) || "*"; })
    return ans;
}
