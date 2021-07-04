import React, { useEffect, useState } from 'react';
import TitleCard from '../components/TitleCard';
import SavedBooks from '../components/SavedBooks.js';
import NoSaved from '../components/NoSaved';
import Loading from '../components/Loading';
import axios from 'axios';

const Saved = () => {

    let savedBooks = [];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        axios.get('/api/saved')
        .then(response => {
            if(response.status < 300){return response} 
            throw new Error(response)
        })
        .then(response => {
            console.log(response);
            setLoading(false);
        })
        .catch(error => console.error(error))
        
    }, [])

    return (
        <div className='h-[calc(100vh-82px)] px-4 pt-4'>
            {/* <div className='block h-20'></div> */}
            <TitleCard />
            {loading?
                <Loading />
                :(savedBooks?
                    <SavedBooks savedBooks={savedBooks}/>
                :<NoSaved />)}
            
        </div>
    )
}

export default Saved;