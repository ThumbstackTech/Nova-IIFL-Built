import React from "react";
import cx from "classnames";
import styles from "./ItemCard.module.scss";
import {
  Api,
  CheckCircleBlack,
  IconIonicIosAddCircleOutline,
  TimmerBlack,
} from "../../../svgs/SVG";
import ItemCardInfoDesktop from "../ItemCardInfoDesktop/ItemCardInfoDesktop";
import ItemCardInfoMobile from "../ItemCardInfoMobile/ItemCardInfoMobile";
// import { ApiKitsCardsEntity } from "../../../Interface/devDocs";
interface Props {
  cardDataNew?: any;
}

const ItemCard = (Props: Props) => {
  const { cardDataNew } = Props;
  return (
    <div className={cx(styles.itemCard)} id={cardDataNew!.title}>
      <div className={cx("row")}>
        <div
          className={cx(
            "col col-sm-4 pt-3 d-flex d-sm-block align-items-center"
          )}
        >
          <h3 id={cx(styles.apiTypeTitle)}>{cardDataNew!.title}</h3>
          {/* {itemDetails.tags.map((tag, i) => {
            return <span className={cx(styles.tag)}>{tag.name}</span>;
          })} */}
          <span className={cx(styles.tag)}>{cardDataNew!.apiType}</span>
          <span className={cx(styles.tag)}>{cardDataNew!.apiLang}</span>
        </div>
        <div className={cx("col col-sm-8 align-self-center d-none d-sm-flex")}>
          <ItemCardInfoDesktop cardData={cardDataNew!} />
        </div>
        <ItemCardInfoMobile />
      </div>
      <div className={cx("row mx-2 my-4")}>
        <p
          style={{
            opacity: "0.7",
            lineHeight: "1.43",
            fontSize: "clamp(11px,1.4rem,1.4rem)",
            fontWeight: "normal",
            paddingRight: "17px",
          }}
        >
          {cardDataNew!.description}
          {/* OAuth login mechanism is designed to integrate the login flow on
          partner&apos;s platform where in partner can get client&apos;s session
          token by simple form-post redirection. Partner needs to provide its
          user key and call back URL (URL where partner wants to receive the
          session token and redirect client) through POST method as form
          parameters while redirecting client to the predefined login URL. */}
        </p>
      </div>
      <div
        style={{ justifyContent: "flex-end" }}
        className={cx(styles.apiDocCta, "d-flex")}
      >
        <a
          style={{ fontSize: "1.2rem", fontWeight: 500 }}
          href="#"
          className={cx("align-self-center")}
        >
          API Documentation
        </a>
        <button>
          {" "}
          <span>
            <IconIonicIosAddCircleOutline />
          </span>
          {/* <img
                      src="/images/Icon ionic-ios-add-circle-outline.svg"
                      alt=""
                    /> */}
          &nbsp; Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;

const itemDetails = {
  title: "OAuth Login",
  tags: [
    {
      name: "POST",
    },
    {
      name: "JSON",
    },
  ],
  desc: "OAuth login mechanism is designed to integrate the login flow on partner&apos;s platform where in partner can get client&apos;s session token by simple form-post redirection. Partner needs to provide its user key and call back URL (URL where partner wants to receive the session token and redirect client) through POST method as form parameters while redirecting client to the predefined login URL.",
};
