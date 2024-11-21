import { useContext } from "react";
import { MainComponentContext } from "./Context";

export  function useUserContext () {
    const user = useContext(MainComponentContext);
    if(user === undefined) {
        throw new Error('when you use useUserContext must use with MainComponentContext');
    }

    return user;

}