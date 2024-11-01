import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}
              id="wd-counter-up-click" style={{ backgroundColor: 'green', color:'white', borderRadius: '10px' , marginRight: '10px' , border: 'none' , padding: '10px 20px',  fontSize: '16px' }}>Up</button>

      <button onClick={() => setCount(count - 1) }
              id="wd-counter-down-click" style={{ backgroundColor: 'red', color:'white', borderRadius: '10px' , border: 'none', padding: '10px 20px',  fontSize: '16px'  }}>Down</button>
<hr/></div>);}