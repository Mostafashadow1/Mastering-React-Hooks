import { useRef } from "react";
import TextInput from "./TextInput";

export default function UseImperativeHandle() {
    const inputRef = useRef<HTMLInputElement | null>(null)
    return <div>
        <TextInput ref={inputRef}/>
        <button onClick={() => inputRef.current?.focus()}>focus in input</button>
    </div>
}