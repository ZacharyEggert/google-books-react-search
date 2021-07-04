require('dotenv').config();

const getGoogleUrl = ({ searchTerm, author, }) => {
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    const query = `?q=${searchTerm}${author?`+inauthor:${author}`:null}`
    const keySection = `&key=${process.env.GOOGLE_API_KEY}`;

    return (baseUrl + query + keySection);

}

// console.log(getGoogleUrl({searchTerm: 'flowers', author: 'keyes'}))

module.exports = {getGoogleUrl}