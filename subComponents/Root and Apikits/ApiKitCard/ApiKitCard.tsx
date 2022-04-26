import styles from "./ApiKitCard.module.scss";
import cx from "classnames";
import Link from "next/link";
import { UrlObject } from "url";
import Image from "next/image";
import {
  IconIonicIosAddCircleOutlineBlack,
  Arrow,
  RatingStar,
} from "../../../svgs/SVG";
import { addToCart } from "../../../Redux/cart.slice";
import { useDispatch } from "react-redux";

interface Props {
  datacontent?: Home;
  className?: any;
}
export interface Home {
  [x: string]: any;
  data: any;
  id: number;
  title: string;
  section_data?: SectionDataEntity[] | null;
}
export interface SectionDataEntity {
  id: number;
  title: string;
  subtitle?: string | null;
  api_kits_cards?: ApiKitsCardsEntity[] | null;
}
export interface ApiKitsCardsEntity {
  id: number;
  title: string;
  subTitle?: string | null;
  cardTag?: string | null;
  subTag?: string | null;
  desc?: null;
  filterTag?: string | null;
  slug?: string | null;
  seotitle?: string | null;
  seometaDescription?: string | null;
  avatar?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg[] | null;
  descImg?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg1 | null;
  bgSvg?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg2 | null;
  topRightCornerImg?: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg3 | null;
  points?: (PointsEntity | null)[] | null;
  api_info?: ApiInfo | null;
  downloads_info?: DownloadsInfo | null;
  investment_info?: InvestmentInfo | null;
  rating_info?: RatingInfo | null;
  return_info?: ReturnInfo | null;
  links?: (LinksEntity | null)[] | null;
  response_info?: ResponseInfo | null;
  success_info?: SuccessInfo | null;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg {
  id: number;
  url: string;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg1 {
  id: number;
  url: string;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg2 {
  id: number;
  url: string;
}
export interface IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg3 {
  id: number;
  url: string;
}
export interface PointsEntity {
  id: number;
  title: string;
  tag?: null;
  sortDesc?: null;
  bg?: null;
  bgSvg?: null;
  icon: IconOrTopRightCornerImgOrBgSvgOrAvatarEntityOrDescImg;
}
export interface ApiInfo {
  id: number;
  title: string;
  tag?: null;
  titleTag: string;
  api: number;
  apiCallsAvg: number;
  icon?: null;
}
export interface DownloadsInfo {
  id: number;
  title?: null;
  tag?: null;
  downloadTag: string;
  downloadsCount?: null;
  icon?: null;
}
export interface InvestmentInfo {
  id: number;
  title: string;
  tag?: null;
  investmentTag?: null;
  investmentAmount: string;
  icon?: null;
}
export interface RatingInfo {
  id: number;
  title: string;
  tag?: null;
  ratingTag?: null;
  ratingCount: string;
  rating: string;
  icon?: null;
}
export interface ReturnInfo {
  id: number;
  title: string;
  tag?: null;
  percentageReturn: number;
}
export interface LinksEntity {
  id: number;
  title: string;
  href?: null;
  icon?: null;
}
export interface ResponseInfo {
  id: number;
  title: string;
  tag: string;
  icon?: null;
}
export interface SuccessInfo {
  id: number;
  title: string;
  tag?: null;
  successRate: any;
  icon?: null;
}

function ApiKitCard(props: any) {
  const { className, datacontent } = props;
  console.log("attri", props);
  const dispatch = useDispatch();

  // var a = datacontent!.api_pages

  const shareInfoLen = Object.keys(datacontent!).length;

  console.log("apiLength", shareInfoLen);

  const handaler = () => {
    dispatch(addToCart(datacontent));
    // router.push("/Cart");
  };
  return (
    <div className={cx(styles.card, className)}>
      {console.log("apikitpropss", datacontent)}
      {/* <span className={cx(styles.cornerImg)}>
				{topRightCornerImg && topRightCornerImg}
			</span> */}
      <div className={cx(styles.maskImg)}>
        {/* <Image src="/images/green-mask.webp" alt="" layout="fill" /> */}
        <Image
          src={
            datacontent!.topRightCornerImg.url
              ? datacontent!.topRightCornerImg.url
              : "/images/green-mask.webp"
          }
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      {/* <img className={cx(styles.maskImg)} src="/images/green-mask.webp" /> */}
      <div className={cx(styles.cardHead)}>
        <span className={cx(styles.avatarWrapper)}>
          <Image
            src={datacontent!.avatar.url}
            alt=""
            // layout='fill'
            width="40%"
            height="40%"
            objectFit="contain"
          />
        </span>
        <p>{datacontent!.subTag}</p>
      </div>
      <h4
      // style={{
      //   // width: data.title.length > 15 ? '70%' : '100%',
      //   // maxWidth: data.title.length <= 18 ? '79%' : '100%',
      // }}
      >
        {datacontent && formatTitle(datacontent!.title)}
      </h4>
      <p>{datacontent && datacontent!.description}</p>
      <div className={cx(styles.info)}>
        <p>
          <span>APIs</span>
          {shareInfoLen}
        </p>
        <p>
          <span>Rating</span>
          {datacontent && datacontent!.rating?.ratingCount}
          <span
            style={{ verticalAlign: "middle", marginLeft: "2px" }}
            className={cx(styles.ratingStar)}
          >
            <RatingStar height="100%" width="100%" />
          </span>
        </p>
        <p>
          <span>Success Rate</span>
          {datacontent && datacontent!.success?.successRate}%
        </p>
      </div>
      <div className={cx(styles.linkBtn)}>
        <Link href={`/Apikits/System/${datacontent!.slug}`} passHref>
          <a>
            Generate Key
            <span className={cx(styles.arrow)}>
              <Arrow height="100%" width="100%" />
            </span>
          </a>
        </Link>
        <span className={cx(styles.addCircleOutline)} onClick={handaler}>
          <IconIonicIosAddCircleOutlineBlack height="100%" width="25px" />
        </span>
      </div>
    </div>
  );
}

export default ApiKitCard;

const formatTitle = (title: string): JSX.Element => {
  const words = title.split(" ");
  return (
    <>
      {words.map((w, i) => {
        if (i == 2) {
          return (
            <>
              <br />
              {w}
              &nbsp;
            </>
          );
        } else {
          return <>{w}&nbsp;</>;
        }
      })}
    </>
  );
};
function a(a: any) {
  throw new Error("Function not implemented.");
}
