import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
function Logo(props) {
  return (
    <>
      <Link to="/">
        <img src={logo} className={props.className} alt={props.alt} />
      </Link>
    </>
  );
}
export default Logo;
