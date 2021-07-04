import React from 'react';
import Book from './Book';

const ResultsList = (props) => {

    const {searchState} = props.state;

    const {results} = searchState;

    return (
        <div className='w-full px-2 py-2 pb-4 my-4 border-2 border-black border-solid'>
            <h4 className='mb-2 text-lg'>Results</h4>
            {results.map(book => 
                <Book book={book} key={book.id + 'res'} />
            )}
        </div>
    )
}

export default ResultsList;