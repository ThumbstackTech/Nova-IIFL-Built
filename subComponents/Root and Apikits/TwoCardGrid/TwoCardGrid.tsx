/* eslint-disable react/jsx-key */
import React from "react";
import cx from "classnames";
import styles from "./TwoCardGrid.module.scss";
import { EastBlack, Group25704Two, Group25713Two } from "../../../svgs/SVG";
import { SectionDatum } from "../../../Interface/DocFundamentalInterface";
interface Props {
  data?: any;
}
const TwoCardGrid = (props: any) => {
  const { data } = props;

  return (
    <div className={cx(styles.infoCard)}>
      <p className={cx(styles.heading)}>Knowledge Base</p>
      <div className={cx(styles.container)}>
        {data.map(
          (card: {
            title: string;
            subTag: string;
            cardBottomTag: string;
            linkText: string;
          }) => {
            return (
              <div className={cx(styles.card)}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                  }}
                >
                  <h2>{card.title}</h2>
                </div>
                <div className={cx(styles.bgImg)}>
                  <Group25704Two />
                </div>
                <div className={cx(styles.linkBtn)}>
                  <p>{card.cardBottomTag}</p>
                  <a href="#">
                    {card.linkText}
                    <div>
                      <EastBlack />
                    </div>
                    {/* <img src="images/east_black_24dp.svg" alt="" /> */}
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TwoCardGrid;
