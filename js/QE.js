// Level

sum  = (array_) => { return array_[0] + array_[1]; }

prod = (array_) => { return array_[0] * array_[1]; }

quiz = () => {
    nums = [generate(), generate()];
    eq = `x² ${num(sum(nums))}x ${num(prod(nums))} = 0`;
    if (nums[0]==nums[1]) {roots = ["*", -nums[0]]; }
    else { roots = [-nums[0], -nums[1]]; }
    return [eq, eq, roots.sort()];
}

get_ans = () => {
    if ((ans_inp.value).indexOf(" ") != -1) {
        ans = (ans_inp.value).split(" ");
        ans = ans.map((n) => { return Number(n) || "*"; })
    } else if ((ans_inp.value).indexOf("'") != -1) {
        ans1 = (ans_inp.value).replace("'", "+");
        ans2 = (ans_inp.value).replace("'", "-");
        ans = [evil(ans1), evil(ans2)];
    }  else if ((ans_inp.value).indexOf("%") != -1) {
        ans1 = (ans_inp.value).replace("%", "+");
        ans2 = (ans_inp.value).replace("%", "-");
        ans = [evil(ans1), evil(ans2)];
    }
    return ans.sort();
}
