import React, { useState } from "react";
export default function() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} style={{ backgroundColor: 'green', color:'white', borderRadius: '10px' , marginLeft: '10px', marginBottom: '10px' , border: 'none' , padding: '8px 8px',  fontSize: '16px' }}>Add Element</button>
      <ul style={{ padding: 0, margin: 0 }}>
        {array.map((item, index) => (
          <li key={index} style={{listStyleType: 'none'}}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              border: '1px solid #ddd',  
              borderRadius: 
                index === 0 ? '8px 8px 0 0' :               
                index === array.length - 1 ? '0 0 8px 8px' : 
                '0',          
              backgroundColor: '#ffffff', 
              marginLeft: '10px',
              fontSize: '24px' 
            }}>
                <strong>{item}</strong>
                <button onClick={() => deleteElement(index)}
                        id="wd-delete-element-click"
                        style={{ backgroundColor: 'red', color:'white', borderRadius: '10px' , marginLeft: '10px' , border: 'none' , padding: '10px 10px',  fontSize: '16px' }}>
                Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}

