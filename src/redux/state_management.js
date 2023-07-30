import {createStore} from 'redux';
import {APPEND_DIGIT, APPEND_OPERATOR, CALCULATE, CLEAR} from "./action_constants";
import {appendDigit, appendOperator, calculateResult, clearScreen} from "./actions";
import {computeData} from "./compute_data";
import {addDigit, addOperator} from "./add_data";

const defaultState = {
    data: [],
    result: "",
    display: "",
};

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case APPEND_DIGIT:
            let st1 = addDigit(state.data, state.display, action.digit);
            return {
            data: st1.data,
            result: state.result,
            display: st1.display,
        };

        case APPEND_OPERATOR:
            let st = addOperator(state.data, state.display, action.operator);
            return {
            data: st.data,
            result: state.result,
            display: st.display,
        };

        case CALCULATE: return {
            data: [],
            result: computeData(state.data),
            display: state.display,
        };

        case CLEAR: return {
            data: [],
            result: "",
            display: "",
        };

        default: return state;
    }
}

const store = createStore(dataReducer);

const passStateToProps = (state) => ({
    data: state.data,
    result: state.result,
    display: state.display,
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