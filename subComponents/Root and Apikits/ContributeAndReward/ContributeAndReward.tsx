import React from "react";
import cx from "classnames";
import styles from "./ContributeAndReward.module.scss";
import Image from "next/image";
import { ExpandMore, Forum } from "../../../svgs/SVG";
import {
  InvestmentInfo,
  ReturnInfo,
} from "../../../component/Root/HomeComponent/HomeComponent";
import {
  APIInfo,
  Point,
  RatingInfo,
  SuccessInfo,
} from "../../../Interface/ApiKitInterface";
import { BgSVG } from "../../../Interface/HomeInterface";
import { ResponseInfo } from "../../../component/Apikits/ApiKitsComponent/ApiKitComponent";
import Link from "next/link";
import { link } from "fs";
// import {
//   Apikitpage,
//   APIKitsCard,
//   SectionDatum,
// } from "../../../Interface/ApiKitPageInterface";
interface Props {
  //   api_kits_cards: APIKitsCard[];
  contribute?: APIKitsCard;
}

export interface APIKitsCard {
  data: any;
  title: string;
  description: string;
  subTitle: string;
  cardTag: string;
  subTag: string;
  desc: string;
  filterTag: string;
  descImg: BgSVG;
  bg: BgSVG;
  // points: Point[];
  api_info: APIInfo;
  link: Link;
  button: string;
}
export interface Link {
  title: string;
  href: string;
  icon: BgSVG;
  description: string;
  link: string;
  button: string;
}
export interface Contribute {
  api_kits_cards?: APIKitsCard[];
  // api_kits_cards?: ApiKitsCards;
}

export const ContributeAndReward = (props: any) => {
  const { contribute } = props!;
  console.log("contribute", contribute);
  // const { api_kits_cards } = contribute!;
  const { title, description, link, bg, button } = contribute!;

  return (
    <>
      <hr
        style={{
          marginLeft: "3rem",
          marginRight: "3rem",
          color: "#dfdfdf",
          height: "3px",
        }}
      />
      <section className={cx(styles.sectionWrapper, "row align-items-center")}>
        <div className="col-12 col-sm">
          <div className={cx(styles.orangeCard)}>
            <h3>{contribute!.title && contribute!.title}</h3>
            <p>{contribute!.description && contribute!.description}</p>
            {
              <button>
                {contribute!.link.button && contribute!.link.button}
              </button>
            }

            {contribute!.bg.url && (
              <Image
                className={cx(styles.imageBox)}
                src={contribute!.bg.url}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
        </div>
        <div className={cx(styles.leftPart, "col col-sm")}>
          <h3>Need Help?</h3>
          <h4>
            <Forum /> <a href="#">Ask Developer Community</a>
          </h4>
          <h4>
            <a href="#">Contact Support</a>
          </h4>

          <br />
          <h3>Changelog</h3>
          <h4>
            Changes made to our APIs -{" "}
            <Link href="/Devdocs/Changelog">
              <a> Changelog </a>
            </Link>
          </h4>
        </div>
        <div className={cx(styles.toTop)}>
          <a href="#">
            To the top{" "}
            <span>
              {" "}
              <ExpandMore />{" "}
            </span>{" "}
          </a>
        </div>
      </section>
    </>
  );
};

export default ContributeAndReward;
