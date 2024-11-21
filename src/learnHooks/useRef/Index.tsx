import { useEffect, useRef, useState } from 'react';

function UseRefExampleOne() {
 const refCount = useRef<number>(0);
 const [count , setCount] = useState<number>(0)

 const handleIncrement = () => {
  setCount(count + 1)
  refCount.current++;
  console.log('state count is ' , count) 
  console.log('ref count is '  , refCount.current) 
 }
 const handleDecrement = () => {
  setCount(count - 1)
  refCount.current--;
  console.log('state count is ' , count) 
  console.log('ref count is '  , refCount.current) 
 }

  return (
    <div className='container'>
      <p>Ref count is : {refCount.current}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

 function UseRefExampleTwo() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
      inputRef.current?.focus()
    } , [])

    return(
    <div className='container'> 
      <input type="text" placeholder='type text...' ref={inputRef}/>
    </div>
    )
}
