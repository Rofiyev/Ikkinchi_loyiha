import img1 from "./img1.webp";
import img2 from "./img2.webp";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <div className="home">
        <div className="container">
          <nav>
            <h3>K. Griffith</h3>
            <ul>
              <li>
                <a href="#">Appearances</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <header>
          <div className="conatiner">
            <section>
              <div className="images">
                <img src={img1} alt="Rasm" />
              </div>
              <div className="title">
                <h1>Kayla Griffith</h1>
                <h3>Award Winning Author</h3>
              </div>
            </section>
          </div>
        </header>
      </div>
      <div className="books">
        <div className="container">
          <div className="box">
            <div className="title">
              <span>New Release</span>
              <h2>The Swan Isle</h2>
              <h4>(2023)</h4>
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                Its easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Im a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <h3>Order Now</h3>
              <div className="btns">
                <button className="btn">Amazon</button>
                <button className="btn">Google</button>
                <button className="btn">ibooks</button>
              </div>
            </div>
            <div className="images">
              <img src={img2} alt="Rasm" />
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="container">
          <h1>Praise & Reviews</h1>
          <div className="cards">
            <div className="card">
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                Its easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Im a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p>
                Swan Isle is Griffith's best writing yet” The Times Book Review
              </p>
            </div>
            <div className="card">
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                Its easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Im a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p>‘Gripping storytelling’ The Good Read Blog</p>
            </div>
            <div className="card">
              <p>
                I'm a paragraph. Click here to add your own text and edit me.
                Its easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Im a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p>
                Grifith’s voice tells the story of all women “The Seattle Post
                Review”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="upcom">
        <h1>See Upcoming Appearances</h1>
        <p>
          I'm a paragraph. Click here to add your own <br /> text and edit me.
          It's easy.
        </p>
        <div className="boxs">
          <div className="box">
            <h3>
              January 18th 2023, The Breakfast Club, Virtual Book Reading of
              Swan Isle, 7PM - 8PM EST
            </h3>
            <button className="btn">Join</button>
          </div>
          <div className="box">
            <h3>
              March 2nd 2023, Otto Cafe, Online Book Reading With Kayla
              Griffith, 3PM - 4PM EST
            </h3>
            <button className="btn">Join</button>
          </div>
          <div className="box">
            <h3>
              January 31st 2023, The Good Read Club, Online Conversation with
              Kayla Griffith, 8PM - 9PM EST
            </h3>
            <button className="btn">Join</button>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="info">
            <img src={img1} alt="Rasm" />
            <h1>About Kayla Griffith</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
      <footer>
        <span>© 2023 by K.Griffith. Proudly created with Wix.com</span>
      </footer>
    </div>
  );
}

export default App;
