import MmHeader from "components/organisms/login/MmHeader";
import "../assets/css/App.scss";

function MmLayout(props) {
  localStorage.removeItem("uuid");
  return <>{props.children}</>;
}
export default MmLayout;
