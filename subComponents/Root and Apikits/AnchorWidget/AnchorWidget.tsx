import React, { useState } from "react";
import cx from "classnames";
import styles from "./AnchorWidget.module.scss";

interface Props {
  title?: string | string[];
  options?: Options[];
  anchorActive?: string;
  getTabClicked: Function;
}
export interface Options {
  desc: any;
  points: any;
  id?: number | null;
  title?: string | string[];
}

const AnchorWidget = (props: any) => {
  let { title, options, anchorActive, getTabClicked } = props;

  console.log("anchr proops", options);
  const [itemClicked, getItemClicked] = useState(0);
  return (
    <div className={cx(styles.apiKits)}>
      <p>{title}</p>
      <div
        // style={{
        //   height: "150px",
        //   overflowY: "scroll",
        //   direction: "rtl",
        // }}
        className={cx(styles.apiMenu)}
      >
        <div className={cx(styles.slider)}>
          <div
            className={cx(styles.sliderInner)}
            style={{ transform: `translateY(${itemClicked * 32}px)` }}
          ></div>
        </div>
        <ul className={cx(styles.heading)} style={{ direction: "ltr" }}>
          {options!.map((opt: any, idx: number) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  getItemClicked(idx);
                }}
              >
                <a
                  onClick={() => getTabClicked(opt.title)}
                  href={`#${opt.title}`}
                  className={cx(opt.title === anchorActive && styles.activeTab)}
                >
                  {opt.title}
                </a>
                {opt!.desc.length > 0 && (
                  <ul className={cx(styles.subTags)}>
                    {opt!.desc![0].points &&
                      opt!.desc![0].points!.data!.map((subtag?: any) => {
                        return (
                          <li>
                            <a
                              href={`#${subtag.attributes.title}`}
                              onClick={() =>
                                getTabClicked(subtag.attributes.title)
                              }
                              className={cx(
                                subtag.attributes.title === anchorActive &&
                                  styles.activeTab
                              )}
                            >
                              {subtag.attributes.title}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </li>
            );
          })}
          {/* <li style={{ marginTop: "10px" }}>
            <a style={{ color: "#0066cc" }} href="#">
              OAuth Login
            </a> */}
          {/* </li> */}
          {/* <li>
            <a href="#">Client Login</a>
          </li>
          <li>
            <a href="#">Partner Login</a>
          </li>
          <li>
            <a href="#">Login Check</a>
          </li>
          <li>
            <a href="#">JWT Validation</a>
          </li>
          <li>
            <a href="#">OAuth Login</a>
          </li>
          <li>
            <a href="#">Client Login</a>
          </li>
          <li>
            <a href="#">Partner Login</a>
          </li>
          <li>
            <a href="#">Login Check</a>
          </li>
          <li>
            <a href="#">JWT Validation</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AnchorWidget;
