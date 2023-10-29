const express=require('express');
const { createBook, getBookById, getAllBooks, updateBook, deleteBook } = require('../controllers/bookControllers');
const router=express.Router();

router.route('/book/new').post(createBook);
router.route('/books').get(getAllBooks);
router.route('/book/:id').get(getBookById);
router.route('/book/:id').put(updateBook);
router.route('/book/:id').delete(deleteBook);

module.exports=router;
