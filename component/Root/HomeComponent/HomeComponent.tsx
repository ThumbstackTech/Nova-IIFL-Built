/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import styles from "./HomeComponent.module.scss";
import ApiKitCard from "../../../subComponents/Root and Apikits/ApiKitCard/ApiKitCard";
import cx from "classnames";
import Head from "next/head";
import Header from "../HeadeComponent/Header";
import FooterDetails from "../FooterComponent/Footer";
import Sidebar from "../SideBarComponent/SideBar";
import styled from "../Root/Root.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeSystem from "../../../subComponents/HomeSystem/HomeSystem";
import Hometop from "../../../subComponents/HomeTop/HomeTop";
import HomeAlgo from "../../../subComponents/HomeAlgo/HomeAlgo";
import HomePlug from "../../../subComponents/HomePlug/HomePlug";
import HomeHowToUse from "../../../subComponents/HomeHowToUse/HomeHowToUse";
import { Attributes } from "../../../Interface/slug";
import HomeTopFifthCard from "../../../subComponents/HomeTopFifthCard/HomeTopFifthCard";

interface Props {
  data?: Home;
}
export interface Home {
  how_to_use: any;
  products: any;
  homeTopComponent: number;
  data: Home | undefined;
  title: string;
  section_data?: SectionDataEntity[] | null;
}
export interface SectionDataEntity {
  length: number;
  title: string;
  api_kits_cards?: ApiKitsCardsEntity[];
}
export interface ApiKitsCardsEntity {
  [x: string]: any;
  title?: string | null;
  subTitle?: string | null;
  cardTag?: string | null;
  subTag?: string | null;
  desc?: null;
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
  response_info?: null;
  success_info?: SuccessInfo | null;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg {
  length: number;
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
  length: Home | undefined;
  title: string | null;
  tag?: null;
  sortDesc?: null;
  bg?: null;
  bgSvg?: null;
  descImg: JSX.Element;
  icon?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg4 | null;
}
export interface Url {
  url: string;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg4 {
  url: string;
}
export interface ApiInfo {
  title: string;
  tag?: null;
  titleTag: string;
  api: number;
  apiCallsAvg: number;
  icon?: null;
}
export interface DownloadsInfo {
  title?: null;
  tag?: null;
  downloadTag: string;
  downloadsCount?: null;
  icon?: null;
}
export interface InvestmentInfo {
  title: string;
  tag?: null;
  investmentTag?: null;
  investmentAmount: string;
  icon?: null;
}
export interface RatingInfo {
  title: string;
  tag?: null;
  ratingTag?: null;
  ratingCount: string;
  rating: string;
  icon?: null;
}
export interface ReturnInfo {
  title: string;
  tag?: null;
  percentageReturn: number;
}
export interface LinksEntity {
  length: number;
  title: string;
  href?: null;
  icon?: null;
}
export interface SuccessInfo {
  title: string;
  tag?: null;
  successRate: number;
  icon?: null;
}

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomeComponent(Props: any) {
  // 	const dispatch = useDispatch();
  // const cardList = useSelector((state) => state.cardList);
  // const { loading, error, cards } = cardList;

  const fifthCardCtadetails = {
    // backgroundColor: 'rgba(255, 255, 255, 0.25)',
    // backDropFilter: 'blur(0.4rem)',
  };
  // const { data, error } = useSWR(
  // 	"https://backend-nova.herokuapp.com/api/home",
  // 	fetcher
  //   );

  //   if (error) return <Loading/>;
  //   if (!data) return <ErrorMessage/>;

  if (!Props.data) {
    return <div>No data Found</div>;
  }
  console.log("hello", Props);
  console.log("test", Props.data!.data!.products[0]);
  return (
    <>
      <Head>
        <title>Nova - IIFL</title>
        <meta
          name="description"
          content="Nova - IIFL - Best Documantion Site"
        />
        <meta property="og:title" content="Nova - IIFL" />
        <meta
          property="og:description"
          content="Nova - IIFL - Best Documantion Site"
        />
        <meta property="og:url" content="https://nova.iifl.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="root-main" id={cx(styled.main)}>
        <Sidebar />
        <div className={cx(styled.body)}>
          <div id="main-content" className={cx(styles.wrapper)}>
            <div className={cx(styles.mainContent)}>
              <Hometop
                titletop={Props.data!.data}
                hometop={Props.data!.data!.homeTopComponent}
                hometop2={Props.data!.data!.homeTopComponent}
                hometop3={Props.data!.data!.homeTopComponent}
                hometop4={Props.data!.data!.homeTopComponent}
                hometop5={Props.data!.data!.homeTopComponent}
                Points={Props.data!.data!.homeTopComponent![0].icon[0]}
                Points2={Props.data!.data!.homeTopComponent![0].icon[1]}
                Points3={Props.data!.data!.homeTopComponent![0].icon[2]}
                Points4={Props.data!.data!.homeTopComponent![0].icon[3]}
                Link1={Props.data!.data!.homeTopComponent![0].link}
                Link2={Props.data!.data!.homeTopComponent![1].link}
                Link3={Props.data!.data!.homeTopComponent![2].link}
                Link5={Props.data!.data!.homeTopComponent![3].link}
                Link4={Props.data!.data!.homeTopComponent![4].link}
                Avatar={Props.data!.data!.homeTopComponent![4].topIcon.icon}
              />
              {/* {Props.data!.section_data![1] && (
              <HomeSystem datacontent={Props.data!.section_data![1].api_kits_cards!.length !== 0 ? 
                Props.data!.section_data![1].api_kits_cards! : ""} />
              )}
              
              {Props.data!.section_data![2] && (
              <HomeAlgo homeAlgo={Props.data!.section_data![2].length !== 0 ? Props.data!.section_data![2] : ""} />
              )}
              {Props.data!.section_data![3] && (
                <HomePlug homePlug={Props.data!.section_data![3].length !== 0 ? Props.data!.section_data![3] : ""} />
              )}
              {Props.data!.section_data![4] && (
                <HomeHowToUse homeHowToUse={Props.data!.section_data![4].length !== 0 ? Props.data!.section_data![4] : ""} />
              )} */}
              {Props.data!.data!.products!.map((content: any, idx: any) => {
                const { __component } = content;
                if (
                  __component &&
                  __component === "home-product.home-api-kit"
                ) {
                  return (
                    <HomeSystem
                      datacontent={Props.data!.data!.products[0].api_kit_cards}
                      datatitle={Props.data!.data!.products[0]}
                    />
                  );
                } else if (
                  __component &&
                  __component === "home-product.service"
                ) {
                  return (
                    <HomeAlgo
                      homeAlgo={Props.data!.data!.products[2]}
                      // Link4={Link4}
                      // Avatar={Avatar}
                    />
                  );
                } else if (
                  __component &&
                  __component === "home-product.strategy"
                ) {
                  return (
                    <HomePlug
                      homePlug={Props.data!.data!.products[1]}
                      // Link4={Link4}
                      // Avatar={Avatar}
                    />
                  );
                } else {
                  return false;
                }
              })}
              {Props.data!.data!.how_to_use && (
                <HomeHowToUse homeHowToUse={Props.data!.data!.how_to_use} />
              )}
            </div>
          </div>
        </div>
      </div>
      <FooterDetails />
      {/* </div> */}
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`https://micro-nova.herokuapp.com/home`);
  const data = await res.json();

  return { props: { data } };
}
const demoArray = [1, 2];
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
