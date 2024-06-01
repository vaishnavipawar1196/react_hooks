import React, { useEffect, useState } from "react";

const Useffect = () => {
    const [num,setNum] = useState(0);
    const [nums,setNums] = useState(0);


    useEffect(() => {
        //alert("Clicked!");
        document.title = `You clicked me ${num} times.`
    },[num]);

    useEffect(() => {
        alert("Clicked!");
        //document.title = `You clicked me ${nums} times.`
    },[nums]);

    return (
        <>
            <button onClick={() => {setNum (num + 1)}}>My no. {num}</button>
            <button onClick={() => {setNums (nums + 1)}}>My no. {nums}</button>
        </>
    );
};

export default Useffect;