import { createContext } from "react";
import { User } from "./UseContextExample";

export const MainComponentContext = createContext<User | undefined>(undefined)