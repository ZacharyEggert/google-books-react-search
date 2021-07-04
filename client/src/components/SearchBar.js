import React from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    
    const {searchState, setSearchState} = props.state;

    const handleChange = (event) => {
        setSearchState({...searchState, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`/api/search/${searchState.search}`)
        .then(response => {
            if(response.status < 300){
                return response;
            }else{
                throw new Error(response)
            }
        })
        .then(response => {
            // console.log(response)
        }).catch(error => console.error(error))
    }

    return (
        <div className='w-full px-2 py-2 my-4 border-2 border-black border-solid'>
            <h4 className='text-lg'>Book Search</h4>
            <p className='py-4 text-xs'>Book</p>
            <input className='w-full px-1 border-2 border-black outline-none' value={searchState.search} onChange={handleChange} name='search'/>
            <div className='flex flex-row-reverse'><button className='px-2 my-2 bg-white border-2 border-black border-solid shadow-md' onClick={handleSubmit}>Search</button></div>
        </div>
    )
}

export default SearchBar;