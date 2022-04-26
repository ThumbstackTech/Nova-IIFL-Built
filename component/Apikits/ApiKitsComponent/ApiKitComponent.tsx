import React, { useState } from "react";
import ApiKitCard from "../../../subComponents/Root and Apikits/ApiKitCard/ApiKitCard";
import Head from "next/head";
import Image from "next/image";
import styles from "./ApiKitComponent.module.scss";
import cx from "classnames";
import "animate.css";
import {
  Group25597,
  IconIonicIosAddCircleOutlineWhite,
  RatingStar,
  GreenCheck,
  WhiteArrow,
  Group25237,
  AddCircleOutline,
  Node,
  GoLogoBlue,
  Java,
  Group26409,
  Group25694,
  Group26408,
  EastBlack,
  Group25688,
  Group21681,
  Group252374,
  Group256941,
  NavigateNextBlack,
} from "../../../svgs/SVG";
import ApiKitsTopCard from "../../../subComponents/Root and Apikits/ApiKitsTopCard/ApiKitsTopCard";
import AllKitOptionsHorizontal from "../../../subComponents/Root and Apikits/AllKitOptionsHorizontal/AllKitOptionsHorizontal";
import InfoCardGrid from "../../../subComponents/Root and Apikits/InfoCardGrid/InfoCardGrid";
import Header from "../../Root/HeadeComponent/Header";
import SideBar from "../../Root/SideBarComponent/SideBar";
import FooterDetails from "../../Root/FooterComponent/Footer";
import styled from "../../Root/Root/Root.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import ApiKitsCardsEntity  from "../../../Interface/HomeDataInterface";
import { APIKitsCard } from "../../../Interface/HomeInterface";
import AllKitOptionsHorizontalNew from "../../../subComponents/Root and Apikits/AllKitOptionsHorizontalNew/AllKitOptionsHorizontalNew";
import HomeSystem from "../../../subComponents/HomeSystem/HomeSystem";
import AllApiFilter from "../../../subComponents/Root and Apikits/AllApiFilter/AllApiFilter";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import HomeInfoCardGrid from "../../../subComponents/Root and Apikits/HomeInfoCard/HomeInfoCard";
import { ApiKitsCardsEntity } from "../../../Interface/devDocs";

interface Props {
  data?: data;
}
export interface data {
  apiKit: any;
  data: any;
  section_data?: SectionDataEntity[] | null;
  api_kits_cards?: ApiKitsCardsEntity[];
}
export interface SectionDataEntity {
  title: string;
  api_kits_cards?: APIKitsCard[];
}
// export interface ApiKitsCardsEntity1 {
//   api_info: ApiInfo | null;
//   title: string;
//   subTitle?: string | null;
//   cardTag?: string | null;
//   subTag?: string | null;
//   avatar?: AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg[] | null;
//   descImg?: AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg1 | null;
//   topRightCornerImg?: AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg2 | null;
//   points?: (PointsEntity | null)[] | null;
//   rating_info?: RatingInfo | null;
//   response_info?: ResponseInfo | null;
//   success_info?: SuccessInfo | null;
//   links?: (LinksEntity | null)[] | null;
// }
export interface AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg {
  url: string;
}
export interface AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg1 {
  url: string;
}
export interface AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg2 {
  url: string;
}
export interface PointsEntity {
  title: string;
  icon?: AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg3 | null;
}
export interface AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg3 {
  url: string;
}
export interface ApiInfo {
  title: string;
  titleTag: string;
  api: number;
  apiCallsAvg: number;
}
export interface RatingInfo {
  title: string;
  ratingCount: string;
  rating: string;
}
export interface ResponseInfo {
  title: string;
  tag: string;
  icon: AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg;
}
export interface SuccessInfo {
  title: string;
  successRate: number;
  icon?: AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg[] | null;
}
export interface LinksEntity {
  title: string;
}
export interface ApiKitsCardsEntity1 {
  title: string;
  cardTag: string;
}
export interface PointsEntity1 {
  title: string;
  tag?: string;
  icon: AvatarEntityOrIconOrIconEntityOrTopRightCornerImgOrDescImg;
}

