import React from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    
    const {searchState, setSearchState} = props.state;

    const handleChange = (event) => {
        setSearchState({...searchState, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/search', {baseUrl:`https://www.googleapis.com/books/v1/volumes?q=${searchState.search}`})
        .then(response => {
            if(response.status < 300){
                console.log(response)
                return response;
            }else{
                throw response
            }
        })
        .then(response => {
            // console.log(response)
            const results = response.data.items.map(item => {

                const {description, textSnippet, authors, canonicalVolumeLink, imageLinks, title} = item.volumeInfo;

                return {
                    id:item.id, 
                    description: description || null, 
                    textSnippet:textSnippet || null, 
                    authors:authors || [],
                    link:canonicalVolumeLink || 'https://www.google.com/', 
                    image:imageLinks?.thumbnail||null, 
                    title:title || null }

            })

            setSearchState({...searchState, results})
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