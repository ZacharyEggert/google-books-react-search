import axios from 'axios';
import React from 'react';

const Book = (props) => {

    const { book, saved, setSavedBooks } = props
    // eslint-disable-next-line no-unused-vars
    const { title, authors, description, image, link, id, textSnippet } = book;

    const save = () => {
        axios.post('/api/saved/'+id, {book})
    }

    const unsave = () => {
        axios.delete('/api/saved/'+id)
        .then(response => {
            if(response.status < 300){return response} 
            throw new Error(response)
        })
        .then(({data}) => {
            console.log(data);
            setSavedBooks(data)
        })
        .catch(error => console.error(error))
    }

    const handleSave = () => {
        if(saved){
            unsave();
        }else{
            save();
        }
    }

    return (
        <div className='w-full p-2 border-2 border-black border-solid'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-lg'>{title}</h4>
                    <p className='text-xs'>Written By {authors.join(', ')}</p>
                </div>
                <div>
                    <a href={link}><button className='px-2 m-1 bg-white border-2 border-black border-solid shadow-md'>View</button></a>
                    {saved?
                        <button className='px-2 m-1 bg-white border-2 border-black border-solid shadow-md' onClick={handleSave}>Unsave</button>
                        :<button className='px-2 m-1 bg-white border-2 border-black border-solid shadow-md' onClick={handleSave}>Save</button>
                    }
                </div>
            </div>
            <div className='flex mt-4'>
                <img alt={title} src={image} className='w-32 mr-4 md:w-48'/>
                <p className=''>
                    {description || textSnippet}
                </p>
            </div>
        </div>
    )
}

export default Book;