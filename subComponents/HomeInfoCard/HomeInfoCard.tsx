import React from "react";
import cx from "classnames";
import styles from "./HomeInfoCard.module.scss";
import {
  EastBlack,
  Group21681,
  Group25688,
  Group25694,
  Group256941,
  Group26408,
  Group26409,
} from "../../svgs/SVG";
import Image from "next/image";
import { ApiInfo, DownloadsInfo, IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg, IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg1, IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg2, IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg3, InvestmentInfo, LinksEntity, RatingInfo, ReturnInfo, SuccessInfo } from "../../component/Root/HomeComponent/HomeComponent";

interface Props {
  cardData?: ApiKitsCardsEntity[];
  data?: CardData;
  api_kits_cards?: ApiKitsCardsEntity[];
  icon?:CardData;
  points?: CardData;
  points1?:CardData;
  points2?:CardData;
  points3?:CardData;
  Links?: CardData;
  data1?: CardData;
  Links2?:CardData;
  data2?:CardData;
  Links3?: CardData;
}
export interface ApiKitsCardsEntity {
  title?: string | null;
  subTitle?: string | null;
  cardTag?: string | null;
  subTag?: string | null;
  filterTag?: null;
  avatar?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg[] | null;
  descImg?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg1 | null;
  bgSvg?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg2 | null;
  topRightCornerImg?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg3 | null;
  points?: PointsEntity[];
  api_info?: ApiInfo | null;
  downloads_info?: DownloadsInfo | null;
  investment_info?: InvestmentInfo | null;
  rating_info?: RatingInfo | null;
  return_info?: ReturnInfo | null;
  links?: LinksEntity[] | null;
  success_info?: SuccessInfo | null;
}
export interface CardData {
  icon: any;
  length: number;
  url: any;
  title: string;
  descImg: Url;
  points?: PointsEntity[];
  subTag?: string;
  subTitle?: string;
  links?: LinksEntity[];
}
export interface PointsEntity {
  title: string;
  // lang: string[] | null;
  tag?: string;
  icon: Url;
}
export interface Link {
  title: string;
}
export interface Url {
  url: string;
}
const HomeInfoCard = (props: Props) => {
  let { data,icon,points,points1, points2, points3, Links,data1,Links2,data2,Links3} = props;
  console.log("info", data);
  return (
    <div className={cx(styles.infoCard)}>
      <div className={cx(styles.container)}>
      <div className={cx(styles.card)}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
            }}
          >
            {/* <h2>Choosing the Right API Kits123</h2> */}
            {/* <h2>{data!.title}</h2> */}
            <div className={cx(styles.chooseImg)}>
              {/* <Image src={data!.descImg!.url} layout="fill" alt="" /> */}
              {/* <Group26408 /> */}
            </div>
          </div>
          <div className={cx(styles.choose)}>
            <ul className={cx(styles.chooseSteps)}>
              <li>
                {/* <Group26409 /> */}
                {/* <Image
                  src={data!.descImg!.url}
                  alt=""
                  width="22px"
                  height="22px"
                  // layout="fill"
                  objectFit="contain"
                /> */}

                {/* <img src="images/Group 26409.svg" alt="" /> */}
             <div className={cx(styles.imageSteps)}>
             {/* <Image 
                  src={icon!.url}
                  alt=""
                  width="28px"
                  height="28px"
                  // layout="fill"
                  objectFit="contain"
                /> */}
             </div>
                {/* <img src="images/Group 25694.svg" alt="" /> */}
                <p style={{ width: "60%" }}>
                  {/* {points!.title} */}
                  {/* Identify <br />
                  Your Need */}
                </p>
              </li>
              <li>
              <div className={cx(styles.imageSteps)}>
             {/* <Image 
                  src={points1!.icon!.url}
                  alt=""
                  width="28px"
                  height="28px"
                  // layout="fill"
                  objectFit="contain"
                /> */}
             </div>
                {/* <img src="images/Group 25694.svg" alt="" /> */}
                <p style={{ width: "60%" }}>
                  {/* {points1!.title} */}
                  {/* Explore <br />
                  Our API Kits */}
                </p>
              </li>
              <li>
              <div className={cx(styles.imageSteps3)}>
             {/* <Image 
                  src={points2!.icon!.url}
                  alt=""
                  width="28px"
                  height="28px"
                  // layout="fill"
                  objectFit="contain"
                /> */}
             </div>
                {/* <img src="images/Group 25694 (1).svg" alt="" /> */}
                
                <p style={{ width: "60%" }}>
                  {/* {points2!.title} */}
                  {/* Generate Key <br />
                  &amp; Start using */}
                </p>
              </li>
            </ul>

            {/* <img src="images/Group 26408.svg" alt="" /> */}
          </div>
          <div className={cx(styles.linkBtn)}>
            {/* <p>{data!.subTag}</p> */}
            <a href="#">
              {/* {Links!.title} */}
              <div>
                <EastBlack />
              </div>
              {/* <img src="images/east_black_24dp.svg" alt="" /> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfoCard;
