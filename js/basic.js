
evil = (fn) => { return new Function('return ' + fn)(); }

generate = (min=1, max=50) => { return Math.floor(Math.random() * max)+min; };
// generate = (min=1, max=50) => { return 3; };

num = (n, pos= 0, space= 1) => {
    if (pos==1) {
        if (space==1) {
            if (n==1) { return `` }
            if (n==-1) { return `- ` }
            else if (n>0) { return `+ ${n}`; }
            else { return `- ${Math.abs(n)}`; }
        } else if (space==0) {
            if (n==1) { return `` }
            if (n==-1) { return `-` }
            else if (n>0) { return `${n}`; }
            else { return `-${Math.abs(n)}`; }
        }
    } else {
        if (space==1) {
            if (n==1) { return `+ ` }
            if (n==-1) { return `- ` }
            else if (n>0) { return `+ ${n}`; }
            else { return `- ${Math.abs(n)}`; }
        } else if (space==0) {
            if (n==1) { return `+` }
            if (n==-1) { return `-` }
            else if (n>0) { return `+${n}`; }
            else { return `-${Math.abs(n)}`; }
        }
    }
}
