// import Btns from "./Btns";
import Btn from "./Btn"
export default function Main() {
  return (
    <>
      <h1 className="name-employee">Abdelrahman</h1>
      <h2 className="job">Frontend Developer</h2>
      <p className="desc">laurasmith.website</p>
      <div className="content">
        {/* <Btns /> */}
        <Btn />
        <div>
          <h1>About</h1>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div>
          <h1>Interests</h1>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </>
  );
}
