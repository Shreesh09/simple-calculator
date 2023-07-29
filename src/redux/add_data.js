function isDigit(d)
{
    if(typeof(d) === 'number')
        return true;

    return d.split().every((c) => {
        return (c >= '0' && c <= '9') || c === '.' || c === '-';

    });
}

function isOperator(c)
{
    return c === '+' || c === '-' || c === 'X' || c === '/';

}

function addOperator(data, operator)
{
   if(data.length === 0)
   {
       data.push(operator);
       return data;
   }
   if(operator === '-')
   {
       if(!isOperator(data[data.length-1]))
       {
           let num;
           if(data[data.length-1] === '.')
            num = 0;
           else num = parseFloat(data[data.length-1]);
           data.pop();
           data.push(num);
           data.push("+");
       }
       if(data[data.length-1] !== '-')
        data.push("-");
       return data;
   }

   if(isOperator(data[data.length-1]))
   {
       if(data[data.length-1] === '-')
           data.pop();
       data[data.length-1] = operator;
       return data;
   }

    let num;
    if(data[data.length-1] === '.')
        num = 0;
    else num = parseFloat(data[data.length-1]);
    data.pop();
    data.push(num);
    data.push(operator);

    return data;
}

function addDigit(data, digit)
{
    if(data.length === 0)
    {
        data.push(digit);
        return data;
    }
    if(!isDigit(data[data.length-1]))
    {
        data.push(digit);
        return data;
    }

    let d = data[data.length-1];
    if(d.length === 1 && d[0] === '0' && digit === '0')
        return data;
    if(digit === '.' && d.indexOf('.') !== -1)
        return data;
    data[data.length-1] += digit;

    return data;
}

export {addDigit, addOperator, isOperator, isDigit}