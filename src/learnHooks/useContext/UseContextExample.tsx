import { useState } from 'react';
import MainComponent from './MainComponent';
import { MainComponentContext } from './Context';


export interface User {
 name : string,
 title: string,
 hobbies : string[]
}
function UseContextExample() {
  const [user] = useState<User>({
    title : "this is title",
    name:"Mostafa Mohamed",
    hobbies:["Gaming" , "Fishing" , "Cooking"]
  })
  return (
    <div className='container'>
      <MainComponentContext.Provider value={user}>
       <MainComponent />

      </MainComponentContext.Provider>
    </div>
  )
}

export default UseContextExample;
