import React from "react";
import cx from "classnames";
import styles from "./PlugPlayCard.module.scss";
import Image from "next/image";
import { Star, StarRateBlack } from "../../../svgs/SVG";

import { APIKitsCard } from "../../../Interface/HomeInterface";

interface Props {
  plugCard?: APIKitsCard;
  avatar?: APIKitsCard;
}

const PlugPlayCard = (props: any) => {
  const { plugCard } = props;
  console.log("plugCard1", plugCard);

  return (
    <div className={cx(styles.card3)}>
      {/* <img
									className={styles.card3Logo}
									src='/images/Group 25734.png'
									alt=''
								/> */}
      <div className={styles.card3Logo}>
        <Image
          src={plugCard!.icon.url}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={cx(styles.card3Info)}>
        <p className={cx(styles.card3InfoHeading)}>{plugCard!.title}</p>
        <p className={cx(styles.card3InfoP)}>{plugCard!.subTitle}</p>
        <p className={cx(styles.card3InfoP2)}>
          <span className={cx(styles.card3InfoPSpan)}>{plugCard!.apiType}</span>
          {plugCard!.users !== null ? plugCard!.users.userCount : "0"}{" "}
          {plugCard!.users !== null ? plugCard!.users.title : "Users"}
        </p>
        <hr className={cx(styles.card2Hr)} />
        <div className={cx(styles.card2Bottom)}>
          <p className={cx(styles.card2BottomStarsWrapper)}>
            {/* <img
													className={styles.card2BottomStarImg}
													src='/images/star.svg'
													alt=''
												/> */}
            <div className={styles.card2BottomStarImg}>
              <Star />
            </div>
            {/* <img
													className={styles.card2BottomStarImg}
													src='/images/star.svg'
													alt=''
												/> */}
            <div className={styles.card2BottomStarImg}>
              <Star />
            </div>
            {/* <img
													className={styles.card2BottomStarImg}
													src='/images/star.svg'
													alt=''
												/> */}
            <div className={styles.card2BottomStarImg}>
              <Star />
            </div>
            {/* <img
													className={styles.card2BottomStarImg}
													src='/images/star.svg'
													alt=''
												/> */}
            <div className={styles.card2BottomStarImg}>
              <Star />
            </div>
            {/* <img
													className={styles.card2BottomStarImg}
													src='/images/star_rate_black_24dp(1).svg'
													alt=''
												/> */}
            <div className={styles.card2BottomStarImg}>
              <StarRateBlack />
            </div>
          </p>
          <p className={cx(styles.card2InfoInnerSpan3)}>
            {plugCard!.rating !== null ? plugCard!.rating.ratingCount : 0}{" "}
            Ratings
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlugPlayCard;
