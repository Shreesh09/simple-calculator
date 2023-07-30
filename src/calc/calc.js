import React from "react";
import CalculatorButtons from './calculator_buttons';
class Calculator extends React.Component
{
    handleClick = (id) => {
        if((id >= '0' && id <= '9') || id === '.')
        {
            this.props.submitDigit(id);
        }
        else if( id === '=')
        {
            this.props.submitExpression();
        }
        else if(id === 'clear')
        {
            this.props.submitReset();
        }
        else {
            this.props.submitOperator(id);
        }
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                <h1>{this.props.display}</h1>
                <h1>{this.props.result}</h1>
                <div>
                <CalculatorButtons click={this.handleClick} id="0"/>
                <CalculatorButtons click={this.handleClick} id="1"/>
                <CalculatorButtons click={this.handleClick} id="2"/>
                <CalculatorButtons click={this.handleClick} id="3"/>
                <CalculatorButtons click={this.handleClick} id="4"/>
                <CalculatorButtons click={this.handleClick} id="5"/>
                <CalculatorButtons click={this.handleClick} id="6"/>
                <CalculatorButtons click={this.handleClick} id="7"/>
                <CalculatorButtons click={this.handleClick} id="8"/>
                <CalculatorButtons click={this.handleClick} id="9"/>
                <CalculatorButtons click={this.handleClick} id="="/>
                <CalculatorButtons click={this.handleClick} id="+"/>
                <CalculatorButtons click={this.handleClick} id="-"/>
                <CalculatorButtons click={this.handleClick} id="X"/>
                <CalculatorButtons click={this.handleClick} id="/"/>
                <CalculatorButtons click={this.handleClick} id="."/>
                <CalculatorButtons click={this.handleClick} id="clear"/>
                </div>
            </div>
        )
    }
}

export default Calculator;