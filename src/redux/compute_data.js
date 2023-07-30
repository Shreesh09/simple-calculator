import {isOperator} from "./add_data";
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
        case 'X': return a * b;
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
    if(st.length === 0)
            return 0;
    return st[0];
}

const computeData = (data) => {
    while(data.length > 0 && isOperator(data[data.length-1]))
        data = data.slice(0, data.length-1);

    while(data.length > 0 && isOperator(data[0]))
        data = data.slice(1);

    if(data.length === 0)
        return 0;

    let num;
    if(data[data.length-1] === '.')
        num = 0;
    else num = parseFloat(data[data.length-1]);
    data.pop();
    data.push(num);

    return compute(infixToPostfix(data));
}

export {computeData, prec};
