import React, { useState } from 'react';
import SearchResult from './SearchResult';

const inputStyle = {
    padding: '10px',
    borderRadius: '50px'
};


const Search = () => {
    
    const [txt,setTxt] = useState("");

    const inputEvent = (event) => {
        const val = event.target.value;
        console.log(val);
        setTxt(val);
    };

    return(
        <>
            <div style={{marginTop:'50px'}}>
                <input style={inputStyle} value={txt} onChange={inputEvent} type='text' placeholder='Search here..' />
            </div>
            <div>
                {txt === "" ? null : <SearchResult name={txt} />}
            </div>
        </>
    );
}

export default Search;