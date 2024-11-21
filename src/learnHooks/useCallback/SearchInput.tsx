import { memo } from "react";

interface SearchProps {
    onChange : (query : string) => void;
}
function SearchInput ({onChange} : SearchProps) {
    console.log('search component renderd')
    return (
        <input type="text" placeholder="search..." onChange={(e) => onChange(e.target.value)}/>
        
    )
}

export default memo(SearchInput);