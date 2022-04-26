import React from "react";
import cx from "classnames";
import styles from "./InfoCardGrid.module.scss";
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
  ApiKitsCardsEntity,
  IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg4,
} from "../../../component/Root/HomeComponent/HomeComponent";
import { APIKitsCard } from "../../../Interface/ApiKitInterface";

interface Props {
  cardData?: ApiKitsCardsEntity[] | null;
  data?: ApiKitsCardsEntity[] | null;
  Datadata?: CardData[] | null;
}

export interface CardData {
  title: string;
  descImg: Url;
  points?: PointsEntity[] | null;
  links: Link[];
  subTag?: string;
  subTitle?: string;
  bottomCard?: BottomCardEntity[];
}
export interface BottomCardEntity {
  id: number;
  __component: string;
  title: string;
  bottomTag?: string | null;
  topRightCornerImg?: JSX.Element;
  link: Link;
  icon?: IconEntity[] | null;
  subtitle?: string | null;
  bgMedia?: JSX.Element;
  bg?: JSX.Element;
}
export interface IconEntity {
  id: number;
  title: string;
  icon: JSX.Element;
}
export interface PointsEntity {
  title: string | null;
  tag?: null;
  sortDesc?: null;
  bg?: null;
  bgSvg?: null;
  descImg: JSX.Element;
  icon?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg4 | null;
}
export interface Link {
  title: string;
}
export interface Url {
  url: string;
}
const InfoCardGrid = (props: any) => {
  let { Datadata } = props;
  console.log("info card data", Datadata!.bottomCard);
  console.log("test", Datadata!.bottomCard[0].topRightCornerImg.url);
  return (
    <div className={cx(styles.infoCard)}>
      <div className={cx(styles.container)}>
        {Datadata!.bottomCard.map((content: any, idx: any) => {
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
                  <h2>{Datadata!.bottomCard[0].title}</h2>
                  <div className={cx(styles.chooseImg)}>
                    <Image
                      src={Datadata!.bottomCard[0].topRightCornerImg.url}
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
                      <Image
                        // className={cx(styles.imageSteps)}
                        src={Datadata!.bottomCard[0].icon[0].icon.url}
                        alt=""
                        width="28px"
                        height="28px"
                        // layout="fill"
                        objectFit="contain"
                      />

                      {/* <img src="images/Group 26409.svg" alt="" /> */}

                      <p style={{ width: "60%" }}>
                        {Datadata!.bottomCard[0].icon[0].title &&
                          Datadata!.bottomCard[0].icon[0].title}
                        {/* Identify <br />
                              Your Need */}
                      </p>
                    </li>
                    <li>
                      {/* <Group25694 /> */}
                      <Image
                        // className={cx(styles.imageSteps)}
                        src={Datadata!.bottomCard[0].icon[1].icon.url}
                        alt=""
                        width="28px"
                        height="28px"
                        // layout="fill"
                        objectFit="contain"
                      />
                      {/* <img src="images/Group 25694.svg" alt="" /> */}
                      <p style={{ width: "60%" }}>
                        {Datadata!.bottomCard[0].icon[1].title &&
                          Datadata!.bottomCard[0].icon[1].title}
                        {/* Explore <br />
                              Our API Kits */}
                      </p>
                    </li>
                    <li>
                      {/* <Group256941 /> */}
                      <Image
                        // className={cx(styles.imageSteps3)}
                        src={Datadata!.bottomCard[0].icon[2].icon.url}
                        alt=""
                        width="28px"
                        height="28px"
                        // layout="fill"
                        objectFit="contain"
                      />
                      {/* <img src="images/Group 25694 (1).svg" alt="" /> */}
                      <p style={{ width: "60%" }}>
                        {Datadata!.bottomCard[0].icon[2].title &&
                          Datadata!.bottomCard[0].icon[2].title}
                        {/* Generate Key <br />
                              &amp; Start using */}
                      </p>
                    </li>
                  </ul>

                  {/* <img src="images/Group 26408.svg" alt="" /> */}
                </div>
                <div className={cx(styles.linkBtn)}>
                  <p>{Datadata!.bottomCard[0].bottomTag}</p>
                  <a href="#">
                    {Datadata!.bottomCard[0].link.button}
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
                  {Datadata!.bottomCard[1].title}
                  {/* Generating <br />
            API Keys */}
                </h2>
                <p>
                  {Datadata!.bottomCard[1].subtitle}
                  {/* Learn Fintech Development <br />
            at your own pace. */}
                </p>
                <div className={cx(styles.key)}>
                  {/* <Group25688 /> */}
                  <Image
                    src={Datadata!.bottomCard[1].bgMedia.url}
                    // layout="fill"
                    width="51.1px"
                    height="45.5px"
                    alt=""
                  />
                </div>
                {/* <img src="images/Group 25688.svg" alt="" /> */}
                <div className={cx(styles.linkBtn)}>
                  <a href="#">
                    {Datadata!.bottomCard[1].link.button}
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
                  {Datadata!.bottomCard[2].title}
                </h2>
                <p>{Datadata!.bottomCard[2].subtitle}</p>
                <div className={cx(styles.playbutton)}>
                  <Group21681 />
                </div>
                {/* <img src="images/Group 21681.svg" alt="" /> */}
                <div className={cx(styles.linkBtn)}>
                  <div className={cx(styles.bgGradient)} />
                  <a href="#">
                    {Datadata!.bottomCard[2].link.button}
                    <div>
                      {/* <Image src={data[2].descImg.url} layout="fill" alt="" /> */}
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

export default InfoCardGrid;
