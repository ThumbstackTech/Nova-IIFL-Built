import React from "react";
import styles from "./HomeTopFifthCard.module.scss";

import cx from "classnames";
import { Home } from "../HomeSystem/HomeSystem";
import Image from "next/image";
import { WhiteArrow, Group23239, Group25344 } from "../../svgs/SVG";
interface Props {
  Avatar?: Home;
  hometop5?: Home;
  Link4?: Home;
}

function HomeTopFifthCard(Props: any) {
  const { Avatar, hometop5, Link4 } = Props;
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.card, styles.fifthCard)}>
        <div className={cx(styles.bulbImg)}>
          {/* <img
                                    className={styles.bulbImg1}
                                    src='/images/Group 23239.svg'
                                    alt=''
                                /> */}
          <div className={styles.bulbImg1}>
            <Group23239 />
          </div>
          {/* <img
                                    className={styles.bulbImg2}
                                    src='/images/Group 25344.svg'
                                    alt=''
                                /> */}
          <div className={styles.bulbImg2}>
            <Group25344 />
          </div>
        </div>
        <p className={cx(styles.fifthCardHeadingH2, styles.cardHeadingPadding)}>
          {/* <img
                                    className={styles.fifthCardHeadingImg}
                                    src='/images/Group 19733.svg'
                                    alt=''
                                /> */}
          <div className={styles.fifthCardHeadingImg}>
            <Image
              src={Avatar!.url}
              alt=""
              width="22px"
              height="22px"
              // layout='fill'
              objectFit="contain"
            />
          </div>
          {hometop5!.topIcon.title}
        </p>
        <p
          className={cx(
            styles.cardHeading,
            styles.fifthCardHeading,
            styles.cardHeadingPadding
          )}
        >
          {hometop5!.title}
        </p>
        <p
          className={cx(
            styles.cardP,
            styles.fifthCardP,
            styles.cardHeadingPadding
          )}
        >
          {hometop5!.subtitle}
        </p>

        <div>
          <div className={cx(styles.cardCta, styles.fifthCardCta)}>
            <p
              style={{ width: "60%" }}
              className={cx(styles.cardP, styles.cardCtaP)}
            >
              {hometop5!.bottomTag}
            </p>
            <a
              className={cx(styles.cardAnchor, styles.fourthCardAnchor)}
              href="#"
            >
              {Link4!.button}
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
    </div>
  );
}

export default HomeTopFifthCard;
