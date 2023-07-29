
function prec(c) {
    if(c === '/' || c === 'X')
        return 2;
    else if(c === '+' || c === '-')
        return 1;
    else
        return -1;
}

function operation(a, b, op)
{
    switch(op)
    {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return -1;
    }
}

function infixToPostfix(s) {
    let st = [];
    let result = [];

    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        if(typeof(c) == 'number')
            result.push(c);
        else {
            while(st.length !== 0 && prec(s[i]) <= prec(st[st.length - 1])) {
                result.push(st[st.length - 1]);
                st.pop();
            }
            st.push(c);
        }
    }

    while(st.length !== 0) {
        result.push(st[st.length - 1]);
        st.pop();
    }

    return result;
}

function compute(data) {
    let st = [];
    for(let i = 0 ; i < data.length; i++)
    {
        let c = data[i]
        if(typeof(c) == 'number')
            st.push(c);
        else{
            const n1 = st[st.length-1];
            st.pop();
            const n2 = st[st.length-1];
            st.pop();
            let ca = operation(n2, n1, c)
            st.push(ca);
        }
    }

    return st[0];
}

const computeData = (data) => {
    if(data.length === 0 )
            return 0;

    if(prec(data[0]))
        data = data.splice(0, 1);

    return compute(infixToPostfix(data));
}

export {computeData, prec};
