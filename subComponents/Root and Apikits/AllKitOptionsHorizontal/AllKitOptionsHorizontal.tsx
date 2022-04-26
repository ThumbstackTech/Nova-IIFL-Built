import React from "react";
import cx from "classnames";
import styles from "./AllKitOptionsHorizontal.module.scss";
import {
  GoLogoBlue,
  Group25237,
  Group252374,
  Java,
  Node,
} from "../../../svgs/SVG";
import Image from "next/image";
import { Attributes } from "../../../pages/Apikits/System/[slug]";
import { LanguageSupports } from "../../../Interface/HomeDataInterface";
interface Props {
  lg?: LanguageSupports;
}
interface Language {
  title?: String;
  points?: PointsEntity[];
}

export interface PointsEntity {
  title: string;
  tag?: null;
  sortDesc?: null;
  bg?: null;
  bgSvg?: null;
  icon?: Icon | null;
}
export interface Icon {
  url: string;
}
const AllKitOptionsHorizontal = (props: any) => {
  let { lg } = props;
  console.log("languages", lg);
  return (
    <div className={cx(styles.container)}>
      <div className={cx(styles.allKitOptions)}>
        {lg!.map((lang: any, idx: React.Key | null | undefined) => {
          return (
            <div
              className={cx(lang!.tag !== null && styles.mostUsed)}
              key={idx}
            >
              <div className={cx(styles.card)}>
                <div>
                  <Image
                    src={lang!.media[0].url}
                    width="50px"
                    height="55px"
                    alt=""
                  />
                </div>
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
