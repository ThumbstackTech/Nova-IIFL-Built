import React from "react";
import cx from "classnames";
import styles from "./Table.module.scss";
import { text } from "node:stream/consumers";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

interface Props {
  pageTableBox?: any;
}

export interface Content {
  header?: Header[];
  row?: Row[];
}
export interface pageTableBox {
  title?: string;
  subtitle?: string;
  content?: Content;
}
export interface Header {
  hr?: string;
  innerCol?: number;
}
export interface Row {
  title?: string;
  body?: Body[];
}
export interface Body {
  text?: string[];

  subTag?: string;
}

const Table = (props: any) => {
  let { pageTableBox } = props;
  console.log("Table props==", props.pageTableBox);
  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        console.log("tree", tree);
      };
    })
    .use(rehypeReact, {
      createElement: React.createElement,
    });
  return (
    <div className={cx(styles.wrapper)}>
      <h3>
        {pageTableBox.title}
        {/* <span>{subtitle}</span>{' '} */}
      </h3>
      <div className={cx(styles.tableWrapper)}>
        {content.processSync(pageTableBox.table).result}
        {/* <table className='table'>
          <thead>
            <tr className={cx(styles.firstRow)}>
              {header!.map((head, idx) => {
                return (
                  <th scope='col' colSpan={head.innerCol}>
                    {head.hr}
                  </th>
                );
              })} */}
        {/* <th scope="col" colSpan={2}>
              FIELD NAME
            </th>
            <th scope="col">MANDATORY</th>
            <th scope="col">DESCRIPTION</th> */}
        {/* </tr>
          </thead>
          <tbody> */}
        {/* {row?.map((row) => {
              return (
                <tr className={cx(styles.head)}>
                  <th className={cx(styles.bodyHead)} scope='row'>
                    {row.title}
                  </th>
                  {row!.body!.map((body) => {
                    return (
                      <td>
                        {body.text} <br />
                        {body.subTag && <span>{body.subTag}</span>}
                      </td>
                    );
                  })}
                </tr>
              );
            })} */}

        {/* <td>Yes</td>
            <td>User Key of the client received along with API credentials</td> */}

        {/* <tr>
            <th className={cx(styles.bodyHead)} scope="row">
              BODY
            </th>
            <td>
              Client Code
              <br /> <span>STRING</span>
            </td>
            <td>Yes</td>
            <td>User Key of the client received along with API credentials</td>
          </tr>
          <tr>
            <th className={cx(styles.bodyHead)} scope="row"></th>
            <td>
              PWD
              <br /> <span>STRING</span>
            </td>
            <td>Yes</td>
            <td>User Key of the client received along with API credentials</td>
          </tr>
          <tr>
            <th className={cx(styles.bodyHead)} scope="row"></th>
            <td>
              DOB
              <br /> <span>STRING</span>
            </td>
            <td>Yes</td>
            <td>User Key of the client received along with API credentials</td>
          </tr> */}
        {/* </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default Table;
