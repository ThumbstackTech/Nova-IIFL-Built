import React from "react";
import styles from "./HomeTopSecondCard.module.scss";

import cx from "classnames";
import { EastBlack, Group23244 } from "../../svgs/SVG";

import Image from "next/image";
import { Home } from "../HomeSystem/HomeSystem";

interface Props {
  hometop2?: Home;
  Link2?: Home;
}

function HomeTopSecondCard(Props: any) {
  const { hometop2, Link2 } = Props;
  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.card, styles.secondCard)}>
        <p className={cx(styles.cardHeading, styles.cardHeadingPadding)}>
          {hometop2!.title}
        </p>
        <p
          style={{ width: "98%" }}
          className={cx(
            styles.cardP,
            styles.cardHeadingPadding,
            styles.secondCardPMargin
          )}
        >
          {hometop2!.subtitle}
        </p>
        <div className={cx(styles.hireCardImg)}>
          <div className={styles.hireCardImg1}>
            <Image
              src={hometop2!.centreMedia !== 0 ? hometop2!.centreMedia.url : ""}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* <img
												className={styles.hireCardImg2}
												src='/images/Group 23244.svg'
												alt=''
											/> */}
          <div className={styles.hireCardImg2}>
            <img
              src={hometop2!.bgMedia !== 0 ? hometop2!.bgMedia.url : ""}
              alt=""
            ></img>
            {/* <Image
                      src={hometop2!.bgMedia.data.attributes !== 0 ? hometop2!.bgMedia.data.attributes.url : ""}
                      alt=''
                      layout='fill'
                      objectFit='contain'
                    /> */}
          </div>
        </div>
        <div className={cx(styles.cardCta, styles.secondCardCta)}>
          <p
            style={{ width: "36%" }}
            className={cx(styles.cardP, styles.cardCtaP)}
          >
            {hometop2!.bottomTag}
          </p>
          <a
            className={cx(styles.cardAnchor, styles.secondCardAnchor)}
            href="#"
          >
            {Link2!.button}
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

export default HomeTopSecondCard;
