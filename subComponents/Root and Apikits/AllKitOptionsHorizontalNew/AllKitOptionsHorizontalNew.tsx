import React from "react";
import cx from "classnames";
import styles from "./AllKitOptionsHorizontalNew.module.scss";
import {
  GoLogoBlue,
  Group25237,
  Group252374,
  Java,
  Node,
} from "../../../svgs/SVG";
import Image from "next/image";

interface Props {
  data?: any;
}
interface Content {
  title?: String;
  points?: PointsEntity[];
  // api_kits_cards?: ApiKitsCardsEntity[];
}
export interface PointsEntity {
  title: string;
  // lang: string[] | null;
  tag?: string;
  icon: Icon;
}
export interface Icon {
  url: string;
}
const AllKitOptionsHorizontal = (props: Props) => {
  let { data } = props;
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.allKitOptions)}>
        {data!.points!.map((lang: any, idx: React.Key | null | undefined) => {
          return (
            <div
              className={cx(lang!.tag !== null && styles.mostUsed)}
              key={idx}
            >
              <div className={cx(styles.card)}>
                <div>
                  <Image
                    src={lang!.icon!.url}
                    width="50px"
                    height="55px"
                    alt=""
                  />
                  {/* <Group25237 width="50px" height="55px" /> */}
                </div>
                {/* <img src="/images/Group 25237.svg" alt="" /> */}
                <p>{lang!.title}</p>
              </div>
              {lang!.tag !== null && <p>{lang!.tag}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllKitOptionsHorizontal;
