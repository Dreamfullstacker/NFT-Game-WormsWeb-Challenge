import "../assets/css/App.scss";
import "assets/css/templates/marketplace.scss";
import api from "../util/api.js";
import { useEffect, useState } from "react";

import MmLayout from "./MmLayout";
import MmLoginPage from "../pages/MmLogin";

function WalletLayout(props) {
  // const verify = localStorage.getItem("verify");
  // const verify = true;
  // const [checked, checkUser] = useState('');

  const [verify, setVerify] = useState(true);

  useEffect(() => {
    // addVerifyListener();
    // let uuid = localStorage.getItem("uuid");
    // if (uuid.length > 0) {
    //   setVerify(true);
    // }
  });

  async function addVerifyListener() {
    let uuid = localStorage.getItem("uuid");

    if (uuid !== "") {
      await api
        .get("/checkuser", { params: { id: uuid } })
        .then(function (response) {
          if (response.data.Success === "verified") {
            setVerify(true);
          } else {
            setVerify(false);
          }
        })
        .catch(function (error) {
          console.log("stories error response :: ", error);
          setVerify(false);
        });
    } else {
      setVerify(false);
    }
  }

  return (
    <>
      {verify === true ? (
        <>{props.children}</>
      ) : (
        <MmLayout>
          <MmLoginPage />
        </MmLayout>
      )}
    </>
  );
}

export default WalletLayout;
