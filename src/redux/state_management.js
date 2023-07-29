import {createStore} from 'redux';
import {APPEND_DIGIT, APPEND_OPERATOR, CALCULATE, CLEAR} from "./action_constants";
import {appendDigit, appendOperator, calculateResult, clearScreen} from "./actions";
import {computeData} from "./compute_data";
import {addDigit, addOperator} from "./add_data";

const defaultState = {
    data: [],
    result: "",
};

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case APPEND_DIGIT: return {
            data: addDigit(state.data, action.digit),
            result: state.result,
        };
        case APPEND_OPERATOR: return {
            data: addOperator (state.data, action.operator),
            result: state.result,
        }
        case CALCULATE: return {
            data: [],
            result: computeData(state.data),
        }
        case CLEAR: return {
            data: [],
            result: "",
        }
        default: return state;
    }
}

const store = createStore(dataReducer);

const passStateToProps = (state) => ({
    data: state.data,
    result: state.result,
});

const passActionsToProps = (dispatch)  => ({
   submitDigit(digit)
    {
        dispatch(appendDigit(digit));
    },
    submitOperator(operator){
       dispatch(appendOperator(operator));
    },
    submitExpression() {
       dispatch(calculateResult());
    },
    submitReset() {
       dispatch(clearScreen());
    }
});

export {store, passStateToProps, passActionsToProps};