/* eslint-disable react/jsx-key */
import React from "react";
import styles from "../../component/Root/HomeComponent/HomeComponent.module.scss";
import cx from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlugPlayCard from "../Root and Apikits/PlugPlayCard/PlugPlayCard";

interface Props {
  homePlug?: Home;
}
export interface Home {
  service_cards: any;
  strategy_cards: any;
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
function HomePlug(Props: Props) {
  const { homePlug } = Props;
  console.log("homePlug", homePlug);
  return (
    <>
      <section id="plug">
        <div className={cx(styles.upperRow)}>
          <p className={cx(styles.sectionHeading, styles.plugHeading)}>
            {/* <br className={cx(styles.mobileLineBreaks)} /> */}
            {homePlug!.title}
          </p>
          <a href="#" className={cx(styles.viewAllButton)}>
            View All
          </a>
        </div>
        <div className={cx(styles.cardContainer3)}>
          <Swiper slidesPerView="auto" className="plugSwiper">
            {homePlug!.service_cards!.map(
              (data: any, index: React.Key | null | undefined) => {
                return (
                  <SwiperSlide className={cx(styles.swiperSlideA)}>
                    <PlugPlayCard
                      key={index}
                      plugCard={data}
                      // avatar={data.avatar[0]}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default HomePlug;
