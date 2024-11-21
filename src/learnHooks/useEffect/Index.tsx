import {  useEffect, useState } from 'react';
function useEffectExample() {
  const [count , setCount] = useState<number>(0);
  useEffect(() => {
    // code will run 
    console.log("count is :" , count);

    // optional function 
    return () => {
      console.log('cleand effect')
    }
  } , [count])
  return (
    <div className='container'>
      <p>Count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default useEffectExample;
