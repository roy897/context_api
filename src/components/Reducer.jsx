import React, { useReducer } from 'react';
//reducer(state, action)


const reducer = (counter, {type, payload}) => {
  switch (type) {
      case "INCREMENT": {
          return counter + payload;
      }
      case "DECEREMENT":{
          return counter - payload;
      }          
      default:{
          console.log( "Type incorect", type);
          return counter;
      }         
  }
}

const Reducer = () => {
    const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
     Counter: {counter}
        <div>
          {/* dispatch is like function call */}
            <button onClick={()=>dispatch({type:"DECEREMENT", payload: 1})}>-</button>
            <button onClick={()=>dispatch({type: "INCREMENT", payload: 100})}>+</button>
        </div>
    </div>
  )
}

export default Reducer;
