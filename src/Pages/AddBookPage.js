import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assist/CSS/AddBookPage.css";
//AddBooks Page
export default function ViewBooks(props) {
  const [bookText, setBookText] = useState({});
  // get Id from window url
  const id = useParams().id;
  //Get book id from http://localhost:5000/books/
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setBookText(data.book));
    };
    fetchHandler();
  }, [id]);
  // destructuring All data
  const { image, price, description, name, author, available, _id } = bookText;
  // Apply here
  return (
    <div className="book_container">
      <div className="book_list">
        <div className="image_content">
          <img src={image} alt={name} />
        </div>
        <div className="book_content">
          <h2>{name}</h2>
          <p>{author}</p>
          <span></span>
          <div className="book_price">Rs. {price} /-</div>
          <div className="available">{available}</div>
          <div className="btn buttons">
            <button className="btn btn-outline-secondary mx-3">Buy New</button>
            <Link to={`/cart/${_id}`}>
              <button className="btn btn-outline-danger">Add Cart</button>
            </Link>
            <Link to={`/favorite/${_id}`}>
              <button className="btn mx-3 heart">
                <i class="fa-regular fa-heart"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="book_description">
        <p>{description}</p>
      </div>
    </div>
  );
}
