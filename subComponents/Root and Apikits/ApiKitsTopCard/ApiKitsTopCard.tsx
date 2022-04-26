import React from "react";
import cx from "classnames";
import styles from "./ApiKitsTopCard.module.scss";
import {
  GreenCheck,
  Group25597,
  IconIonicIosAddCircleOutlineWhite,
  RatingStar,
  WhiteArrow,
} from "../../../svgs/SVG";
import Link from "next/link";
interface Props {
  cardDetals?: any;
}

const ApiKitsTopCard = (props: any) => {
  let { cardDetals } = props;
  console.log("kitData", cardDetals);
  console.log("hel", cardDetals.api_pages[0]?.title);

  const shareAPIInfoLen = Object.keys(cardDetals!.api_pages).length;

  console.log("apiLength", shareAPIInfoLen);

  return (
    <div className={cx(styles.card)}>
      <div className={cx(styles.bgImg)}>
        <Group25597 />
      </div>

      <h2>{cardDetals.title && cardDetals.title}</h2>
      <p>{cardDetals.shortDesc && cardDetals.shortDesc}</p>
      <div className={cx(styles.cardInfo)}>
        <div className={cx(styles.apiIncluded)}>
          <p>APIs included</p>
          <ul>
            <li>
              <div>
                <GreenCheck />
              </div>
              {cardDetals.api_pages[0]?.title}
              {/* <img src="images/green-check.svg" alt="" /> */}
            </li>
            <li>
              <div>
                <GreenCheck />
              </div>
              {/* <img src="images/green-check.svg" alt="" /> */}
              {cardDetals.api_pages[1]?.title}
            </li>
            <li>
              <div>
                <GreenCheck />
              </div>
              {/* <img src="images/green-check.svg" alt="" /> */}
              {cardDetals.api_pages[2]?.title}
            </li>
            <li>
              <div>
                <GreenCheck />
              </div>
              {/* <img src="images/green-check.svg" alt="" /> */}
              {cardDetals.api_pages[3]?.title}
            </li>
            <li>
              <div>
                <GreenCheck />
              </div>
              {/* <img src="images/green-check.svg" alt="" /> */}
              {cardDetals.api_pages[4]?.title}
            </li>
          </ul>
        </div>
        <div className={cx(styles.apiRatings)}>
          <ul>
            <li>
              <span>APIs</span>
              {shareAPIInfoLen}
            </li>
            <li>
              <span>
                {" "}
                {cardDetals.rating?.title != null && cardDetals.rating?.title}
              </span>
              <span>
                {cardDetals.rating?.ratingCount != null &&
                  cardDetals.rating?.ratingCount}
                <RatingStar />
                {/* <Group26865 /> */}
                {/* <img src="images/star_rate_black_24dp.svg" alt="" /> */}
              </span>
            </li>
            <li>
              <span>
                {cardDetals.success?.title !== null &&
                  cardDetals.success?.title}
              </span>
              {cardDetals.success?.successRate !== null &&
                cardDetals.success?.successRate}
              %
            </li>
          </ul>
        </div>
      </div>
      <div className={cx(styles.cta)}>
        <Link href={`/Apikits/System/${cardDetals.slug}`} passHref>
          <a href="#">
            Generate Key
            <div>
              <WhiteArrow />
            </div>
          </a>
        </Link>
        <div>
          <IconIonicIosAddCircleOutlineWhite />
        </div>
        {/* <img
                  src="images/Icon ionic-ios-add-circle-outline(1).svg"
                  alt=""
                /> */}
      </div>
    </div>
  );
};

export default ApiKitsTopCard;

// const cardDetals = {
//   title: "User Authentication System",
//   rating: "4.2",
//   succes: "95.4%",
//   desc: "Specially designed for clients or partners to integrate the authentication mechanism.",
// };
