import { useDeferredValue, useEffect, useState } from "react"
import SearchResults from "./SearchResults";

export default function UseDeferredValueExample() {
    const [query , setQuery] = useState<string>('shadow coding');
    const deferredQuery = useDeferredValue(query)
   useEffect(() => {
    console.log('query' , query)
    console.log('deferredQuery' , deferredQuery);
    console.log('##########')
   } , [query , deferredQuery])
    return(
       <>
         <input value={deferredQuery} onChange={e => setQuery(e.target.value)} />
         <SearchResults query={query} />
       </>
    ) 
}