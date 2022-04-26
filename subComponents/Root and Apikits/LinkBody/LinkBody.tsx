import React, { useState } from "react";
//@ts-ignore
import ReactHover, { Trigger, Hover } from "react-hover";
import cx from "classnames";
import styles from "./LinkBody.module.scss";
import { CopyLink } from "../../../svgs/SVG";
import copy from "copy-to-clipboard";

interface Props {
  copyPaste?: any;
}
const LinkBody = (Props: any) => {
  const { copyPaste } = Props;
  console.log("xyz", copyPaste);
  const [copyText, setCopyText] = useState(copyPaste);
  const [tooltip, settooltip] = useState("Click to Copy");

  // const handleCopyText = (e) => {
  //    setCopyText('https://dataservice.iifl.in/openapi/prod/V2/Login');
  // }

  const copyToClipboard = () => {
    copy(copyText);
    // alert(`You have copied "${copyText}"`);
    settooltip("Copied");
  };
  const optionsCursorTrueWithMargin = {
    followCursor: false,
    // shiftX: 0,
    // shiftY: 20,
  };

  return (
    <div className={cx(styles.body)}>
      <div className={cx(styles.Title)}>
        <h5>{copyPaste.title}</h5>
        <ReactHover options={optionsCursorTrueWithMargin}>
          <Trigger type="trigger">
            <a
              // href='#'
              style={{ cursor: "pointer" }}
              onClick={copyToClipboard}
              // onChange={handleCopyText}
              // data-toggle='tooltip'
              // data-placement='top'
              // title='Click to copy'
            >
              {" "}
              <CopyLink />
            </a>
          </Trigger>
          <Hover type="hover">
            <span className={cx(styles.tooltip)}>{tooltip}</span>
          </Hover>
        </ReactHover>
        {/* <a
          href='#'
          onClick={copyToClipboard}
          // onChange={handleCopyText}
          // data-toggle='tooltip'
          // data-placement='top'
          // title='Click to copy'
        >
          {' '}
          <CopyLink /> <span className={cx(styles.tooltip)}>Click to Copy</span>
        </a> */}
      </div>
      <div className={cx(styles.link)}>
        <h5 style={{ overflowWrap: "anywhere" }}>{copyPaste.url}</h5>
      </div>
    </div>
  );
};
export default LinkBody;

function setCopyText(value: any) {
  throw new Error("Function not implemented.");
}

function copyText(copyText: any) {
  throw new Error("Function not implemented.");
}
