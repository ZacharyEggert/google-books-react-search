import React from 'react';
import Book from './Book';

const SavedBooks = (props) => {

    const {savedBooks} = props;

    return (
        <div className='w-full px-2 py-2 pb-4 my-4 border-2 border-black border-solid'>
            <h4 className='mb-2 text-lg'>Saved Books</h4>
            {savedBooks?savedBooks.map(book => 
                <Book book={book} key={book.id + 'res'} saved={true} />
            ):null}
        </div>
    )
}

export default SavedBooks;