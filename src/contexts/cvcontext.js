import React, {createContext, useState} from 'react';
import { peterMujuni } from '../util/cvData'; 

export const CVContext = createContext();

export const CVContextProvider = (props) => {
    const [cv, setCV] = useState(peterMujuni);

    return (
        <CVContext.Provider value={{cv}}>
            {props.children}
        </CVContext.Provider>
    );
    
}

