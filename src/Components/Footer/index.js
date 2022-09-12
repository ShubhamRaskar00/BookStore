import "../../assist/CSS/footer.css"
import { Link } from "react-router-dom";
//Footer component
export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <nav>
          {/* company section */}
          <ul className="footer_company">
            <h2>Company</h2>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="social_icons">
            <ul>
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
        </div>
        <div className="footer_text">All copy Rights Reserved by shubhamraskar.in</div>
      </div>
    </footer>
  );
}
