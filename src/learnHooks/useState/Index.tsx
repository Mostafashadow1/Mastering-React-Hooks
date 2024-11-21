import { useState } from 'react';

function UseStatExample() {
  const [count , setCount] = useState(0);
  const handleIncrement = () => {
   setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
  return (
    <div className='container'>
      <p>Count is : {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default UseStatExample
