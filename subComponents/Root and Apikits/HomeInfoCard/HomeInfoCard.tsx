import React from "react";
import cx from "classnames";
import styles from "./HomeInfoCardGrid.module.scss";
import {
  EastBlack,
  Group21681,
  Group25688,
  Group25694,
  Group256941,
  Group26408,
  Group26409,
} from "../../../svgs/SVG";
import Image from "next/image";
import {
  ApiInfo,
  DownloadsInfo,
  IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg,
  IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg1,
  IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg2,
  IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg3,
  InvestmentInfo,
  LinksEntity,
  RatingInfo,
  ReturnInfo,
  SuccessInfo,
} from "../../../component/Root/HomeComponent/HomeComponent";
import HomeInfoCard1 from "../../HomeInfiCard1/HomeInfoCard1";
import HomeInfoCard2 from "../../HomeInfoCard2/HomeInfoCard2";
import HomeInfoCard from "../../HomeInfoCard/HomeInfoCard";
import { Button } from "semantic-ui-react";

interface Props {
  cardData?: ApiKitsCardsEntity[];
  data?: CardData;
  api_kits_cards?: ApiKitsCardsEntity[];
  icon?: CardData;
  points?: CardData;
  points1?: CardData;
  points2?: CardData;
  points3?: CardData;
  Links?: CardData;
  data1?: CardData;
  Links2?: CardData;
  data2?: CardData;
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
  bottomCard: any;
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
const HomeInfoCardGrid = (props: any) => {
  let {
    data,
    icon,
    points,
    points1,
    points2,
    points3,
    Links,
    data1,
    Links2,
    data2,
    Links3,
  } = props;
  console.log("info card data", data);
  return (
    <div className={cx(styles.infoCard)}>
      <div className={cx(styles.container)}>
        {data!.bottomCard.map((content: any, idx: any) => {
          const { __component } = content;
          if (__component && __component === "home.start-building") {
            return (
              <div className={cx(styles.card)}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                  }}
                >
                  {/* <h2>Choosing the Right API Kits123</h2> */}
                  <h2>{data!.bottomCard[0].title}</h2>
                  <div className={cx(styles.chooseImg)}>
                    <Image
                      src={data!.bottomCard[0].topRightCornerImg.url}
                      layout="fill"
                      alt=""
                    />
                    {/* <Group26408 /> */}
                  </div>
                </div>
                <div className={cx(styles.choose)}>
                  <ul className={cx(styles.chooseSteps)}>
                    <li>
                      {/* <Group26409 /> */}
                      {/* <Image
                              src={data!.bottomCard[0].icon[0].icon.data.attributes.url}
                              alt=""
                              width="22px"
                              height="22px"
                              // layout="fill"
                              objectFit="contain"
                            /> */}

                      {/* <img src="images/Group 26409.svg" alt="" /> */}
                      <div className={cx(styles.imageSteps)}>
                        <Image
                          src={data!.bottomCard[0].icon[0].icon.url}
                          alt=""
                          width="28px"
                          height="28px"
                          // layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      {/* <img src="images/Group 25694.svg" alt="" /> */}
                      <p style={{ width: "60%" }}>
                        {data!.bottomCard[0].icon[0].title}
                        {/* Identify <br />
                              Your Need */}
                      </p>
                    </li>
                    <li>
                      <div className={cx(styles.imageSteps)}>
                        <Image
                          src={data!.bottomCard[0].icon[1].icon.url}
                          alt=""
                          width="28px"
                          height="28px"
                          // layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      {/* <img src="images/Group 25694.svg" alt="" /> */}
                      <p style={{ width: "60%" }}>
                        {data!.bottomCard[0].icon[1].title}
                        {/* Explore <br />
                              Our API Kits */}
                      </p>
                    </li>
                    <li>
                      <div className={cx(styles.imageSteps3)}>
                        <Image
                          src={data!.bottomCard[0].icon[2].icon.url}
                          alt=""
                          width="28px"
                          height="28px"
                          // layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      {/* <img src="images/Group 25694 (1).svg" alt="" /> */}

                      <p style={{ width: "60%" }}>
                        {data!.bottomCard[0].icon[2].title}
                        {/* Generate Key <br />
                              &amp; Start using */}
                      </p>
                    </li>
                  </ul>

                  {/* <img src="images/Group 26408.svg" alt="" /> */}
                </div>
                <div className={cx(styles.linkBtn)}>
                  <p>{data!.bottomCard[0].bottomTag}</p>
                  <a href="#">
                    {data!.bottomCard[0].link.button}
                    <div>
                      <EastBlack />
                    </div>
                    {/* <img src="images/east_black_24dp.svg" alt="" /> */}
                  </a>
                </div>
              </div>
            );
          } else if (__component && __component === "home.hire-developer") {
            return (
              <div className={cx(styles.card)}>
                <h2>
                  {data!.bottomCard[1].title}
                  {/* Generating <br />
                        API Keys */}
                </h2>
                <p>
                  {data!.bottomCard[1].subtitle}
                  {/* Learn Fintech Development <br />
                        at your own pace. */}
                </p>
                <div className={cx(styles.key)}>
                  {/* <Group25688 /> */}
                  <Image
                    src={data!.bottomCard[1].bgMedia.url}
                    // layout="fill"
                    width="51.1px"
                    height="45.5px"
                    alt=""
                  />
                </div>
                {/* <img src="images/Group 25688.svg" alt="" /> */}
                <div className={cx(styles.linkBtn)}>
                  <a href="#">
                    {data!.bottomCard[1].link.button}
                    <EastBlack />
                    {/* <img src="images/east_black_24dp.svg" alt="" /> */}
                  </a>
                </div>
              </div>
            );
          } else if (__component && __component === "home.learn") {
            return (
              <div className={cx(styles.card)}>
                <div className={cx(styles.bgGradient)} />
                <h2 style={{ paddingLeft: "2.4rem" }}>
                  {data!.bottomCard[2].title}
                </h2>
                <p>{data!.bottomCard[2].subtitle}</p>
                <div className={cx(styles.playbutton)}>
                  <Group21681 />
                </div>
                {/* <img src="images/Group 21681.svg" alt="" /> */}
                <div className={cx(styles.linkBtn)}>
                  <div className={cx(styles.bgGradient)} />
                  <a href="#">
                    {data!.bottomCard[2].link.button}
                    <div>
                      {/* <Image src={data2!.descImg.url} layout="fill" alt="" /> */}
                      <EastBlack />
                    </div>
                    {/* <img src="images/east_black_24dp.svg" alt="" /> */}
                  </a>
                </div>
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    </div>
  );
};

export default HomeInfoCardGrid;
