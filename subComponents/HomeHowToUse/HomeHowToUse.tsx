/* eslint-disable react/jsx-key */
import React from "react";
import styles from "../../component/Root/HomeComponent/HomeComponent.module.scss";
import cx from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlugPlayCard from "../Root and Apikits/PlugPlayCard/PlugPlayCard";
import HomeInfoCardGrid from "../Root and Apikits/HomeInfoCard/HomeInfoCard";
import HomeInfoCard1 from "../HomeInfiCard1/HomeInfoCard1";
import HomeInfoCard2 from "../HomeInfoCard2/HomeInfoCard2";


interface Props {
    homeHowToUse?: Home;
  }
  export interface Home {
    bottomCard: any;
    points: PointsEntity[];
    api_kits_cards?: ApiKitsCardsEntity[];
    title: string;
    section_data?: SectionDataEntity[] | null;
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
function HomeHowToUse(Props: Props) {
    const {homeHowToUse} = Props;
    console.log('homeHowToUse', homeHowToUse)
  return (
    <>
             <section id={cx(styles.otherInfo)}>
                <h2 className={cx(styles.otherInfoHeader)}>
                  {homeHowToUse!.title}
                </h2>
                <p>To walk you through every step of the process.</p>
                <HomeInfoCardGrid
                  data={homeHowToUse}
                  // data1={homeHowToUse!.api_kits_cards![1]}
                  // data2={homeHowToUse!.api_kits_cards![2]}
                  // icon={homeHowToUse!.api_kits_cards![0].points![0].icon!}
                  // points={homeHowToUse!.api_kits_cards![0].points![0]}
                  // points1={homeHowToUse!.api_kits_cards![0].points![1]}
                  // points2={homeHowToUse!.api_kits_cards![0].points![2]}
                  // points3={homeHowToUse!.api_kits_cards![0].points![3]}
                  // Links={homeHowToUse!.api_kits_cards![0].links![0]}
                  // Links2={homeHowToUse!.api_kits_cards![1].links![0]}
                  // Links3={homeHowToUse!.api_kits_cards![2].links![0]}

                />
             
              </section>
    </>
  )
}

export default HomeHowToUse