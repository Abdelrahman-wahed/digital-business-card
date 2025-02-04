import message from "../images/Icon.png";
import linkedin from "../images/Vector.png";
export default function Btns() {
  return (
    <>
      <a href="#">
        <img src={message} alt="" />
        Email
      </a>
      <a href="#">
        <img src={linkedin} alt="" />
        LinkedIn
      </a>
    </>
  );
}
