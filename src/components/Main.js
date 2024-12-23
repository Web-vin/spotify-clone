import React from "react";
import "../css/style.css";
import Artist1 from "../img/Artist2.jpg"
import Artist2 from "../img/sachin-jigar.webp"
import Artist3 from "../img/Arijitsingh.png"
import Artist4 from "../img/A R rahman].jpg"
import Artist5 from "../img/vishal shekher.jpg"
import Artist6 from "../img/atifaslam.webp"
import Artist7 from "../img/anirudhravichandar.jpg"
import Album1 from "../img/honeysingh2.jpg"
import Album2 from "../img/ashiqui2.webp"
import Album3 from "../img/patandar.jpg"
import Album4 from "../img/jotummereho.jpg"
import Album5 from "../img/makingmemories.jpg"
import Album6 from "../img/yjhd.jpg"
import Album7 from "../img/animal.jpg"

function Main() {
  return (
    <div className="con">
      <div className="box1">
        <div>
          <div className="left">
            <h4>your Library</h4>
            <div className="right">plus icon</div>
            <br />
            <br />

            <div className="col1">
              <h5>Create your first playlist</h5>
              <p>it's easy we will help you</p>
              <button>create playlist</button>
            </div>
            <br />
            <div className="col1">
              <h5>Let's find Some prodcasts to follow</h5>
              <p>We'll keep you updated on new episodes</p>
              <button>Browse podcasts</button>
            </div>
            <div className="links">
              <div>
                <a href="#">Legal</a>
              </div>
              <div>
                <a href="#">Safety and privacy center</a>
              </div>
              <div>
                <a href="#">privacy policy</a>
              </div>
            </div>
            <div className="links">
              <div>
                {" "}
                <a href="#">Cookies</a>
              </div>
              <div>
                {" "}
                <a href="#">About ads</a>
              </div>
              <div>
                {" "}
                <a href="#">Accessibility</a>
              </div>
            </div>
            <div className="links">
              <div>
                <a href="#">Cookies</a>
              </div>
            </div>
            <div className="language">
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box2">
        <div className="container3">
          <div className="left">
          <h4 className="pink">Popular Artist</h4>
            <div className="flex-box1">
            
              <div className="card">
             
                <img src={Artist1} alt="this is image" />
                <h5>Pritam</h5>
                <p>
                  <strong>Artist</strong>
                </p>
              </div>
              <div className="card">
                <img src={Artist2} alt="this is image" />
                <h5>Sachin-Jigar</h5>
                <p>
                  <strong>Artist</strong>
                </p>
              </div>
              <div className="card">
                <img src={Artist3} alt="this is image" />
                <h5>Arijit Singh</h5>
                <p>
                  <strong>Artist</strong>
                </p>
              </div>
              <div className="card">
                <img src={Artist4} alt="this is image" />
                <h5>A R Rahman</h5>
                <p>
                  <strong>Artist</strong>
                </p>
              </div>
              <div className="card">
                <img src={Artist5} alt="this is image" />
                <h5>Vishal Shekhar</h5>
                <p>
                  <strong>Artist</strong>
                </p>
              </div>
              <div className="card">
                <img src={Artist6} alt="this is image" />
                <h5>Atif Aslam</h5>
                <p>
                  <strong>Artist</strong>
                </p>
              </div>
              <div className="card">
                <img src={Artist7} alt="this is image" />
                <h5>Anirudh Ravichandar</h5>
                <p>
                  <strong>Artist</strong>
                </p>
              </div>
            </div>
            <h4 className="pink">Popular albums and singles</h4>
            <div className="flex-box">
             <div className="card2">
                <img src={Album1} alt="this is image" />
                <h5>Glory</h5>
                <p>
                  <strong>Yo yo Honey Singh</strong>
                </p>
              </div>
              <div className="card2">
                <img src={Album2} alt="this is image" />
                <h5>Ashiqui 2</h5>
                <p>
                 <strong>Mithoon,Ankit Tiwari,<br />
                 Jeet Ganguli</strong>
                </p>
              </div>
              <div className="card2">
                <img src={Album3} alt="this is image" />
                <h5>Patandar</h5>
                <p>
                  <strong>Arjan Dhillon, Mxrci</strong>
                </p>
              </div>
              <div className="card2">
                <img src={Album4} alt="this is image" />
                <h5>jo tum mere ho</h5>
                <p>
                  <strong>Anuv Jain</strong>
                </p>
              </div>
              <div className="card2">
                <img src={Album5} alt="this is image" />
                <h5>making memories</h5>
                <p>
                  <strong>karan ajula,Ikky</strong>
                </p>
              </div>
              <div className="card2">
                <img src={Album6} alt="this is image" />
                <h5>Yeh Jawaani Hai Deewani</h5>
                <p>
                  <strong>Pritam</strong>
                </p>
              </div>
              <div className="card2">
                <img src={Album7} alt="this is image" />
                <h5>ANIMAL</h5>
                <p>
                  <strong>Manan Bharadwaj,Vishal Mishra,Jaani</strong>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
