import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className='w-full pb-4 border-b-[2px] border-black border-solid'>
            <nav className='flex items-end px-4 pt-4 align-middle'>
                <h3 className='text-2xl g-font'>Google Books</h3>
                <Link to='/' className='pb-0.5 pl-6 hover:text-[#555]'>Search</Link>
                <Link to='/saved' className='pb-0.5 pl-6 hover:text-[#555]'>Saved</Link>
            </nav>
        </div>
    )
}

export default Navigation;