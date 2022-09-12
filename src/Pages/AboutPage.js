import "../assist/CSS/AboutPage.css";
// About Page
export default function AboutPage() {
  return (
    <div className="about_container">
      <div className="about_header">
        <div className="about_logo">
          <img src="https://govindamtc.com/img/aboutbanner.png" />
        </div>
      </div>
      <div className="about_text">
        <h3>This is simple book store application</h3>
        <p>
          <span>Here collection of All books</span> Just ask for book we Provide
          you thank you
        </p>
      </div>
    </div>
  );
}
