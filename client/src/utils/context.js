import { createContext, useEffect, useState } from "react";
import {useLocation} from "react-router-dom";
import { fetchDataFromApi } from "./api";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [homeClick, setHomeClick] = useState(true);
    const [data, setData] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [interviewsCompleted, setInterviewsCompleted] = useState(0);
    
    const [communication, setCommunication] = useState(0); // 1
    const [problemSolving, setProblemSolving] = useState(0); // 2
    const [agileMethod, setAgileMethod] = useState(0); // 3
    const [criticalThinking, setCriticalThinking] = useState(0); // 4
    const [organization, setOrganization] = useState(0); // 5
    const [algorithms, setAlgorithms] = useState(0); // 6

    const[top3, setTop3] = [1, 2, 3]
    const[worst3, setWorst3] = [4, 5, 6]

    const handleAddInterviews = (quantity) => {
        let count = quantity+1;
        setInterviewsCompleted(count);
    };


    return (
        <Context.Provider 
            value={{
                homeClick,
                setHomeClick,
                data,
                setData,
                playing,
                setPlaying,
                interviewsCompleted,
                setInterviewsCompleted,
                handleAddInterviews,
                communication,
                setCommunication,
                problemSolving,
                setProblemSolving,
                agileMethod, 
                setAgileMethod,
                criticalThinking,
                setCriticalThinking,
                organization,
                setOrganization,
                algorithms,
                setAlgorithms,
                top3,
                setTop3,
                worst3,
                setWorst3,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default AppContext;