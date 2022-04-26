import React from "react";
import cx from "classnames";
import styles from "./Images.module.scss";
import styled from "../../../component/Root/Root/Root.module.scss";
import {
  EastBlack,
  Group21681,
  Group25688,
  Group25694,
  Group256941,
  Group26408,
  Group26409,
} from "../../../svgs/SVG";
import Image from "next/image";
import {
  ApiKitsCardsEntity,
  IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg4,
} from "../../../component/Root/HomeComponent/HomeComponent";
import { APIKitsCard } from "../../../Interface/ApiKitInterface";

interface Props {
  pageTableBox?: any;
}

const InfoCardGrid = (props: Props) => {
  let { pageTableBox } = props;
  console.log("pageTableBox", pageTableBox);

  return (
    <div id="main-content" className={cx(styles.wrapper)}>
      <div className={cx(styles.topContent)}></div>
      <div className={cx(styles.imgWrapper)}>
        <div className={cx(styles.img)}>
          {/* <img src='/images/flow@3x.png' alt='' /> */}
          <button className={cx(styles.first)}>Customer Login</button>
          <button className={cx(styles.second)}>OAuth Login</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCardGrid;
