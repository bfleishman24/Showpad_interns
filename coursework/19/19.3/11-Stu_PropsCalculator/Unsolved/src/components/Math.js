import React from 'react';

const Math = (props) => {
    let result;
    switch (props.operator) {
        case '+':
            result = props.num1 + props.num2;
            break;
        case '-':
            result = props.num1 - props.num2;
            break;
        case '*':
            result = props.num1 * props.num2;
            break;
        case '/':
            result = props.num1 / props.num2;
            break;
        default:
            result = 'Try Again';
            break;
    }

    return (<b>{result}</b>)
};

export default Math;



export default Math;