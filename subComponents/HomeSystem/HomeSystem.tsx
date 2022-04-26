/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import styles from "../../component/Root/HomeComponent/HomeComponent.module.scss";

import cx from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ApiKitCard from "../Root and Apikits/ApiKitCard/ApiKitCard";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import { Tab } from "./styles";
import "animate.css";

interface Props {
  datacontent?: Home;
  datatitle?: any;
}
export interface Home {
  [x: string]: any;
  data: any;
  attributes: any;
  topIcon: any;
  description: string;
  bottomTitle: string;
  bottomSubtitle: string;
  button: string;
  subtitle: string;
  bottomTag: string;
  url: string;
  cardTag: String;
  subTitle: String;
  bgSvg: any;
  subTag: String;
  find: any;
  map(
    arg0: (data: any, index: React.Key | null | undefined) => JSX.Element
  ): string;
  title?: string;
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

function HomeSystem(Props: Props) {
  const { datacontent, datatitle } = Props;
  console.log("system1", datacontent);
  console.log("datatitle", datatitle);
  const router = useRouter();
  const [isActive, setActive] = useState(true);
  const [isAlgo, setAlgo] = useState(false);
  const [isEnterprise, setEnterprise] = useState(false);
  const [isFplatform, setFplatform] = useState(false);
  const [isFenterprise, setFenterprise] = useState(false);
  const [swiperData, setSwiperData] = useState(datacontent);
  console.log("swiperData", swiperData);
  let data = datacontent;

  const allData = (datafilter: string) => {
    if (datafilter === "All") {
      setActive(true);
      setAlgo(false);
      setEnterprise(false);
      setFplatform(false);
      setFenterprise(false);
      console.log("datafilter", datafilter);
    } else {
      setActive(false);
    }
    const animate = document.querySelector(".animate__animated");
    animate!.classList.add("animate__fadeInRight");
    setTimeout(() => {
      animate!.classList.remove("animate__fadeInRight");
    }, 1000);
  };

  const algoData = (datafilter: string) => {
    if (datafilter === "Algo-Trading") {
      console.log("algodatafilter", datafilter);
      setAlgo(true);
      setActive(false);
      setEnterprise(false);
      setFplatform(false);
      setFenterprise(false);
    } else {
      setAlgo(false);
    }
    const animate = document.querySelector(".animate__animated");
    animate!.classList.add("animate__fadeInRight");
    setTimeout(() => {
      animate!.classList.remove("animate__fadeInRight");
    }, 1000);
  };

  const enterpriseData = (datafilter: string) => {
    if (datafilter === "Algo-Enterprise") {
      setEnterprise(true);
      setActive(false);
      setAlgo(false);
      setFplatform(false);
      setFenterprise(false);
    } else {
      setEnterprise(false);
    }
    const animate = document.querySelector(".animate__animated");
    animate!.classList.add("animate__fadeInRight");
    setTimeout(() => {
      animate!.classList.remove("animate__fadeInRight");
    }, 1000);
  };

  const FplatformData = (datafilter: string) => {
    if (datafilter === "Fintech-Platform") {
      setFplatform(true);
      setActive(false);
      setAlgo(false);
      setEnterprise(false);
      setFenterprise(false);
    } else {
      setFplatform(false);
    }
    const animate = document.querySelector(".animate__animated");
    animate!.classList.add("animate__fadeInRight");
    setTimeout(() => {
      animate!.classList.remove("animate__fadeInRight");
    }, 1000);
  };

  const FenterpriseData = (datafilter: string) => {
    if (datafilter === "Fintech-Enterprise") {
      setFenterprise(true);
      setFplatform(false);
      setActive(false);
      setAlgo(false);
      setEnterprise(false);
    } else {
      setFenterprise(false);
    }
    const animate = document.querySelector(".animate__animated");
    animate!.classList.add("animate__fadeInRight");
    setTimeout(() => {
      animate!.classList.remove("animate__fadeInRight");
    }, 1000);
  };

  const filterdata = (datafilter: string) => {
    if (datafilter === "All") {
      setSwiperData(datacontent!);
    } else {
      console.log("datafilter1", datacontent);
      // const filterZone = datacontent!.data.map((x, id) => {
      // return(
      //   console.log("x", x.cardType)
      // )
      // })
      let filter = datacontent!.filter(
        (a: { cardType: string }) => a.cardType === datafilter
      );
      setSwiperData(filter);
      console.log("filter", filter);
    }
    const animate = document.querySelector(".animate__animated");
    animate!.classList.add("animate__fadeInRight");
    setTimeout(() => {
      animate!.classList.remove("animate__fadeInRight");
    }, 1000);
  };
  // const {
  //   query: { tab },
  // } = router;

  // const isTabOne = tab === "1" || tab == null;
  // const isTabTwo = tab === "2";
  // const isTabThree = tab === "3";
  // const isTabFour = tab === "4";
  // const isTabFive = tab === "5";

  // $(document).ready(function(){

  //   $("#filterMenus").on('click', 'li', function () {
  //     $("#filterMenus li.filteractive").removeClass("filteractive");
  //     $("#filterMenus li.filteractive").addClass("filteractive");
  // });

  // });

  return (
    <>
      <section id="whatBuild">
        <h2 className={cx(styles.whatBuildHeading, styles.sectionHeading)}>
          {datatitle!.title}
        </h2>
        <div className={cx(styles.upperRow)}>
          <ul id="filterMenus" className={cx(styles.filters)}>
            <li
              className={cx(
                styles.filtersLi,
                styles.firstFilterLi,
                isActive ? "filteractive" : null
              )}
              onClick={() => {
                filterdata("All");
                allData("All");
              }}
            >
              <a>All</a>
            </li>
            <li
              className={cx(styles.filtersLi, isAlgo ? "filteractive" : null)}
              onClick={() => {
                filterdata("Algo-Trading");
                algoData("Algo-Trading");
              }}
            >
              <a>Algo-Trading</a>
            </li>
            <li
              className={cx(
                styles.filtersLi,
                isEnterprise ? "filteractive" : null
              )}
              onClick={() => {
                filterdata("Algo-Enterprise");
                enterpriseData("Algo-Enterprise");
              }}
            >
              <a>Algo-Enterprise</a>
            </li>
            <li
              className={cx(
                styles.filtersLi,
                isFplatform ? "filteractive" : null
              )}
              onClick={() => {
                filterdata("Fintech-Platform");
                FplatformData("Fintech-Platform");
              }}
            >
              <a>Fintech Platform</a>
            </li>
            <li
              className={cx(
                styles.filtersLi,
                isFenterprise ? "filteractive" : null
              )}
              onClick={() => {
                filterdata("Fintech-Enterprise");
                FenterpriseData("Fintech-Enterprise");
              }}
            >
              <a>Fintech Enterprise</a>
            </li>
            {/* <Tab selected={isTabOne}>
              <li className={cx(styles.filtersLi, styles.firstFilterLi)}>
                <Link href={{ pathname: "/", query: { tab: "1" } }}>
                  <a>All</a>
                </Link>
              </li>
            </Tab> */}
            {/* <Tab selected={isTabTwo}>
              <li className={cx(styles.filtersLi)}>
                <Link href={{ pathname: "/", query: { tab: "2" } }}>
                  <a>Algo-Trading</a>
                </Link>
              </li>
            </Tab> */}
            {/* <Tab selected={isTabThree}>
              <li className={cx(styles.filtersLi)}>
                <Link href={{ pathname: "/", query: { tab: "3" } }}>
                  <a>Algo-Enterprise</a>
                </Link>
              </li>
            </Tab> */}
            {/* <Tab selected={isTabFour}>
              <li className={cx(styles.filtersLi)}>
                <Link href={{ pathname: "/", query: { tab: "4" } }}>
                  <a>Fintech Platform</a>
                </Link>
              </li>
            </Tab> */}
            {/* <Tab selected={isTabFive}>
              <li className={cx(styles.filtersLi)}>
                <Link href={{ pathname: "/", query: { tab: "5" } }}>
                  <a>Fintech Enterprise</a>
                </Link>
              </li>
            </Tab> */}
          </ul>
          <ul className={cx(styles.buttons)}>
            <li className={cx(styles.buttonsLi)}>
              {/* <img
										className={cx(styles.buttonLiImg)}
										src='/images/navigate_next_black_24dp.svg'
										alt=''
									/> */}
              <div className={styles.buttonLiImg}>
                {/* <NavigateNextBlack /> */}
              </div>
            </li>
            <li className={cx(styles.buttonsLi)}>
              {/* <img
										className={cx(styles.buttonLiImg)}
										style={{ transform: 'rotate(180deg)' }}
										src='/images/navigate_next_black_24dp.svg'
										alt=''
									/> */}
              <div
                style={{ transform: "rotate(180deg)" }}
                className={styles.buttonLiImg}
              >
                {/* <NavigateNextBlack /> */}
              </div>
            </li>
          </ul>
        </div>
        <div id="filter" className={cx(styles.cardContainer1)}>
          {
            <Swiper
              slidesPerView="auto"
              // spaceBetween={24}
              navigation={true}
              modules={[Pagination, Navigation]}
              className={cx(
                "mySwiper1 animate__animated",
                isActive
                  ? "animate__fadeInRight"
                  : isAlgo
                  ? "animate__animated animate__bounce"
                  : isEnterprise
                  ? "animate__fadeInRight"
                  : isFplatform
                  ? "animate__animated animate__bounce"
                  : isFenterprise
                  ? "animate__fadeInRight"
                  : false
              )}
            >
              {swiperData!?.map((datadetails: Home, index: any) => {
                console.log("datadetails", swiperData);
                return (
                  <SwiperSlide
                    // style={{ width: 'auto', marginRight: '2%' }}
                    className={cx(styles.swiperSlide)}
                  >
                    <ApiKitCard
                      key={index}
                      className={cx(styles.cards)}
                      datacontent={datadetails}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          }
        </div>
      </section>
    </>
  );
}

export default HomeSystem;
