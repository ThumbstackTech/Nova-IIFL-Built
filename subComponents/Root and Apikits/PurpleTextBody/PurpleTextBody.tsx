import React from "react";
import cx from "classnames";
import styles from "./PurpleTextBody.module.scss";
import { Question } from "../../../svgs/SVG";

interface Props {
  content?: Content;
}

export interface Content {
  title?: string;
  description?: string;
  desc?: Text[];
}

const PurpleTextBody = (props: any) => {
  const { content } = props;
  return (
    <div className={cx(styles.body)} id={content!.title}>
      <div className={cx(styles.Title)}>
        <Question />
        <h5 className="ms-3">{content!.title}</h5>
      </div>
      <div className={cx(styles.link)}>
        <h5 style={{ overflowWrap: "anywhere" }}>{content!.description}</h5>
      </div>
    </div>
  );
};

export default PurpleTextBody;
