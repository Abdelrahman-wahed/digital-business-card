import x from "../images/Twitter Icon.png"
import facebook from "../images/Facebook Icon.png"
import insetgram from "../images/Instagram Icon.png"
import github from "../images/GitHub Icon.png"
export default function Footer() {
  return (
    <div className=" contact">
      <img src={x} alt="Twitter" />
      <img src={facebook} alt="Facebook" />
      <img src={insetgram} alt="Instagram" />
      <img src={github} alt="GitHub" />
    </div>
  );
}
