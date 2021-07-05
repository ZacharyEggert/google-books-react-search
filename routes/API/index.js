const Book = require('../../models/Book');

const router = require('express').Router();

router.get('/saved', async (req, res) => {
    const books = await Book.find()
    
    console.log({books});
    res.json(books);
    return;

} );

router.get('/saved/:id', async(req, res) => {

    const {id} = req.params;

    const book = await Book.findOne({id});
    res.json(book)

})

router.post('/saved/:id', async (req, res) => {
    const { book } = req.body;
    const {id} = req.params;

    const exists = await Book.findOne({id})
    if(exists){
        res.json(exists);
        console.log({exists})
        return;
    }
    const newBook = await Book.create(book);
    res.json(newBook)
    console.log({newBook})
    
})

router.delete('/saved/:id', async (req, res) => {
    const {id} = req.params;

    await Book.deleteOne({id});

    const books = await Book.find();

    console.log({books});
    res.json(books);
    return;
})


router.get('/', async (req, res) => {

    const books = await Book.find();

    let booksObj = {};

    if(books && books?.length > 0){
        books.forEach(book => {
            booksObj[book.id] = book;
    })
    }

    res.json({saved: booksObj})
})

module.exports = router;