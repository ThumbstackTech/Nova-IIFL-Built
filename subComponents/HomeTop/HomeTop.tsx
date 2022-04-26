/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import React from "react";
import styles from "../../component/Root/HomeComponent/HomeComponent.module.scss";

import cx from "classnames";
import {
  EastBlack,
  Group23244,
  Group21681,
  LocalMallBlack24Dp,
  BuildBlack,
  CampaingBlack,
  Rupee,
  WhiteArrow,
  Group23239,
  Group25344,
} from "../../svgs/SVG";

import Image from "next/image";
import { APIKitsCard } from "../../Interface/HomeInterface";
import { Url } from "../../component/Root/HomeComponent/HomeComponent";
import HomeTopFirstCard from "../HomeTopFirstCard/HomeTopFirstCard";
import HomeTopSecondCard from "../HomeTopSecondCard/HomeTopSecondCard";
import HomeTopThirdCard from "../HomeTopThirdCard/HomeTopThirdCard";
import HomeTopFourthCard from "../HomeTopFourthCard/HomeTopFourthCard";
import HomeTopFifthCard from "../HomeTopFifthCard/HomeTopFifthCard";

interface Props {
  hometop?: any;
  titletop?: any;
  Points?: any;
  hometop2?: any;
  Points2?: any;
  Points3?: any;
  Points4?: any;
  Link1?: any;
  Link2?: any;
  Link3?: any;
  Link4?: any;
  Link5?: any;
  hometop3?: any;
  hometop4?: any;
  Avatar?: any;
  hometop5?: any;
}
export interface Home2 {
  subTag: String;
  bgSvg: any;
  url: any;
  subTitle: String;
  title: String;
  api_kits_cards?: ApiKitsCardsEntity[];
}
export interface Home {
  homeTopComponent: any;
  cardTag: String;
  url: any;
  subTitle: String;
  icon: any;
  title: string;
  links: any;
  subTag: string;
  // section_data?: SectionDataEntity[] | null;
  api_kits_cards?: ApiKitsCardsEntity[];
  points?: PointsEntity[];
}
export interface SectionDataEntity {
  title: string;
  api_kits_cards?: ApiKitsCardsEntity[];
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
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg {
  url: string;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg1 {
  url: string;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg2 {
  url: string;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg3 {
  url: string;
}
export interface PointsEntity {
  title: string | null;
  icon?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg4 | null;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg4 {
  url: string;
}
export interface ApiInfo {
  title: string;
  titleTag: string;
  api: number;
  apiCallsAvg: number;
}
export interface DownloadsInfo {
  downloadTag: string;
}
export interface InvestmentInfo {
  title: string;
  investmentAmount: string;
}
export interface RatingInfo {
  title: string;
  ratingCount: string;
  rating: string;
}
export interface ReturnInfo {
  title: string;
  percentageReturn: number;
}
export interface LinksEntity {
  title: string;
}
export interface SuccessInfo {
  title: string;
  successRate: number;
}
function HomeTop(Props: Props) {
  const {
    hometop,
    hometop2,
    titletop,
    Points,
    Points2,
    Points3,
    Points4,
    Link1,
    Link2,
    hometop3,
    Link3,
    hometop4,
    Avatar,
    hometop5,
    Link4,
    Link5,
  } = Props;

  console.log("hometop", Link5);

  return (
    <>
      <section id="future">
        <h1 className={cx(styles.sectionHeading)}>{titletop!.title}</h1>
        <div className={cx(styles.container1)}>
          {
            <div className={cx(styles.futureContainer)}>
              <div className={cx(styles.row1)}>
                {titletop!.homeTopComponent!.map((content: any, idx: any) => {
                  const { __component } = content;
                  if (__component && __component === "home.start-building") {
                    return (
                      <HomeTopFirstCard
                        hometop={hometop[0]}
                        Points={Points}
                        Points2={Points2}
                        Points3={Points3}
                        Points4={Points4}
                        Link1={Link1}
                      />
                    );
                  } else if (
                    __component &&
                    __component === "home.hire-developer"
                  ) {
                    return (
                      <HomeTopSecondCard hometop2={hometop2[1]} Link2={Link2} />
                    );
                  } else if (__component && __component === "home.learn") {
                    return (
                      <HomeTopThirdCard hometop3={hometop3[2]} Link3={Link3} />
                    );
                  } else {
                    return false;
                  }
                })}
                {/* <HomeTopFirstCard 
               hometop={hometop}
               Points={Points}
               Points2={Points2}
               Points3={Points3}
               Points4={Points4}
               Link1={Link1}
               
               /> */}
                {/* <HomeTopSecondCard 
               hometop2={hometop2}
               Link2={Link2}
               />
              <HomeTopThirdCard 
              hometop3={hometop3}
              Link3={Link3}
              /> */}
              </div>
              <div className={cx(styles.row2)}>
                {titletop!.homeTopComponent!.map((content: any, idx: any) => {
                  const { __component } = content;
                  if (__component && __component === "home.store") {
                    return (
                      <HomeTopFourthCard hometop4={hometop4[3]} Link5={Link5} />
                    );
                  } else if (__component && __component === "home.incubator") {
                    return (
                      <HomeTopFifthCard
                        hometop5={hometop5[4]}
                        Link4={Link4}
                        Avatar={Avatar}
                      />
                    );
                  } else {
                    return false;
                  }
                })}
                {/* <HomeTopFourthCard hometop4={hometop4}/> */}
                {/* <HomeTopFifthCard 
            hometop5={hometop5}
            Link4={Link4}
            Avatar={Avatar}
            /> */}
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
}

export default HomeTop;
