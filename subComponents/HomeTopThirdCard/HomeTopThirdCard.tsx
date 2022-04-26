import React from "react";
import styles from "./HomeTopThirdCard.module.scss";

import cx from "classnames";

import { EastBlack, Group21681 } from "../../svgs/SVG";
import Image from "next/image";
import { Home } from "../../Interface/HomeInterface";

interface Props {
  hometop3?: Home;
  Link3?: Home;
}

function HomeTopThirdCard(Props: any) {
  const { hometop3, Link3 } = Props;
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.card, styles.thirdCard)}>
        <p className={cx(styles.cardHeading, styles.cardHeadingPadding)}>
          {hometop3!.title}
        </p>
        <p
          style={{ width: "65%" }}
          className={cx(
            styles.cardP,
            styles.thirdCardP,
            styles.cardHeadingPadding
          )}
        >
          {hometop3!.subtitle}
        </p>
        {/* <img
                                className={styles.thirdCardImg}
                                src='/images/Group 21681.svg'
                                alt=''
                            /> */}
        <div className={styles.thirdCardImg}>
          {/* <Group21681 /> */}
          <img src={hometop3!.bg !== 0 ? hometop3!.bg.url : ""} alt=""></img>
        </div>
        <div className={cx(styles.bgGradient)} />
        <div className={cx(styles.cardCta, styles.thirdCardCta)}>
          <div className={cx(styles.bgGradient)} />
          <a className={cx(styles.thirdCardAnchor, styles.cardAnchor)} href="#">
            {Link3!.button}
            {/* <img
                                        className={styles.arrowImg}
                                        src='/images/east_black_24dp.svg'
                                        alt=''
                                    /> */}
            <div className={styles.arrowImg}>
              <EastBlack />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeTopThirdCard;
