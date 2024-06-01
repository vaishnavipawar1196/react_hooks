import React, { createContext } from 'react';
import ContextA from './ContextA';
import Context_Hook from './Context_Hook';
import Useffect from './Useffect';
    
const FirstName = createContext();
const LastName = createContext();

const Home = () => {

    return(
        <>
            <FirstName.Provider value={"Vaishnavi"}>
            <LastName.Provider value={"Tech"}>
                <ContextA />
                <Context_Hook />
            </LastName.Provider>
            </FirstName.Provider>

            <Useffect />
        </>
    );
};

export default Home;
export {FirstName,LastName};