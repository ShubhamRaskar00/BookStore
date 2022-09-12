const Book = require("../model/Book");
// Get all books 
const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ massage: "No Books found" });
  }
  return res.status(200).json({ books });
};

// Add name, description, author, price, available, image in the database
const addbook = async (req, res) => {
  const { name, description, author, price, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      available,
      image
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to Add Book" });
  }
  return res.status(201).json({ book });
};
// Get book id
const getById = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ massage: "No Books found" });
  }
  return res.status(200).json({ book });
};

//export from router
exports.getAllBooks = getAllBooks;
exports.addbook = addbook;
exports.getById = getById;
