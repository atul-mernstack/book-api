const Book = require("../models/bookModel");


//create book
exports.createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);

        res.status(201).json({
            success: true,
            book
        })
    } catch {
        res.status(404).json({
            success: false,
            message: "Somthing went wrong!"
        })
    }
}

//get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (Array.isArray(books) && books.length==0) {
            res.status(404).json({
                success: false,
                message: "Books not found!"
            })
        }

        res.status(200).json({
            success: true,
            books
        });
    } catch {
        res.status(404).json({
            success: false,
            message: "Somthing went wrong!"
        })
    }
}

//get book by id
exports.getBookById = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({
                success: false,
                message: "Book not found!"
            })
        }
        res.status(200).json({
            success: true,
            book
        })
    }catch{
        res.status(404).json({
            success: false,
            message: "Somthing went wrong!"
        })
    }
   
}

//Update book
exports.updateBook = async (req, res) => {
    try{
        let book = await Book.findById(req.params.id);

        if (!book) {
            res.status(404).json({
                success: false,
                message: "Book not found!"
            })
        }
        book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
    
        res.status(200).json({
            success: true,
            book
        })
    }catch{
        res.status(404).json({
            success: false,
            message: "Somthing went wrong!"
        })
    }   
}

//Delete book
exports.deleteBook = async (req, res) => {
    try{
        await Book.findByIdAndRemove(req.params.id);   
    res.status(200).json({
        success: true,
        message: "Book deleted successfully"
    })
    }catch{
        res.status(404).json({
            success: false,
            message: "Somthing went wrong!",            
        })
    }    
}

