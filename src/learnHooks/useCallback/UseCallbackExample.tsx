import { useCallback, useState } from "react"
import SearchInput from "./SearchInput";

type Names = string[];
const allNames : Names = ["Mostafa" , "Ahmed" , "Mohamed" , "Abdalla"]
export default function UseCallbackExample() {
    const [count , setCount] = useState<number>(0);
    const [names , setNames] = useState<string[]>(allNames);

    
    const handleSearch =  useCallback((query : string) => {
        console.log(names[0])
        const filterdNames = allNames.filter((name) => name.includes(query));
        setNames(filterdNames)
    },[names])

    return(
        <div>
           <div>
                <p>count is : {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
           </div>
           
            <SearchInput onChange={handleSearch}/>

            <ul>{names.map((name , idx) => <li key={idx} >{name}</li>)}</ul>
        </div>

    )
}