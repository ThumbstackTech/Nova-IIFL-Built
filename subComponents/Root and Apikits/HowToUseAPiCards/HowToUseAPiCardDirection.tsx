import React from "react";
import cx from "classnames";
import styles from "./HowToUseApi.module.scss";
import {
  EastBlack,
  Group25704,
  Group25713,
  Group25597First,
} from "../../../svgs/SVG";

import { APIKitsCard } from "../../../Interface/DocFundamentalInterface";
interface Props {
  className?: string;
  direction?: any;

  cardData?: APIKitsCard[];
}

const HowToUseAPiCardDirection = (props: any) => {
  const { cardData } = props;
  return (
    <div className={cx(styles.infoCard)}>
      <p className={cx(styles.heading)}>Knowledge Base</p>
      <div
        style={{ direction: props.direction }}
        className={cx(styles.container)}
      >
        <div className={cx(styles.card, styles.card1)}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
            }}
          >
            <h2>{cardData![2].title}</h2>
          </div>
          <p className={cx(styles.hiddenP)}>{cardData![2].title}</p>
          <div className={cx(styles.bgImg)}>
            <Group25704 />
          </div>
          <div className={cx(styles.linkBtn)}>
            <p>{cardData![2].subTag}</p>
            <a href="#">
              Read Now
              <div>
                <EastBlack />
              </div>
              {/* <img src="images/east_black_24dp.svg" alt="" /> */}
            </a>
          </div>
        </div>
        <div className={cx(styles.card, styles.card3)}>
          <h2>{cardData![1].title}</h2>
          <p>{cardData![1].subTitle}</p>
          <div className={cx(styles.bgImg)}>
            <Group25597First />
          </div>
          <div className={cx(styles.linkBtn)}>
            <a href="#">
              Read Now
              <EastBlack />
            </a>
          </div>
        </div>
        {cardData![0] && (
          <div className={cx(styles.card, styles.card2)}>
            <h2>{cardData![0].title}</h2>
            <p>{cardData![0].subTitle}</p>
            <div className={cx(styles.bgImg)}>
              <Group25713 />
            </div>
            <div className={cx(styles.linkBtn)}>
              <a href="#">
                Read Now
                <div>
                  <EastBlack />
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HowToUseAPiCardDirection;
