import { forwardRef, Ref, useImperativeHandle, useRef } from "react";


type RefType = {
  focus : () => void,
}
interface TextInputProps {}

function TextInput(props : TextInputProps , ref : Ref<RefType>) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref , () => {
    return {
      focus : () => {
        if(inputRef.current) {
          inputRef.current.focus()
        }
      }
    }
  })

  return <input type="text" placeholder="type here!" {...props} ref={inputRef}/>;
};

export default forwardRef(TextInput);
