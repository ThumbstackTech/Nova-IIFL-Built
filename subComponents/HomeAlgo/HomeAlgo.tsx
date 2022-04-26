/* eslint-disable react/jsx-key */
import React from "react";
import styles from "../../component/Root/HomeComponent/HomeComponent.module.scss";

import cx from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import AlgoStratCard from "../Root and Apikits/AlgoStratCard/AlgoStratCard";

interface Props {
  homeAlgo?: Home;
}
export interface Home {
  strategy_cards: any;
  service_cards: any;
  api_kits_cards: ApiKitsCardsEntity[];
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
function HomeAlgo(Props: Props) {
  const { homeAlgo } = Props;
  console.log("homeAlgo", homeAlgo);
  return (
    <>
      <section id="algoStrategies">
        <div className={cx(styles.upperRow)}>
          <p
            className={cx(styles.sectionHeading, styles.algoStrategiesHeading)}
          >
            {homeAlgo!.title}
          </p>
          <ul className={cx(styles.buttons)}>
            <a className={cx(styles.viewAllButton)} href="#">
              View All
            </a>
            {/* <li className={cx(styles.buttonsLi)}>
                      <div className={styles.buttonLiImg}>
                        <NavigateNextBlack />
                      </div>
                    </li>
                    <li className={cx(styles.buttonsLi)}>
                      <div
                        style={{ transform: 'rotate(180deg)' }}
                        className={styles.buttonLiImg}
                      >
                        <NavigateNextBlack />
                      </div>
                    </li> */}
          </ul>
        </div>
        <div className={cx(styles.cardContainer2)}>
          <Swiper
            slidesPerView="auto"
            navigation={true}
            modules={[Pagination, Navigation]}
            className="algo-Swiper"
          >
            {homeAlgo!.strategy_cards!.map(
              (data: any, index: React.Key | null | undefined) => {
                return (
                  <SwiperSlide className={cx(styles.swiperSlideA)}>
                    <AlgoStratCard
                      key={index}
                      data={data}
                      // bgSvg={data.bgSvg}
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

export default HomeAlgo;
