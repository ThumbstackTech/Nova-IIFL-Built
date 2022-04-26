/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import cx from "classnames";
import Image from "next/image";
import ShowMore from "react-show-more";
import ApiKitCard from "../../../subComponents/Root and Apikits/ApiKitCard/ApiKitCard";
import Head from "next/head";
import styles from "../../../component/Apikits/UserAuthenticationComponent/UserAuthenticationComponent.module.scss";
import {
  Lock,
  StarRateBlack,
  TimmerBlack,
  CheckCircleBlack,
  IconIonicIosAddCircleOutlineRed,
  DoneBlack,
  Python,
  Node,
  Api,
  Java,
  GoLogoBlue,
  PlayBlue,
  Group252373,
  ExpandMoreBlack,
  IconIonicIosAddCircleOutline,
  NavigateNextBlack,
  Group252374,
  WhiteArrow,
} from "../../../svgs/SVG";
import ItemCard from "../../../subComponents/Root and Apikits/ItemCard/ItemCard";
import AnchorWidget from "../../../subComponents/Root and Apikits/AnchorWidget/AnchorWidget";
import AllKitOptionsHorizontal from "../../../subComponents/Root and Apikits/AllKitOptionsHorizontal/AllKitOptionsHorizontal";
import Header from "../../../component/Root/HeadeComponent/Header";
import SideBar from "../../../component/Root/SideBarComponent/SideBar";
import FooterDetails from "../../../component/Root/FooterComponent/Footer";
import styled from "../../../component/Root/Root/Root.module.scss";
import { useRouter } from "next/router";
import React, { Key, useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
// import { ApiKitsCardsEntity } from "../../../Interface/HomeDataInterface";
import { system } from "../../../Interface/SystemPage";
import axios from "axios";
import Store from "../../../Redux/Store";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cart.slice";

export interface Props {
  system: APIKitPageData;
  meta: Meta;
  incidents: any;
}

export interface APIKitPageData {
  data: any;
  id: number;
  title: string;
  cardTag: string;
  subTag: string;
  subTitle: string;
  shortDesc: string;
  description: string;
  cardType: string;
  slug: string;
  seoTitle: string;
  seoMetaDescription: string;
  avatar: Avatar;
  topRightCornerImg: Avatar;
  rating: Rating;
  response: Response;
  success: Success;
  aboutApiKit: AboutAPIKit;
  integrationSupport: IntegrationSupport;
  buildGuide: AboutAPIKit;
  api_pages: APIPage[];
}

export interface AboutAPIKit {
  list: any;
  id: number;
  title: string;
  subTitle: string;
  bg?: Bg;
}

export interface Bg {
  data: BgData;
}

export interface BgData {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  url: string;
}

export interface APIPage {
  id: number;
  title: string;
  apiType: string;
  apiLang: string;
  description: string;
  api: API;
  success: Success;
  response: Response;
}

export interface API {
  id: number;
  title: string;
  apiCallsAvg: string;
}

export interface Response {
  id: number;
  title: string;
  tag: string;
}

export interface Success {
  id: number;
  title: string;
  successRate: number;
}

export interface Avatar {
  id: number;
  url: string;
}

export interface IntegrationSupport {
  id: number;
  title: string;
  kits: Kit[];
}

export interface Kit {
  id: number;
  title: string;
  icon: Bg;
}

export interface Rating {
  id: number;
  title: string;
  ratingCount: string;
  rating: number;
}

export interface Meta {}

function System(props: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { system, incidents } = props;
  const [anchorActive, setAnchorActive] = useState("For Platform");
  const [readMore, setReadMore] = useState(false);
  const [activeId, setActiveId] = useState(0);
  // const [tabtitle, setTabTitle] = useState(
  //   data!.section_data[1].api_kits_cards[0].api_products.length > 0 &&
  //     data!.section_data[1].api_kits_cards[0].api_products![0].title
  // );
  console.log("slug1", system);
  // const router = useRouter();
  // const { slug } = router.query;
  // const system = page.find(
  //   (a: { slug: string | string[] | undefined }) => a.slug === slug
  // );
  console.log("url", incidents.data);

  // if (!system) {
  //   return <div>Card Not Found</div>;
  // }
  // const getTabClicked = (tabTitle?: string) => {
  //   console.log('Tab clicked==', tabTitle);
  //   setTabTitle(tabTitle);
  // };

  const handaler = () => {
    dispatch(addToCart(system.data));
    // router.push("/Cart");
  };

  return (
    <>
      <Head>
        <title>{system.data?.seoTitle}</title>
        <meta
          name="description"
          content="Nova - IIFL - Best Documantion Site"
        />
        <meta property="og:title" content="Nova - IIFL" />
        <meta property="og:description" content={system.data?.shortDesc} />
        <meta property="og:url" content="https://nova.iifl.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={cx(styled.main)}>
        <SideBar />
        <div className={cx(styled.body)}>
          <div id="main-content" className={cx(styles.wrapper)}>
            <div className={cx(styles.mainContent)}>
              <p>
                {" "}
                <span style={{ color: "#1271d0" }}>API Kits /</span>{" "}
                {system.data?.title}
              </p>
              <div className={cx(styles.cartBody)}>
                <div
                  style={{ width: "100%" }}
                  className={cx(styles.topCard, "row")}
                >
                  <div className={cx("col")}>
                    <div
                      id={cx(styles.topCard)}
                      className={cx(styles.itemCard)}
                    >
                      <div className={cx("row")}>
                        <div className={cx(styles.icon, "col-3")}>
                          <div className={cx(styles.lockImg)}>
                            <Image
                              src={
                                system.data?.avatar && system.data?.avatar.url
                              }
                              alt=""
                              layout="fill"
                              objectFit="contain"
                              // width='100%'
                              // height='100%'
                            />
                          </div>
                          {/* <img src="/images/lock.svg" alt="" /> */}
                        </div>
                        <div
                          className={cx(
                            styles.cardTitle,
                            "d-flex flex-column justify-content-around col col-xl-6 col-xxl-7 col-lg-6 col-md-5"
                          )}
                        >
                          <h1
                            id={cx(styles.firstTitle)}
                            style={{ fontSize: "2rem", lineHeight: "1.3" }}
                          >
                            {system.data?.title}
                            <span className={cx(styles.tag)}>FULL KIT</span>
                          </h1>
                          <p
                            style={{
                              color: "rgb(146, 146, 146)",
                              marginBottom: 0,
                            }}
                          >
                            {system.data?.subTitle}
                          </p>
                          <div className={cx(styles.delete, "d-flex mt-5")}>
                            <div className={cx(styles.rating, "me-3")}>
                              <h5 className={cx("mb-0")}>
                                {system.data?.rating &&
                                  system.data?.rating.rating}{" "}
                                {/* <div>
                              <StarRateBlack />
                            </div> */}
                                <img
                                  src="/images/star_rate_black_24dp.svg"
                                  alt=""
                                />{" "}
                              </h5>
                              <p className={cx("mb-0 mt-1")}>
                                {" "}
                                {system.data?.rating.ratingCount} Ratings
                              </p>
                            </div>
                            <div
                              className={cx(
                                styles.successRate,
                                "d-flex mx-3 px-4"
                              )}
                            >
                              <div>
                                <CheckCircleBlack />
                              </div>
                              {/* <img src="/images/check_circle_black_24dp.svg" alt="" /> */}
                              <div className={cx("ps-2")}>
                                <h5
                                  style={{ color: "#1f8f17" }}
                                  className={cx("mb-0")}
                                >
                                  {system.data?.success &&
                                    system.data?.success.successRate}
                                  %
                                </h5>
                                <p className={cx("mb-0 mt-1")}>
                                  {system.data?.success &&
                                    system.data?.success.title}
                                </p>
                              </div>
                            </div>
                            <div className={cx(styles.response, "d-flex ms-2")}>
                              <TimmerBlack />
                              {/* <img src="/images/timer_black_24dp.svg" alt="" /> */}
                              <div className={cx("ps-2")}>
                                <h5
                                  style={{ color: "#176e8f" }}
                                  className={cx("mb-0")}
                                >
                                  0.002ms
                                </h5>
                                <p className={cx("mb-0 mt-1")}>
                                  Avg. Response time
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={cx(
                            "col col-md-4 col-lg d-none d-md-block"
                          )}
                        >
                          <div
                            style={{
                              alignItems: "baseline",
                              justifyContent: "center",
                            }}
                            className={cx(styles.price, "d-flex")}
                          >
                            <span className={cx(styles.discount, "mx-2")}>
                              -100%
                            </span>
                            <h3
                              style={{ alignSelf: "center" }}
                              className={cx("mx-0 px-0 my-0 py-0")}
                            >
                              {" "}
                              ₹ 240
                            </h3>
                            <p
                              style={{ fontSize: "10px", marginLeft: "-8px" }}
                              className={cx("my-0 py-0")}
                            >
                              /month
                            </p>
                            <h3
                              style={{
                                textDecoration: "none",
                                color: "#27be73",
                                alignSelf: "center",
                              }}
                              className={cx("my-0 py-0 mx-1")}
                            >
                              Free
                            </h3>
                          </div>
                          <div
                            style={{ alignItems: "center" }}
                            className={cx(
                              styles.cardRightSide,
                              "d-flex flex-column"
                            )}
                          >
                            <button className={cx(styles.generateButton)}>
                              Generate Key &nbsp;
                              <span>
                                <WhiteArrow />
                              </span>
                              <Image
                                src="https://img.icons8.com/ios-filled/17/ffffff/long-arrow-right.png"
                                alt=""
                                layout="fill"
                                objectFit="contain"
                              />
                              {/* <img src="https://img.icons8.com/ios-filled/17/ffffff/long-arrow-right.png" /> */}
                            </button>
                            <button
                              onClick={handaler}
                              className={cx(styles.addToCartButton)}
                            >
                              <span style={{ top: "-2px", marginRight: "5px" }}>
                                <IconIonicIosAddCircleOutlineRed />
                              </span>
                              {/* <img src="/images/Icon ionic-ios-add-circle-outline-red.svg" /> */}
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx(styles.deleteSecond)}>
                  <div
                    className={cx(
                      styles.delete,
                      "d-flex justify-content-around"
                    )}
                  >
                    <div className={cx(styles.rating)}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: "calc(1.525rem + .9vw)",
                        }}
                        className={cx("mb-0")}
                      >
                        {/* {system.rating_info.rating} */}
                        {/* <StarRateBlack /> */}
                        <img
                          src="/images/star_rate_black_24dp.svg"
                          alt=""
                        />{" "}
                      </p>
                      <h4
                        style={{
                          color: "rgba(0, 0, 0, 0.37)",
                          fontWeight: 700,
                          marginTop: "7px",
                        }}
                        className={cx("mb-0 mt-2")}
                      >
                        {/* {system.rating_info.ratingCount} Ratings */}
                      </h4>
                    </div>
                    <div
                      style={{ padding: "0 25px" }}
                      className={cx(styles.successRate, "mx-3")}
                    >
                      <p
                        style={{
                          fontWeight: 700,
                          color: "#1f8f17",
                          fontSize: "calc(1.525rem + .9vw)",
                        }}
                        className={cx("mb-0")}
                      >
                        <span>
                          <CheckCircleBlack width="20.5px" height="" />
                        </span>
                        {/* <img
                    style={{ width: "20.5px" }}
                    src="/images/check_circle_black_24dp.svg"
                    alt=""
                  /> */}{" "}
                        {/* {system.success_info.successRate}% */}
                      </p>
                      <h4
                        style={{
                          color: "rgba(0, 0, 0, 0.37)",
                          fontWeight: 700,
                        }}
                        className={cx("mb-0 mt-2")}
                      >
                        {/* {system.success_info.title} */}
                      </h4>
                    </div>
                    <div className={cx(styles.response, "me-4")}>
                      <p
                        style={{
                          fontWeight: 700,
                          color: "#176e8f",
                          fontSize: "calc(1.525rem + .9vw)",
                        }}
                        className={cx("mb-0")}
                      >
                        <span>
                          <TimmerBlack width="20.5px" height="" />
                        </span>
                        {/* <img
                    style={{ width: "20.5px" }}
                    src="/images/timer_black_24dp.svg"
                    alt=""
                  />{" "} */}
                        0.002ms
                      </p>
                      <h4
                        style={{
                          color: "rgba(0, 0, 0, 0.37)",
                          fontWeight: 700,
                        }}
                        className={cx("mb-0 mt-2")}
                      >
                        Avg. Response time
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  style={{ overflowY: "scroll" }}
                  className={cx(styles.container1)}
                >
                  <div className={cx(styles.futureContainer)}>
                    <div className={cx(styles.row1)}>
                      <div style={{ minWidth: "280px" }}>
                        <h3 style={{ fontSize: "1.7rem", lineHeight: "1.4" }}>
                          {system.data?.aboutApiKit &&
                            system.data?.aboutApiKit.title}
                        </h3>
                        <h5>
                          {" "}
                          <span>
                            <DoneBlack />
                          </span>
                          {/* <img src="/images/done_black_18dp.svg" alt="" /> */}
                          &nbsp;&nbsp;{" "}
                          {system.data?.aboutApiKit.list &&
                            system.data?.aboutApiKit.list[0].title}
                        </h5>
                        <h5>
                          {" "}
                          <span>
                            <DoneBlack />
                          </span>
                          {/* <img src="/images/done_black_18dp.svg" alt="" /> */}
                          &nbsp;&nbsp;{" "}
                          {system.data?.aboutApiKit.list &&
                            system.data?.aboutApiKit.list[1].title}
                        </h5>
                        <h5>
                          {" "}
                          <span>
                            <DoneBlack />
                          </span>
                          {/* <img src="/images/done_black_18dp.svg" alt="" /> */}
                          &nbsp;&nbsp;{" "}
                          {system.data?.aboutApiKit.list &&
                            system.data?.aboutApiKit.list[2].title}
                        </h5>

                        <p style={{ marginRight: "40px" }}>
                          <ShowMore
                            lines={1}
                            more="Show more ᐯ"
                            less="Show less ᐱ"
                            anchorClass="showmore"
                          >
                            {system.data?.aboutApiKit.subTitle}
                          </ShowMore>
                        </p>
                        {/* <a href="#">
                          Show more{" "}
                          <span>
                            <ExpandMoreBlack />
                          </span>
                          {/* <img src="/images/expand_more_black_24dp.svg" alt="" />{" "} */}
                        {/* </a> */}
                        <br />
                        <br />
                      </div>
                      <div className={cx(styles.integrationSupport)}>
                        <h5
                          style={{
                            color: "#000",
                            marginLeft: "25px",
                            marginTop: "25px",
                          }}
                        >
                          {system.data?.integrationSupport &&
                            system.data?.integrationSupport.title}
                        </h5>
                        <div
                          className={cx(
                            styles.langGrid,
                            "row row-cols-3 mx-0 px-2 mt-4"
                          )}
                        >
                          <div className={cx("col")}>
                            <div>
                              {/* <Python /> */}
                              <Image
                                src={
                                  system.data?.integrationSupport.kits[0].icon
                                    .url
                                }
                                alt=""
                                // layout='fill'
                                objectFit="contain"
                                width="40px"
                                height="40px"
                              />
                            </div>
                            {/* <img src="/images/python.svg" alt="" /> */}
                            <p>
                              {system.data?.integrationSupport.kits[0] &&
                                system.data?.integrationSupport.kits[0].title}
                            </p>
                          </div>
                          <div className={cx("col")}>
                            <div>
                              <Image
                                src={
                                  system.data?.integrationSupport.kits[1].icon
                                    .url
                                }
                                alt=""
                                // layout='fill'
                                objectFit="contain"
                                width="40px"
                                height="40px"
                              />
                            </div>
                            {/* <Node /> */}
                            {/* <img src="/images/node.svg" alt="" /> */}
                            <p>
                              {" "}
                              {system.data?.integrationSupport.kits[1] &&
                                system.data?.integrationSupport.kits[1].title}
                            </p>
                          </div>
                          <div className={cx("col")}>
                            <div>
                              <Image
                                src={
                                  system.data?.integrationSupport.kits[2].icon
                                    .url
                                }
                                alt=""
                                // layout='fill'
                                objectFit="contain"
                                width="40px"
                                height="40px"
                              />
                            </div>
                            {/* <img src="/images/java.svg" alt="" /> */}
                            {system.data?.integrationSupport.kits[2] &&
                              system.data?.integrationSupport.kits[2].title}
                          </div>
                          <div className={cx("col")}>
                            <Image
                              src={
                                system.data?.integrationSupport.kits[3].icon.url
                              }
                              alt=""
                              // layout='fill'
                              objectFit="contain"
                              width="40px"
                              height="40px"
                            />
                            {system.data?.integrationSupport.kits[3] &&
                              system.data?.integrationSupport.kits[3].title}
                          </div>
                          <div className={cx("col")}>
                            <div className={cx(styles.php)}>
                              <Image
                                src={
                                  system.data?.integrationSupport.kits[4].icon
                                    .url
                                }
                                alt=""
                                // layout='fill'
                                objectFit="contain"
                                width="40px"
                                height="40px"
                              />
                            </div>
                            {/* <img src="/images/Group 25237 (4).svg" alt="" /> */}
                            {system.data?.integrationSupport.kits[4] &&
                              system.data?.integrationSupport.kits[4].title}
                          </div>
                          <div className={cx("col")}>
                            <Image
                              src={
                                system.data?.integrationSupport.kits[5].icon.url
                              }
                              alt=""
                              // layout='fill'
                              objectFit="contain"
                              width="40px"
                              height="40px"
                            />
                            {system.data?.integrationSupport.kits[5] &&
                              system.data?.integrationSupport.kits[5].title}
                          </div>
                          <div className={cx("col")}>
                            <div className={cx(styles.golang)}>
                              <Image
                                src={
                                  system.data?.integrationSupport.kits[6].icon
                                    .url
                                }
                                alt=""
                                // layout='fill'
                                objectFit="contain"
                                width="40px"
                                height="40px"
                              />
                            </div>

                            {/* <img src="/images/Group 25237 (3).svg" alt="" /> */}
                            {system.data?.integrationSupport.kits[6] &&
                              system.data?.integrationSupport.kits[6].title}
                          </div>
                          <div className={cx("col")}>
                            <Image
                              src={
                                system.data?.integrationSupport.kits[7].icon.url
                              }
                              alt=""
                              // layout='fill'
                              objectFit="contain"
                              width="40px"
                              height="40px"
                            />
                            {system.data?.integrationSupport.kits[7] &&
                              system.data?.integrationSupport.kits[7].title}
                          </div>
                          <div className={cx("col")}>
                            <Image
                              src={
                                system.data?.integrationSupport.kits[8].icon.url
                              }
                              alt=""
                              // layout='fill'
                              objectFit="contain"
                              width="40px"
                              height="40px"
                            />
                            {system.data?.integrationSupport.kits[8] &&
                              system.data?.integrationSupport.kits[8].title}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ overflow: "hidden", minWidth: "234px" }}
                        className={cx(styles.buildGuide)}
                      >
                        {/* <div
                      style={{
                        position: "absolute",
                        objectFit: "contain",
                        width: "100%",
                      }}
                    >
                      <Image
                        src="/images/laptop.webp"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                      />
                    </div> */}

                        <img
                          style={{
                            position: "absolute",
                            objectFit: "contain",
                            width: "100%",
                          }}
                          src="/images/laptop.webp"
                          alt=""
                        />
                        <h3
                          style={{
                            fontSize: "1.7rem",
                            fontWeight: "600",
                            lineHeight: "1.4",
                            color: "#fff",
                            zIndex: 2,
                            opacity: 1,
                            marginBottom: "10px",
                          }}
                        >
                          {system.data?.buildGuide &&
                            system.data?.buildGuide.title}{" "}
                        </h3>
                        <p
                          style={{
                            color: "#fff",
                            zIndex: 2,
                            opacity: "0.7",
                            fontSize: "1.2rem",
                            marginTop: 0,
                            paddingRight: "20px",
                          }}
                        >
                          {system.data?.buildGuide &&
                            system.data?.buildGuide.subTitle}
                        </p>
                        <span
                          style={{
                            zIndex: 2,
                            marginLeft: "35px",
                            cursor: "pointer",
                          }}
                        >
                          <PlayBlue />
                        </span>
                        {/* <img
                    style={{ zIndex: 2, marginLeft: "35px", cursor: "pointer" }}
                    src="/images/play-blue.svg"
                    alt=""
                  /> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cx(styles.apiIncluded, "row")}>
                  <p className={cx(styles.apiIncludedHeader)}>
                    {" "}
                    API's Included
                  </p>
                  <div className={cx(styles.tabContainer)}>
                    <div
                      className={cx(
                        styles.tab,
                        "d-flex justify-content-between align-items-center"
                      )}
                    >
                      <div
                        className={cx(
                          anchorActive === "Full Kit"
                            ? styles.activeTab
                            : styles.forSelf
                        )}
                        onClick={() => {
                          setAnchorActive("Full Kit");
                          setActiveId(1);
                        }}
                      >
                        <a
                        // href="#"
                        >
                          Full Kit
                        </a>
                      </div>
                      <div
                        className={cx(
                          anchorActive === "For Platform"
                            ? styles.activeTab
                            : styles.forSelf
                        )}
                        onClick={() => {
                          setAnchorActive("For Platform");
                          setActiveId(0);
                        }}
                      >
                        <a
                        // style={{ color: "#fff" }}
                        // href="#"
                        >
                          For Platform
                        </a>
                      </div>
                      <div
                        className={cx(
                          anchorActive === "For Self" && styles.activeTab
                        )}
                        onClick={() => {
                          setAnchorActive("For Self");
                          setActiveId(1);
                        }}
                      >
                        <a
                        // href="#"
                        >
                          For Self
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={cx(styles.apiIncludedCards, "col col-xl-9")}>
                    {/* {system.data.api_pages[
                      activeId
                    ].map(
                      (cardData: ApiKitsCardsEntity, index: Key) => {
                        return <ItemCard key={index} cardDataNew={cardData} />;
                      }
                    )} */}
                    {system.data?.api_pages.map((cardData: any, index: Key) => {
                      return <ItemCard key={index} cardDataNew={cardData} />;
                    })}

                    {/* <ItemCard /> */}
                    {/* <ItemCard /> */}
                  </div>
                  <div className={cx(styles.forPlatformContainer, "col-3 p-0")}>
                    {/* <AnchorWidget
                      title={anchorActive}
                      anchorActive={tabtitle}
                      getTabClicked={getTabClicked}
                      options={
                        data.section_data[1].api_kits_cards[activeId]
                          .api_products
                      }
                    /> */}
                  </div>
                </div>
                {/* {demoArray.map((data, index) => (
						<ApiKitCard
							key={index}
							// className={cx(styles.relatedApi)}
							content={ApiCardData}
						/>
					))} */}
                {/* <div className={cx(styles.gridContainer)}>
						{demoArray.map((data, index) => (
							<ApiKitCard key={index} content={ApiCardData} />
						))}
					</div> */}
                <section id={cx(styles.algoStrategies)}>
                  <div className={cx(styles.upperRow)}>
                    <h2
                      className={cx(
                        styles.sectionHeading,
                        styles.algoStrategiesHeading
                      )}
                    >
                      Related API Kits
                    </h2>
                    <ul className={cx(styles.buttons)}>
                      <a className={cx(styles.viewAllButton)} href="#">
                        View All
                      </a>
                      {/* <li className={cx(styles.buttonsLi)}>
                        <div className={cx(styles.buttonLiImg)}>
                          <NavigateNextBlack />
                        </div>
                        <img
                    className={cx(styles.buttonLiImg)}
                    src="/images/navigate_next_black_24dp.svg"
                    alt=""
                  />
                      </li>
                      <li className={cx(styles.buttonsLi)}>
                        <div
                          className={cx(styles.buttonLiImg)}
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <NavigateNextBlack />
                        </div>
                        <img
                    className={cx(styles.buttonLiImg)}
                    style={{ transform: "rotate(180deg)" }}
                    src="/images/navigate_next_black_24dp.svg"
                    alt=""
                  />
                      </li> */}
                    </ul>
                  </div>
                  <div
                    // style={{ overflowX: 'scroll' }}
                    className={cx(styles.cardContainer2, "d-flex")}
                  >
                    {
                      <Swiper
                        slidesPerView="auto"
                        spaceBetween={24}
                        // breakpoints={{
                        //   360: {
                        //     width: 360,
                        //     slidesPerView: 1.5,
                        //     // spaceBetween: 24,
                        //   },
                        //   480: {
                        //     width: 480,
                        //     slidesPerView: 2,
                        //   },
                        //   667: {
                        //     width: 667,
                        //     slidesPerView: 2.7,
                        //   },
                        //   1200: {
                        //     width: 1200,
                        //     slidesPerView: 3.2,
                        //   },
                        //   1980: {
                        //     width: 1980,
                        //     slidesPerView: 3.2,
                        //   },
                        // }}
                        loop={false}
                        loopFillGroupWithBlank={true}
                        // pagination={{
                        //   clickable: true,
                        // }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={cx(styles.adjust, "mySwiper1")}
                      >
                        {incidents.data.map(
                          (data: any, index: Key | null | undefined) => (
                            <SwiperSlide
                              style={{ width: "33rem", maxWidth: "330px" }}
                              className="swiper-slide"
                            >
                              <ApiKitCard
                                key={index}
                                className={cx(styles.cards)}
                                datacontent={data}
                              />
                            </SwiperSlide>
                          )
                        )}
                      </Swiper>
                    }
                  </div>
                </section>
              </div>
            </div>
            <div
              style={{ padding: "20px 20px 15px 20px" }}
              className={cx(styles.generateKey, "d-md-none d-block")}
            >
              <div
                className={cx(
                  styles.upper,
                  "d-flex align-items-center justify-content-between"
                )}
              >
                <div>
                  <span
                    style={{
                      fontSize: "10px",
                      top: 0,
                      margin: "5px",
                      fontWeight: 700,
                    }}
                    className={cx(styles.tag)}
                  >
                    FOR PLATFORM
                  </span>
                </div>
                <div
                  style={{ alignItems: "baseline", justifyContent: "flex-end" }}
                  className={cx(styles.price, "d-flex")}
                >
                  <span className={cx(styles.discount, "mx-2")}>-100%</span>
                  <h3
                    style={{ alignSelf: "center" }}
                    className={cx("mx-0 px-0 my-0 py-0")}
                  >
                    {" "}
                    ₹ 240
                  </h3>
                  <p
                    style={{ fontSize: "10px", marginLeft: "-8px" }}
                    className={cx("my-0 py-0")}
                  >
                    /month
                  </p>
                  <h3
                    style={{
                      textDecoration: "none",
                      color: "#27be73",
                      alignSelf: "center",
                      width: "auto",
                    }}
                    className={cx("my-0 py-0 mx-1")}
                  >
                    Free
                  </h3>
                </div>
              </div>
              <div className={cx(styles.lower)}>
                <div
                  style={{ alignItems: "center" }}
                  className={cx(
                    styles.cardRightSide,
                    "d-flex justify-content-around"
                  )}
                >
                  <button
                    onClick={handaler}
                    style={{ marginLeft: 0, width: "136px" }}
                    id={cx(styles.addToCart)}
                  >
                    <span style={{ top: "-1.5px" }}>
                      <IconIonicIosAddCircleOutlineRed />
                    </span>
                    {/* <img
                style={{ top: "-1.5px" }}
                src="/images/Icon ionic-ios-add-circle-outline-red.svg"
              /> */}{" "}
                    Add to Cart
                  </button>
                  <button
                    style={{
                      marginTop: "10px",
                      padding: "8px 0px 6px 10px",
                      width: "184px",
                    }}
                    id={cx(styles.generateKey)}
                  >
                    Generate Key &nbsp;
                    <span>
                      <WhiteArrow />
                    </span>
                    {/* <Image
                  src="https://img.icons8.com/ios-filled/17/ffffff/long-arrow-right.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                /> */}
                    {/* <img src="https://img.icons8.com/ios-filled/17/ffffff/long-arrow-right.png" /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterDetails />
    </>
  );
}
// export async function getServerSideProps() {
//   const res = await fetch(`https://micro-nova.herokuapp.com/systemsPage`);
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { data } };
// }
export default System;

export async function getStaticPaths() {
  console.log("hey", "hey");
  const response = await fetch(
    "https://nova-mysql.herokuapp.com/api/api-kit-cards/"
  );
  const url = await response.json();

  const paths = url.data
    .map((pageurl: { slug: any; id: number }) => ({
      params: { slug: pageurl.slug },
      // params: {slug: {url: pageurl.slug, slugId: pageurl.id}}
    }))
    .filter((paramsurl: any) => {
      console.log(
        "hq",
        paramsurl,
        paramsurl.params.slug,
        paramsurl.params.slug !== null
      );
      return paramsurl.params.slug !== null;
    });

  console.log("paths", paths);

  return { paths, fallback: false };
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  console.log("hello", params);
  const [operationsRes, incidentsRes] = await Promise.all([
    fetch(
      `https://nova-mysql.herokuapp.com/api/slugify/slugs/api-kit-card/${params.slug}`
    ),
    fetch("https://nova-mysql.herokuapp.com/api/api-kit-cards/"),
  ]);
  const data1 = await operationsRes.json();
  const xyz = data1.data?.id;
  const res = await fetch(
    `https://nova-mysql.herokuapp.com/api/api-kit-cards/${xyz}`
  );
  const data = await res.json();

  console.log("sea", data);

  const [incidents] = await Promise.all([incidentsRes.json()]);

  return {
    props: {
      system: data,
      incidents: incidents,
    },
  };
}
