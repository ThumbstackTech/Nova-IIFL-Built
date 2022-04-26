import React from "react";
import cx from "classnames";
import styles from "./ChangelogCard.module.scss";

interface Props {
  className?: string;
  content?: Content;
  data?: Content;
}
export interface ClassData {
  wrapper?: string;
}
export interface Content {
  title?: number;
  subTitle?: string;
  desc?: string;
}

const ChangelogCard = (props: any) => {
  const { className, content, data } = props;
  const { title, subTitle, desc } = content!;

  return (
    <div className={cx(styles.wrapper)}>
      <h4>Holding API - v3</h4>
      <div className={cx(styles.tagsWrapper, "d-flex")}>
        <div className={cx(styles.removed)}>
          <p>
            {" "}
            <span>REMOVED</span> None
          </p>
        </div>
        <hr />
        <div className={cx(styles.added)}>
          <p>
            {" "}
            <span>ADDED</span> Authorization
          </p>
        </div>
      </div>
      <h5>
        The version 3 of{" "}
        <span className={cx(styles.holding)}>
          Holding <span>API</span>
        </span>{" "}
        provides you one more parameter in the response, i.e. “Authorized”. The
        value “Y” of this field indicates that the holding is authorized (
        through E-DIS, POA, etc.) and user can sell this holding.
      </h5>
    </div>
  );
};

export default ChangelogCard;
