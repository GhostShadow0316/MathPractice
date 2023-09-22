// Level

quiz = () => {
    x = generate(1, 90);
    a = generate(1, 90);
    if (a*x>100) { c = generate(50, 1500) }
    else { c = generate(50, 90) };
    b = ((-a*x)+c);

    eq = `${a}x ${num(b)} = ${c}`;

    return [eq, eq, x];
}

get_ans = () => {
    return [Number(ans_inp.value)];
}
