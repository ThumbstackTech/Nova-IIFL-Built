import React from "react";
import { CopyBlock, atomOneLight } from "react-code-blocks";
import cx from "classnames";
import styles from "./CodeBlockWhite.module.scss";
import { Greendot } from "../../../svgs/SVG";
import WhiteCodeBlock from "../../WhiteCodeBlock";

interface Props {
  whitecodecard?: any;
}

const CodeBlockWhite = (Props: any) => {
  const { whitecodecard } = Props;

  return (
    <div className={cx(styles.body)}>
      <div className={cx(styles.Title)}>
        <h5>
          {" "}
          <span>
            {" "}
            <Greendot />{" "}
          </span>{" "}
          &nbsp;{whitecodecard.title} &nbsp;:
        </h5>
        <h5
          style={{
            fontWeight: "normal",
            maxWidth: "30rem",
            paddingLeft: "13px",
          }}
        >
          {whitecodecard.subtitle}
        </h5>
        {/* <div style={{ display: 'flex' }}>
          <select id='lib2'>
            <option value='volvo'>Select Library&emsp;</option>
            <option value='saab'>jsx</option>
            <option value='opel'>python</option>
          </select>
          <hr />
          <a
            style={{ paddingLeft: '20px', borderLeft: 'solid 1px #707070' }}
            href='#'
          >
            {' '}
            <CopyLink />{' '}
          </a>
        </div> */}
      </div>
      <div
        style={{
          overflow: "scroll",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
        className={cx(styles.link)}
      >
        <div
          style={{
            minWidth: "720px",
            paddingBottom: "2rem",
            backgroundColor: "#fafafa",
          }}
          className="codeWhite"
        >
          <WhiteCodeBlock whitecodecardcontent={whitecodecard} />
          {/* <CopyBlock
            text= {content.processSync(whitecodecard.whiteCodeSnippet).result}
            language='json'
            wrapLines
            theme={atomOneLight}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CodeBlockWhite;
