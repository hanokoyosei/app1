import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter]= useState(0)

    function increment(){
     setCounter(counter + 1)
    }

    function decrement(){
        setCounter(counter - 1)
    }

    return (
        <div>
            <p> Вы нажали {counter} раз</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;