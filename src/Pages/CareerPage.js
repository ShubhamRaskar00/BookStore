import "../assist/CSS/CareerPage.css";
//Career Page
export default function CareerPage() {
  return (
    <div className="career_container">
      <div className="career_header">
        <img src="https://s35764.pcdn.co/wp-content/uploads/2021/09/career-pathing-2.png" />
      </div>
      <h1>Carres</h1>

      <div className="career_image">
        <img src="https://img.freepik.com/free-vector/professional-career-elements-design_1200-212.jpg?w=2000" />
      </div>
      <div className="career_content">
        <div className="career_table">
          <div className="table">
            <div className="icons">
              <i class="fa-solid fa-comments"></i>
            </div>
            <h3>Personal and professional growth</h3>
            <p>Bookswagon is a company run by a group of people who are passionate about their work. Every member is bestowed with a responsibility that is expected to be done with punctuality and efficiency and above all honesty. At the prime core, Bookswagon hopes to mould its employees into better human beings who are best at their jobs so that no matter which part of the country they are in or go to, they always represent themselves with strong personalities.</p>
          </div>
        </div>
        <div className="career_table">
          <div className="table">
            <div className="icons">
              <i class="fa-solid fa-face-laugh-beam"></i>
            </div>
            <h3>Positive and happy workspace</h3>
            <p>It is believed at Bookswagon that a comfortable workspace is a key towards efficient functioning of any company. All the workers are ensured of a space that gives them encouragement and support for whatever work they do. Every employee is treated with equality and no kind of gender biasedness exists here as it is a place that crowns pure talent and hard work. Come and be a part of one of the biggest growing book websites where you can sharpen your skills and add that to the experience of professional work.</p>
          </div>
        </div>
        <div className="career_table">
          <div className="table">
            <div className="icons">
              <i class="fa-solid fa-earth-americas"></i>
            </div>
            <h3>Discover the hidden potentials</h3>
            <p>Every working member of Bookswagon is challenged with situations that eventually help them to re-discover their working potentials and grow linearly in their stream of work. The challenges thrown are like that pressure that carves a diamond out of coal. And with time the members of Bookswagon have proved themselves to be the metaphor of diamonds. The innovative, strategic, and creative ideas of the members are recognized and applauded by all because Bookswagon believes that the growth of any company lies in the unity of the workers. If the workers are united to give their best then nothing can stop the company to climb the stairs of success.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
