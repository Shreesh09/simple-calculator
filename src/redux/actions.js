import {APPEND_DIGIT, APPEND_OPERATOR, CLEAR, CALCULATE} from "./action_constants";

const appendDigit = (data) => ({
    type: APPEND_DIGIT,
    digit: data,
});

const appendOperator = (operator) => ({
    type: APPEND_OPERATOR,
    operator: operator,
});

const calculateResult = () => ({
    type: CALCULATE,
});

const clearScreen = () => ({
    type: CLEAR,
});

export { appendOperator, appendDigit, calculateResult, clearScreen};