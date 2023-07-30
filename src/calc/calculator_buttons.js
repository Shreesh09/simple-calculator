import React from "react";
import './calc_style.css'
class CalculatorButtons extends React.Component
{
    handleClick = () => {
        document.getElementById(this.props.id).classList.add("clicked");
        window.setTimeout(() => {
            document.getElementById(this.props.id).classList.remove("clicked");
        }, 100);
        this.props.click(this.props.value);
    }

    render() {
        let buttonName = this.props.value;
        if(buttonName === 'clear')
            buttonName = 'AC';
        return (
            <div value={this.props.value} id={this.props.id} onClick={this.handleClick}>
                <p>{buttonName}</p>
            </div>
        );
    }
}

export default CalculatorButtons