import React, { createContext } from 'react';
import { FirstName, LastName } from './Home';

const ContextA = () => {
  return (
    <>
        <FirstName.Consumer>
            {(fname) => {
                return (
                    <LastName.Consumer>
                        {(lname) => {
                            return(
                                <h2>My name is {fname} {lname}.</h2>
                            )
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
    </>
  );
}

export default ContextA;
