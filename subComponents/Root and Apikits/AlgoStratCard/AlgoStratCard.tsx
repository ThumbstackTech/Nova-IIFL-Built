import React from "react";
import cx from "classnames";
import styles from "./AlgoStratCard.module.scss";
import {
  Group25898,
  Group25899,
  Group26870,
  Star,
  StarRateBlack,
} from "../../../svgs/SVG";
import Image from "next/image";
import { APIKitsCard } from "../../../Interface/HomeInterface";

interface Props {
  data?: APIKitsCard;
  bgSvg?: APIKitsCard;
  avatar?: APIKitsCard;
}

const AlgoStratCard = (props: any) => {
  const { data, bgSvg, avatar } = props;
  console.log("algo", data);
  return (
    <div className={cx(styles.card2)}>
      <div
        style={{
          background:
            data!.cardTag === "Popular"
              ? "linear-gradient(99deg, #f80078 -24%, #5e0db6 86%)"
              : "#fff",
        }}
        className={cx(styles.card2Inner, styles.firstCard2Inner)}
      >
        {/* <img
										src='/images/Group 25899.svg'
										className={styles.popular}
										alt=''
									/> */}
        <div className={styles.popular}>
          {/* <Group25899 /> */}
          <p>{data!.cardTag}</p>
        </div>
        {/* <img
										className={(styles.cardCornerImg, styles.firstCardCornerImg)}
										src='/images/Group 25898.svg'
										alt=''
									/> */}
        <div className={cx(styles.cardCornerImg, styles.firstCardCornerImg)}>
          {/* <Group25898 /> */}
          <Image
            src={data!.bgSvg.url}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={cx(styles.card2Main)}>
        {/* <img
										className={styles.card2Logo}
										src='/images/Group 26870.svg'
										alt=''
									/> */}
        <div className={styles.card2Logo}>
          {/* <Group26870 /> */}
          <Image
            src={data!.icon.url}
            alt=""
            // layout='fill'
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </div>
        <div className={cx(styles.card2Info)}>
          <p className={cx(styles.card2InfoHeading)}>{data!.title}</p>
          <p className={cx(styles.card2InfoP)}>{data!.subTitle}</p>
          <div className={cx(styles.card2InfoInner)}>
            <p className={cx(styles.card2InfoInnerP)}>
              <span className={cx(styles.card2InfoInnerSpan)}>
                {data!.investment !== null
                  ? data!.investment.title
                  : "Min Investment"}
              </span>
              ₹{" "}
              {data!.investment !== null
                ? data!.investment.investmentAmount
                : 0}
            </p>
            <p className={cx(styles.card2InfoInnerP)}>
              <span className={cx(styles.card2InfoInnerSpan)}>
                {" "}
                {data!.roi !== null ? data!.roi.title : 0}
              </span>
              {data!.roi !== null ? data!.roi.percentageReturn : 0}%
            </p>
          </div>
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
            <p className={cx(styles.card2InfoInnerSpan2)}>
              {/* {data!.rating_info !== null ? data!.rating_info.ratingCount : 0}{' '} */}
              Ratings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoStratCard;
