import React, { useContext } from "react";
import { FirstName,LastName } from "./Home";

const Context_Hook = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (
        <>
            <h2>My name is {fname} {lname}.</h2>
        </>
    )
}

export default Context_Hook;