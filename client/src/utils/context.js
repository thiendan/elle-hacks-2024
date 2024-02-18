import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [homeClick, setHomeClick] = useState(true);
    const [data, setData] = useState(false);
    const [playing, setPlaying] = useState(false);

    return (
        <Context.Provider 
            value={{
                homeClick,
                setHomeClick,
                data,
                setData,
                playing,
                setPlaying,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default AppContext;