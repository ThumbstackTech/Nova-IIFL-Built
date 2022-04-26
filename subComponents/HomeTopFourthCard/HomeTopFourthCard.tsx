import React from "react";
import styles from "./HomeTopFourthCard.module.scss";

import cx from "classnames";
import { Home } from "../HomeSystem/HomeSystem";
import {
  LocalMallBlack24Dp,
  BuildBlack,
  CampaingBlack,
  Rupee,
  WhiteArrow,
} from "../../svgs/SVG";
interface Props {
  hometop4?: Home;
  Link5?: Home;
}
function HomeTopFourthCard(Props: any) {
  const { hometop4, Link5 } = Props;
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.card, styles.fourthCard)}>
        <div className={cx(styles.cardCta, styles.fourthCardCta)}>
          <div className={cx(styles.fourthCardCtaDiv)}>
            <p className={cx(styles.fourthCardH2)}>
              <b>{hometop4!.bottomTitle}</b> <br />
              <span className={cx(styles.fourthCardH2Span)}>
                {hometop4!.bottomSubtitle}
              </span>
            </p>
            <p className={cx(styles.fourthCardP, styles.cardCtaP)}>
              {hometop4!.description} <br />
              <span className={cx(styles.fourthCardPSpan)}>
                {/* <img
                                                className={styles.fourthCardSpanImg}
                                                src='/images/local_mall_black_24dp.svg'
                                                alt=''
                                            /> */}
                <div className={styles.fourthCardSpanImg}>
                  <LocalMallBlack24Dp />
                </div>
                {/* <img
                                                className={styles.fourthCardSpanImg}
                                                src='/images/build_black_24dp.svg'
                                                alt=''
                                            /> */}
                <div className={styles.fourthCardSpanImg}>
                  <BuildBlack />
                </div>
                {/* <img style={{transform:'translateY(5px)'}}
                                                className={styles.fourthCardSpanImg}
                                                src='/images/campaign_black_24dp (1).svg'
                                                alt=''
                                            /> */}
                <div className={styles.fourthCardSpanImg}>
                  <CampaingBlack />
                </div>
                {/* <img
                                                className={styles.fourthCardSpanImg}
                                                src='/images/rupee.svg'
                                                alt=''
                                            /> */}
                <div className={styles.fourthCardSpanImg}>
                  <Rupee />
                </div>
              </span>
            </p>
          </div>
          <a
            className={cx(styles.cardAnchor, styles.fourthCardAnchor)}
            href="#"
          >
            {Link5!.button}
            {/* <img
                                        className={styles.arrowImg}
                                        src='/images/white arrow.svg'
                                        alt=''
                                    /> */}
            <div className={styles.arrowImg}>
              <WhiteArrow />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeTopFourthCard;
