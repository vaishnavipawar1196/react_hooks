import react from 'react';

const SearchResult = (props) => {
    const img=`https://source.unsplash.com/random/300×300?${props.name}`;
    return(
        <>
            <img src={img} />
        </>
    );
}

export default SearchResult;