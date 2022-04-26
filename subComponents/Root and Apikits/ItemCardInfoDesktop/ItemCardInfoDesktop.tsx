import React from "react";
import cx from "classnames";
import styles from "./ItemCardInfoDesktop.module.scss";
import Image from "next/image";

import { Api, CheckCircleBlack, TimmerBlack } from "../../../svgs/SVG";

interface Props {
  cardData?: any;
}
export interface Content {
  title: string;
  api_info?: ApiInfo | null;
  success_info?: SuccessInfo | null;
}
export interface ApiInfo {
  title: string;
  tag?: null;
  titleTag: string;
  api: number;
  apiCallsAvg: number;
  icon?: null;
}
export interface SuccessInfo {
  title: string;
  tag?: null;
  successRate: number;
  icon?: null;
}

const ItemCardInfoDesktop = (Props: any) => {
  const { cardData } = Props;
  return (
    <div className={cx(styles.delete, "d-flex justify-content-center")}>
      <div
        className={cx(styles.response, "d-flex ms-2 me-2 align-items-center")}
      >
        <div>
          <Api />
        </div>
        {/* <img src="/images/api.svg" alt="" /> */}
        <div className={cx("ps-3")}>
          <h4 style={{ color: "#176e8f" }} className={cx("mb-0")}>
            {cardData.api_info && cardData.api_info.apiCallsAvg}
          </h4>
          <p style={{ fontSize: "1rem" }} className={cx("mb-0 mt-1")}>
            {cardData.api_info && cardData.api_info.titleTag}
          </p>
        </div>
      </div>
      <div
        className={cx(
          styles.successRate,
          "d-flex mx-3 px-4 align-items-center"
        )}
      >
        <div>
          {/* <Image
            src={cardData.success_info && cardData.success_info.icon[0].url}
            width="35px"
            height="35px"
            alt=""
          /> */}
          <CheckCircleBlack />
        </div>

        {/* <img src="/images/check_circle_black_24dp.svg" alt="" /> */}
        <div className={cx("ps-3")}>
          <h4 style={{ color: "#1f8f17" }} className={cx("mb-0")}>
            {cardData.success_info && cardData.success_info.successRate}%
          </h4>
          <p style={{ fontSize: "1rem" }} className={cx("mb-0 mt-1")}>
            {cardData.success_info && cardData.success_info.title}
          </p>
        </div>
      </div>
      <div className={cx(styles.response, "d-flex ms-2 align-items-center")}>
        <div>
          <TimmerBlack />
          {/* <Image
            src={cardData.response_info && cardData.response_info.icon.url}
            width="35px"
            height="35px"
            alt=""
          /> */}
        </div>
        {/* <img src="/images/timer_black_24dp.svg" alt="" /> */}
        <div className={cx("ps-3")}>
          <h4 style={{ color: "#176e8f" }} className={cx("mb-0")}>
            {/* 0.002ms */}
            {cardData.response_info && cardData.response_info.tag}
          </h4>
          <p style={{ fontSize: "1rem" }} className={cx("mb-0 mt-1")}>
            {cardData.response_info && cardData.response_info.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCardInfoDesktop;
