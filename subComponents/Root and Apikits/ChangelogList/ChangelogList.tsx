import React from "react";
import cx from "classnames";
import styles from "./ChangelogList.module.scss";
import ChangelogCard from "../ChangelogCard/ChangelogCard";

interface Props {
  data?: any;
}

const ChangelogList = (Props: any) => {
  const { data } = Props;
  return (
    <div className={cx(styles.wrapper)}>
      <h3>2020-10-27</h3>
      {data != null && <ChangelogCard content={data} />}
      {/* <ChangelogCard content={data}/> */}
    </div>
  );
};

export default ChangelogList;