function ApiKitComponent(props: Props) {
  const { data } = props;
  console.log("api kit", data);
  // console.log("x", data!.data.languages.title);
  const [isActive, setActive] = useState(true);
  const [isAlgo, setAlgo] = useState(false);
  const [isEnterprise, setEnterprise] = useState(false);
  const [isFplatform, setFplatform] = useState(false);
  const [isFenterprise, setFenterprise] = useState(false);
  const [swiperData, setSwiperData] = useState(data!.data.apiKit.api_kit_cards);
  console.log("swiperData", swiperData);
  let data1 = data;

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
    // const animate = document.querySelector('.animate__animated');
    // animate!?.classList.add('animate__fadeInRight');
    // setTimeout(() => {
    //   animate!.classList.remove('animate__fadeInRight');
    // }, 1000);
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
    // const animate = document.querySelector('.animate__animated');
    // animate!?.classList.add('animate__fadeInRight');
    // setTimeout(() => {
    //   animate!.classList.remove('animate__fadeInRight');
    // }, 1000);
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
    // const animate = document.querySelector('.animate__animated');
    // animate!?.classList.add('animate__fadeInRight');
    // setTimeout(() => {
    //   animate!.classList.remove('animate__fadeInRight');
    // }, 1000);
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
    // const animate = document.querySelector('.animate__animated');
    // animate!?.classList.add('animate__fadeInRight');
    // setTimeout(() => {
    //   animate!.classList.remove('animate__fadeInRight');
    // }, 1000);
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
    // const animate = document.querySelector('.animate__animated');
    // animate!?.classList.add('animate__fadeInRight');
    // setTimeout(() => {
    //   animate!.classList.remove('animate__fadeInRight');
    // }, 1000);
  };

  const filterdata = (datafilter: string) => {
    if (datafilter === "All") {
      setSwiperData(data!.data.apiKit.api_kit_cards);
    } else {
      console.log("datafilter1", data!.data.apiKit.api_kit_cards);
      // const filterZone = datacontent!.data.map((x, id) => {
      // return(
      //   console.log("x", x.attributes.cardType)
      // )
      // })
      let filter = data!.data.apiKit.api_kit_cards.filter(
        (a: { cardType: string }) => a.cardType === datafilter
      );
      setSwiperData(filter);
      console.log("filter", filter);
    }
    // const animate = document.querySelector('.animate__animated');
    // animate!.classList.add('animate__fadeInRight');
    // setTimeout(() => {
    //   animate!.classList.remove('animate__fadeInRight');
    // }, 1000);
  };
  return (
    <>
      <div id={cx(styled.main)}>
        <SideBar />
        <div className={cx(styled.body)}>
          <div id="main-content" className={cx(styles.wrapper)}>
            <div className={cx(styles.mainContent)}>
              <section id={cx(styles.MostPopular)}>
                <h1>{data!.data.title}</h1>
                <div className={cx(styles.cardSwiperWrapper)}>
                  {
                    <Swiper
                      slidesPerView="auto"
                      spaceBetween={24}
                      // slidesPerGroup={4}
                      loop={false}
                      loopFillGroupWithBlank={true}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Pagination, Navigation]}
                      className="mySwiperapikit"
                    >
                      {data!.data.apiKit.api_kit_cards.map(
                        (kitData: any, idx: number) => {
                          return (
                            <SwiperSlide key={idx}>
                              <ApiKitsTopCard cardDetals={kitData} />
                            </SwiperSlide>
                          );
                        }
                      )}
                    </Swiper>
                  }

                  {/* <ApiKitsTopCard /> */}
                  {/* <ApiKitsTopCard /> */}
                </div>
                <div className={cx(styles.allKits)}>
                  <div className={cx(styles.allKitP)}>
                    <p>{data!.data.kits.title && data!.data.kits.title}</p>
                  </div>
                  {<AllKitOptionsHorizontal lg={data!.data.kits.languages} />}
                </div>
              </section>
              {/* <AllApiFilter data={data!.section_data![0].api_kits_cards!} /> */}
              {/* <HomeSystem datacontent={data!.section_data![0].api_kits_cards} /> */}
              {
                <section id={cx(styles.AllApiKits)}>
                  {/* <h2>{data!.data.apiKit.title}</h2> */}
                  {/* <p>{data!.data.apiKit.description}</p> */}
                  <div className={cx(styles.upperRow)}>
                    <ul className={cx(styles.filters)}>
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
                        className={cx(
                          styles.filtersLi,
                          isAlgo ? "filteractive" : null
                        )}
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
                    </ul>
                  </div>
                  <div className={cx(styles.gridContainer)}>
                    {console.log("apikitadatas1", data!.apiKit)}
                    {swiperData!?.map(
                      (data: any, index: React.Key | null | undefined) => (
                        // <ApiKitCard key={index} content={ApiCardData} />

                        <ApiKitCard
                          key={index}
                          className={cx(styles.cards)}
                          // content={ApiCardData}
                          datacontent={data}
                        />
                      )
                    )}
                  </div>
                </section>
              }
              <section id={cx(styles.otherInfo)}>
                <h2 className={cx(styles.otherInfoHeader)}>
                  {data!.data.how_to_use.title}
                </h2>
                <p> {data!.data.how_to_use.subtitle}</p>
                {data!.data.how_to_use && (
                  <InfoCardGrid Datadata={data!.data.how_to_use} />
                )}
                {/* {data.section_data[1].api_kits_cards.map((cardDetails, idx) => { */}
                {/* })} */}
                {/* <InfoCardGrid /> */}
              </section>
            </div>
          </div>
        </div>
      </div>
      <FooterDetails />
    </>
  );
}

