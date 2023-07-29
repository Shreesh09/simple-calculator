import {prec} from "./compute_data";
function addOperator(data, operator)
{
    if(data.length === 0)
    {
        data.push(operator);
        return data;
    }

    if(operator === '-')
    {
        if(prec(data[data.length-1]) === -1)
        {
            let num = parseInt(data[data.length-1]);
            data.pop();
            data.push(num);
        }
        data.push("+");
        data.push("-");
        return data;
    }

    if(prec(data[data.length-1]) !== -1)
    {
        data[data.length-1] = operator;
        return data;
    }

    let num = parseInt(data[data.length-1]);
    data.pop();
    data.push(num);
    data.push(operator);
    data.push("");
    return data;
}

function addDigit(data, digit)
{
    if(data.length === 0)
    {
        data.push(digit);
        return data;
    }

    let d = data[data.length-1];
    if(digit === '0' && d.length === 1 && d[0] === '0' )
        return data;

    if(digit === '.' && d.indexOf('.') !== -1)
            return data;

    data[data.length-1] += digit;
    return data;
}

export {addDigit, addOperator}