import React from "react";
import cx from "classnames";
import styles from "./ApiHeader.module.scss";
import ItemCardInfoDesktop from "../ItemCardInfoDesktop/ItemCardInfoDesktop";
import ItemCardInfoMobile from "../ItemCardInfoMobile/ItemCardInfoMobile";

interface Props {
  className?: string;
  apiHeader?: any;
}

const ApiHeader = (Props: any) => {
  const { apiHeader } = Props;
  return (
    <>
      <div style={{ width: "100%" }} className="row">
        <div className={cx(styles.title, "col")}>
          <h1>Login</h1>
          <span className={cx(styles.tag)}>POST</span>
          <span className={cx(styles.tag)}>JSON</span>
          <span className={cx(styles.tag)}>Rest API</span>
        </div>
        <div className={cx(styles.leftCard, "col d-none d-sm-block")}>
          <ItemCardInfoDesktop cardData={apiHeader} />
        </div>
        <div style={{ padding: "0 3.5rem" }}>
          <ItemCardInfoMobile />
        </div>
      </div>
      <hr style={{ width: "92%", marginLeft: "2.9rem" }} />
    </>
  );
};

export default ApiHeader;
