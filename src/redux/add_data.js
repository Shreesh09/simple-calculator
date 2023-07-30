function isDigit(d)
{
    if(typeof(d) === 'number')
        return true;

    return d.split("").every((c) => {
        return (c >= '0' && c <= '9') || c === '.' || c === '-';

    });
}

function isOperator(c)
{
    return c === '+' || c === '-' || c === 'X' || c === '/';

}

function addOperator(data, display, operator)
{
   if(data.length === 0)
   {
       display = operator;
       data.push(operator);
       return {display,data};
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
       if(data[data.length-1] !== '-') {
           display += "-";
           data.push("-");
       }
       return {display,data};
   }

   if(isOperator(data[data.length-1]))
   {
       if(data[data.length-1] === '-') {
           display = display.substring(0, display.length-1);
           data.pop();
       }
       if(isOperator(display[display.length-1]))
            display = display.substring(0, display.length-1);
       display += operator;
       data[data.length-1] = operator;
       return {display,data};
   }

    let num;
    if(data[data.length-1] === '.')
        num = 0;
    else num = parseFloat(data[data.length-1]);
    data.pop();
    data.push(num)
    display += operator;
    data.push(operator);

    return {display,data};
}

function addDigit(data, display, digit)
{
    if(data.length === 0)
    {
        display = digit;
        data.push(digit);
        return {display,data};
    }
    if(!isDigit(data[data.length-1]))
    {
        display += digit;
        data.push(digit);
        return {display,data};
    }

    let d = data[data.length-1];
    if(d.length === 1 && d[0] === '0' && digit === '0')
        return {display,data};
    if(digit === '.' && d.indexOf('.') !== -1)
        return {display,data};

    display += digit;
    data[data.length-1] += digit;

    return {display,data};
}

export {addDigit, addOperator, isOperator, isDigit}