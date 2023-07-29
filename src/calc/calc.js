import React from "react";
import CalulatorButtons from './calculator_buttons';
class Calculator extends React.Component
{
    constructor(props) {
        super(props);
    }

    handleClick = (id) => {
        this.setState({});
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
                <h1>{this.props.data.toString()}</h1>
                <h1>{this.props.result}</h1>
                <div>
                <CalulatorButtons click={this.handleClick} id="0"/>
                <CalulatorButtons click={this.handleClick} id="1"/>
                <CalulatorButtons click={this.handleClick} id="2"/>
                <CalulatorButtons click={this.handleClick} id="3"/>
                <CalulatorButtons click={this.handleClick} id="4"/>
                <CalulatorButtons click={this.handleClick} id="5"/>
                <CalulatorButtons click={this.handleClick} id="6"/>
                <CalulatorButtons click={this.handleClick} id="7"/>
                <CalulatorButtons click={this.handleClick} id="8"/>
                <CalulatorButtons click={this.handleClick} id="9"/>
                <CalulatorButtons click={this.handleClick} id="="/>
                <CalulatorButtons click={this.handleClick} id="+"/>
                <CalulatorButtons click={this.handleClick} id="-"/>
                <CalulatorButtons click={this.handleClick} id="X"/>
                <CalulatorButtons click={this.handleClick} id="/"/>
                <CalulatorButtons click={this.handleClick} id="."/>
                <CalulatorButtons click={this.handleClick} id="clear"/>
                </div>
            </div>
        )
    }
}

export default Calculator;