export default ApiKitComponent;

// Data variable, This will be not the actual data, It is used here only for development purpose
// In production this data Would come from CMS

const demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// const ApiCardData: Content = {
//   title: "User Authentication System",
//   href: {
//     pathname: "/[nav]/[section]",
//     query: { nav: "apiKits", section: "UserAuthenticationSystem" },
//   },
//   cost: "paid",
//   desc: `For clients or partners to integrate	the authentication mechanism.`,
//   info: { api: 6, rating: 4.2, successRate: "95.4%" },
//   avatar: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="49.524"
//       height="65"
//       viewBox="0 0 49.524 65"
//     >
//       <path
//         data-name="Path 76963"
//         d="M47.333 22.667h-3.1v-6.19a15.476 15.476 0 0 0-30.952 0v6.19h-3.1A6.209 6.209 0 0 0 4 28.857V59.81A6.209 6.209 0 0 0 10.19 66h37.143a6.209 6.209 0 0 0 6.19-6.19V28.857a6.209 6.209 0 0 0-6.19-6.19zM28.762 50.524a6.19 6.19 0 1 1 6.19-6.19 6.209 6.209 0 0 1-6.19 6.19zm9.6-27.857H19.167v-6.19a9.6 9.6 0 0 1 19.19 0z"
//         transform="translate(-4 -1)"
//         fill="#02b5b5"
//       />
//     </svg>
//   ),
//   topRightCornerImg: (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="185.008"
//       height="202.17"
//       viewBox="0 0 185.008 202.17"
//     >
//       <defs>
//         <filter
//           id="Rectangle_6480"
//           x="0"
//           y="0"
//           width="185.008"
//           height="183.966"
//           filterUnits="userSpaceOnUse"
//         >
//           <feOffset dy="3" />
//           <feGaussianBlur stdDeviation="16" result="blur" />
//           <feFlood floodOpacity=".078" />
//           <feComposite operator="in" in2="blur" />
//           <feComposite in="SourceGraphic" />
//         </filter>
//         <filter
//           id="Rectangle_6481"
//           x="38.734"
//           y="61.951"
//           width="141.704"
//           height="140.219"
//           filterUnits="userSpaceOnUse"
//         >
//           <feOffset dy="3" />
//           <feGaussianBlur stdDeviation="16" result="blur-2" />
//           <feFlood floodOpacity=".078" />
//           <feComposite operator="in" in2="blur-2" />
//           <feComposite in="SourceGraphic" />
//         </filter>
//         <linearGradient
//           id="linear-gradient"
//           x1="-.095"
//           y1="-.161"
//           x2=".967"
//           y2=".957"
//           gradientUnits="objectBoundingBox"
//         >
//           <stop offset="0" stopColor="#fef201" />
//           <stop offset="1" stopColor="#03acef" />
//         </linearGradient>
//         <style>.cls-1{}</style>
//       </defs>
//       <g id="Group_25858" data-name="Group 25858">
//         <g filter="url(#Rectangle_6480)" transform="translate(-.002 .003)">
//           <rect
//             id="Rectangle_6480-2"
//             data-name="Rectangle 6480"
//             className="cls-1"
//             opacity=".5"
//             fill="url(#linear-gradient)"
//             width="82.344"
//             height="83.467"
//             rx="41.172"
//             transform="rotate(-94 88.868 41.428)"
//           />
//         </g>
//         <g filter="url(#Rectangle_6481)" transform="translate(-.002 .003)">
//           <rect
//             id="Rectangle_6481-2"
//             data-name="Rectangle 6481"
//             className="cls-1"
//             opacity=".5"
//             fill="url(#linear-gradient)"
//             width="41.326"
//             height="42.926"
//             rx="20.663"
//             transform="rotate(-94 115.294 33.799)"
//           />
//         </g>
//       </g>
//     </svg>
//   ),
// };
