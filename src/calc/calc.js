import React from "react";
import CalculatorButtons from './calculator_buttons';
import './calc_style.css';
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
        return (
            <div className="body">
                <div className="calculator">
                    <p id="name">CASIO</p>
                    <p id="model">S-V.P.A.M</p>
                    <div id="screen">
                        <p id="display">{this.props.display}</p>
                        <p id="result">{this.props.result}</p>
                    </div>
                    <div className="button-box">
                        <CalculatorButtons value="9" click={this.handleClick} id="nine"/>
                        <CalculatorButtons value="8" click={this.handleClick} id="eight"/>
                        <CalculatorButtons value="7" click={this.handleClick} id="seven"/>
                        <div className="pseudo"></div>
                        <CalculatorButtons value="=" click={this.handleClick} id="equals"/>
                        <CalculatorButtons value="clear" click={this.handleClick} id="clear"/>
                        <CalculatorButtons value="6" click={this.handleClick} id="six"/>
                        <CalculatorButtons value="5" click={this.handleClick} id="five"/>
                        <CalculatorButtons value="4" click={this.handleClick} id="four"/>
                        <div className="pseudo"></div>
                        <CalculatorButtons value="+" click={this.handleClick} id="add"/>
                        <CalculatorButtons value="-" click={this.handleClick} id="subtract"/>
                        <CalculatorButtons value="3" click={this.handleClick} id="three"/>
                        <CalculatorButtons value="2" click={this.handleClick} id="two"/>
                        <CalculatorButtons value="1" click={this.handleClick} id="one"/>
                        <div className="pseudo"></div>
                        <CalculatorButtons value="/" click={this.handleClick} id="divide"/>
                        <CalculatorButtons value="X" click={this.handleClick} id="multiply"/>
                        <CalculatorButtons value="." click={this.handleClick} id="decimal"/>
                        <CalculatorButtons value="0" click={this.handleClick} id="zero"/>
                </div>
                </div>
            </div>
        )
    }
}

export default Calculator;