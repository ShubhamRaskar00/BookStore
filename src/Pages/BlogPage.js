import "../assist/CSS/BlogPage.css";
// Blog Page
export default function BlogPage() {
  return (
    <div className="blog_container">
      <div className="blog_header">
        <div className="blog_title">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="blog_content">
        <div className="blog_list">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8X4_gR2KPr6Xn4fxCCo5iDmS08ydhzLKdIA&usqp=CAU"
            alt="img1"
          />
          <p>book blog 1</p>
        </div>
        <div className="blog_list">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8YgIDjVsM60cZMvxAfXITAI46uw1hGZQuw&usqp=CAU"
            alt="img2"
          />
          <p>book blog 2</p>
        </div>
        <div className="blog_list">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5DDNCQTpLn3zxTCnm7N-VWmjxbsi1WZrxw&usqp=CAU"
            alt="img3"
          />
          <p>book blog 3</p>
        </div>
      </div>
      <div class="blog_Article">
        <div className="blog_navigation">
            <h3>New blog</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFy4ep2xS9ScmerxFd3py7O4_9CnBzJCHN7g&usqp=CAU" />
            <div className="blog_text">
                <p>today blog</p>
            </div>
        </div>
      </div>
    </div>
  );
}
