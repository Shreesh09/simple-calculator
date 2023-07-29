import React from "react";
import CalculatorButtons from './calculator_buttons';
class Calculator extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        }
    }

    handleClick = (id) => {
        if (this.props.data.length === 0)
            this.setState({
                input: "",
            });

        if((id >= '0' && id <= '9') || id === '.')
        {
            this.props.submitDigit(id);
            this.setState({
                input: this.props.data.join("").replace(/[+][-]/, "-"),
            });
        }
        else if( id === '=')
        {
            this.props.submitExpression();
        }
        else if(id === 'clear')
        {
            this.setState({
                input: "",
            });
            this.props.submitReset();

        }
        else {
            this.props.submitOperator(id);
            this.setState({
                input: this.props.data.join("").replace(/[+][-]/, "-"),
            });
        }
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                <h1>{this.state.input}</h1>
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