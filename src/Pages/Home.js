import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import FrontImage from "../assets/G3FrontPage.png";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${FrontImage})`}}>
      <div className="headerContainer">
          <h1>דפיברילטור חצי אוטומטי Powerheart G3</h1>
          <p>
          הדפיברילטור החצי אוטומטי הנפוץ בישראל  
          פשוט להפעלה עם לחצן הפעלה אחד,
          מוכן תמיד עם סדרת בדיקות עצמיות יומיות לכל אביזריו,
          חכם באיתור הפרעות קצב ויעיל במתן הטיפול.  
          ובנוסף מינימום דרישות אחזקה.
          תכונות אלו הפכו את מכשיר ההחייאה ה Powerheart AED G3 למכשיר ההחייאה מהנפוצים בעולם והנפוץ ביותר בישראל. 
          </p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
      </div>
    </div>
  );
}

export default Home;
