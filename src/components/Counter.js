import React from "react";

const Counter = props => {
    return (
        <div className="Counter">
            <b>Todo Count: </b>
            {props.amount}
        </div>
    );
};

export default Counter;
