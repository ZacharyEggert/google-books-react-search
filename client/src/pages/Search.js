import React, { useState } from 'react';
import TitleCard from '../components/TitleCard';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const Search = () => {
    
    const initialState = {
        search:'Harry Potter', 
        results:[
            {
                title:'Harry Potter and That Time Hermione Was a Cat',
                authors:['J.K. Rowling'],
                description:'Harry Potter hopes this doesn\'t awaken anything inside him, in this all new instant classic set in between years 3 and 4 at Hogwarts.',
                image:'https://placekitten.com/g/200/250',
                link:'https://google.com/',
                id:'444'
            },
            {
                title:'Harry Potter and That Time Hermione Was a Cat',
                authors:['J.K. Rowling'],
                description:'Harry Potter hopes this doesn\'t awaken anything inside him, in this all new instant classic set in between years 3 and 4 at Hogwarts.',
                image:'https://placekitten.com/g/200/250',
                link:'https://google.com/',
                id:'445'
            },
        ]
    }

    // eslint-disable-next-line no-unused-vars
    const [searchState, setSearchState] = useState(initialState);

    return (
        <div className='h-[calc(100vh-82px)] px-4 pt-4'>
            {/* <div className='block h-20'></div> */}
            <TitleCard />
            <SearchBar state={{searchState, setSearchState}} />
            {
                searchState.results.length !== 0 ?
                (
                    <ResultsList state={{searchState, setSearchState}} />
                ) : null
            }
            
        </div>
    )
}

export default Search;