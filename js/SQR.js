// Level

quiz = () => {
    x = generate(1, 99);
    a = x**2;

    val= `√${a}`
    eq = `<math><msqrt><mrow><mi>${a}</mi></mrow></msqrt></math>`;

    return [eq, val, x, null];
}

get_ans = () => {
    return [Number(ans_inp.value)];
}
