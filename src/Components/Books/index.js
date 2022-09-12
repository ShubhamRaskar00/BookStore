import "../../assist/CSS/book.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// node.js,express backend link
const URl = "http://localhost:5000/books";

//get data from http://localhost:5000/books by using axios
const fetchHandler = async () => {
  return await axios.get(URl).then((res) => res.data);
};
// Books Component
export default function Books() {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <div className="container">
      {books &&
        books.map((book, i) => {
          const { image, name, author, price, _id } = book;
          return (
            <div className="content">
              <img src={image} className="style.Book_img" />
              <h2>{name}</h2>
              <p>{author}</p>
              <div className="price">Rs {price}</div>
              <Link to={`/books/${_id}`}>
                <button className="custom_btn btn_16"> Quick View</button>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
