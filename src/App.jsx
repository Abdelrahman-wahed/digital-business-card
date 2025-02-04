import "./Dark.css";
import "./Lite.css";
import photo from "./images/Rectangle 90.png";
import Main from "./components/Main";
import Footer from "./components/Footer";
function Dark() {
  return (
    <div className="card">
      <img src={photo} alt="photo" />
      <Main />
      <Footer />
    </div>
  );
}

export default Dark;
