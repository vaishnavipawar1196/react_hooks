import react from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return(
        <>
            <h1>404 Error!</h1>
            <h2>Sorry,this page doesn't exist!</h2>
            <NavLink to={"/"}>Go back to HOME</NavLink>
        </>
    );
}

export default Error;