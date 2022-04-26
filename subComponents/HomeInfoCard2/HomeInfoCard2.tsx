import React from "react";
import cx from "classnames";
import styles from "./HomeInfoCard2.module.scss";
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
const HomeInfoCardGrid2 = (props: Props) => {
  let { data,icon,points,points1, points2, points3, Links,data1,Links2,data2,Links3} = props;
  console.log("info card data", data);
  return (
    <div className={cx(styles.infoCard)}>
      <div className={cx(styles.container)}>
        <div className={cx(styles.card)}>
          <div className={cx(styles.bgGradient)} />
          {/* <h2 style={{ paddingLeft: "2.4rem" }}>{data2!.title}</h2> */}
          {/* <p>{data2!.subTitle}</p> */}
          <div className={cx(styles.playbutton)}>
            <Group21681 />
          </div>
          {/* <img src="images/Group 21681.svg" alt="" /> */}
          <div className={cx(styles.linkBtn)}>
            <div className={cx(styles.bgGradient)} />
            <a href="#">
              {/* {Links3!.title} */}
              <div>
                {/* <Image src={data2!.descImg.url} layout="fill" alt="" /> */}
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

export default HomeInfoCardGrid2;
