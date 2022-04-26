import React from "react";
import cx from "classnames";
import styles from "./TextContent.module.scss";
import PurpleTextBody from "../PurpleTextBody/PurpleTextBody";
import Table from "../Table/Table";

interface Props {
  content?: Content;
}

export interface Content {
  documentation_codes: any;
  title?: string;
  desc?: Text[];
}
interface Text {
  documentation_codes: any;
  desc?: string;
  points?: Point;
}
export interface Point {
  data?: data[];
}
export interface data {
  attributes: string[] | null;
}
export interface Attribute {
  title: string | null;
}
const TextContent = (props: any) => {
  let { content } = props;
  let { title, desc } = content!;

  return (
    <div className={cx(styles.wrapper)} id={content!.title}>
      <h3>{content!.title}</h3>
      {content!.desc!.map((text: any, idx: number) => {
        return (
          <>
            <h4 key={idx}>{text.desc}</h4>
            {text!.points!.data!.length > 0 && (
              <PurpleTextBody content={text.points!.data![0].attributes!} />
            )}
          </>
        );
      })}
      {/* {console.log("text.documentation_codes", content.)} */}
      {content!.documentation_codes.length > 0 && (
        <Table tableContent={TableContent} />
      )}
    </div>
  );
};

export default TextContent;

const TableContent = {
  title: "HEADER",
  subtitle: "ARRAY",
  content: {
    header: [
      { hr: "FIELD NAME", innerCol: 2 },
      { hr: "MANDATORY", innerCol: 1 },
      { hr: "DESCRIPTION", innerCol: 1 },
    ],
    row: [
      {
        title: " HEAD",

        body: [
          {
            text: "User Key",
            subTag: "String",
          },
          {
            text: "Yes",
          },
          {
            text: "User Key of the client received along with API credentials",
          },
        ],
      },
      {
        title: " Body",
        body: [
          {
            text: "User Key",
          },
          {
            text: "Yes",
          },
          {
            text: "User Key of the client received along with API credentials",
          },
        ],
      },
    ],
  },
};
