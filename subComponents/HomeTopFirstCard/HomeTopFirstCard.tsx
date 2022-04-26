import React from "react";
import styles from "./HomeTopFirstCard.module.scss";

import cx from "classnames";

import { EastBlack } from "../../svgs/SVG";
import Image from "next/image";
import { Home } from "../../Interface/HomeInterface";
interface Props {
  hometop?: Home;
  Points?: Home;
  Points2?: Home;
  Points3?: Home;
  Points4?: Home;
  Link1?: Home;
}

function HomeTopFirstCard(Props: any) {
  const { hometop, Points, Points2, Points3, Points4, Link1 } = Props;
  console.log("Points", Props);

  return (
    <div className={cx(styles.wrapper)}>
      <div className={cx(styles.card, styles.firstCard)}>
        <p className={cx(styles.cardHeading, styles.firstCardHeading)}>
          {/* <br className={cx(styles.tabletLineBreaks)} /> */}
          {hometop!.title}
        </p>
        <div className={cx(styles.building)}>
          <div>
            <div className={styles.buildingImg}>
              <Image
                src={Points!.icon.url}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className={cx(styles.cardP, styles.firstCardP)}>
              {Points!.title}
            </p>
          </div>
          <div>
            <div className={styles.buildingImg}>
              <Image
                src={Points2!.icon.url}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className={cx(styles.cardP, styles.firstCardP)}>
              {Points2!.title}
            </p>
          </div>
          <div>
            <div>
              <div className={styles.buildingImg}>
                <Image
                  src={Points3!.icon.url}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <p className={cx(styles.cardP, styles.firstCardP)}>
              {Points3!.title}
            </p>
          </div>
          <div>
            <div className={styles.buildingImg}>
              <Image
                src={Points4!.icon.url}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className={cx(styles.cardP, styles.firstCardP)}>
              {Points4!.title}
            </p>
          </div>
        </div>
        <div
          className={cx(
            styles.cardCta,
            styles.firstCardCta,
            styles.firstCardCta
          )}
        >
          <p className={cx(styles.cardP, styles.cardCtaP)}>
            {hometop!.bottomTag}
          </p>
          <a className={cx(styles.cardAnchor, "btnhover", "color3")} href="#">
            {Link1!.button}
            <div className={styles.arrowImage}>
              <EastBlack />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeTopFirstCard;
