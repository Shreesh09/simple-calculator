import React from "react";
class CalculatorButtons extends React.Component
{
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.click(this.props.id);
    }

    render() {
        return (
            <button id={this.props.id} onClick={this.handleClick}>{this.props.id}</button>
        );
    }
}

export default CalculatorButtons