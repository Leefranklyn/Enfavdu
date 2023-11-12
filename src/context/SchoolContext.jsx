import { createContext, useState } from "react";

export const SchoolContext = createContext(null);

export function SchoolProvider({ children }) {

    const [info, setInfo] = useState(null)


    return <SchoolContext.Provider value={{ info, setInfo }}
    >{children}</SchoolContext.Provider>;
}