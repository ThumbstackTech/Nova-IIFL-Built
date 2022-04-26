import React, { useEffect } from "react";
import Styles from "./CartComponent.module.scss";
import cx from "classnames";
import Header from "../HeadeComponent/Header";
import SideBar from "../SideBarComponent/SideBar";
import FooterDetails from "../FooterComponent/Footer";
import Styled from "../Root/Root.module.scss";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getTotals, removeFromCart } from "../../../Redux/cart.slice";
import Link from "next/link";

export default function CartComponent() {
  const cart = useSelector((state: any) => state.cart);
  console.log("cart", cart);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [cart, dispatch]);
  return (
    <>
      <Head>
        <title>Cart: Nova - IIFL</title>
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
      <div id={cx(Styled.main)}>
        <SideBar />
        <div className={cx(Styled.body)}>
          <div className={cx(Styles.wrapper)}>
            {cart.cartItems.length === 0 ? (
              <h1>Your Cart is Empty!</h1>
            ) : (
              <div className={Styles.maincontent}>
                <p className={Styles.maincontentp}>My Cart</p>
                <h1 className={Styles.maincontenth1}>
                  Items in your cart{" "}
                  <span className={Styles.item}>
                    {cart.cartItems.length > 0
                      ? cart.cartItems[0].cartQuantity
                      : 0}{" "}
                    item
                  </span>
                </h1>
                <div className={Styles.cartbody}>
                  <div style={{ width: "100%" }} className="row">
                    <div className="col-xl-8">
                      {cart.cartItems &&
                        cart.cartItems.map(
                          (cartItem: {
                            id: any;
                            avatar: any;
                            slug: any;
                            shortDesc: any;
                            cardTag: any;
                            data: any;
                            title:
                              | boolean
                              | React.ReactChild
                              | React.ReactFragment
                              | React.ReactPortal
                              | null
                              | undefined;
                          }) => {
                            return (
                              <div className={Styles.itemcard}>
                                {console.log("cartItem", cartItem)}
                                <div className="row">
                                  <div
                                    style={{
                                      alignItems: "center",
                                      width: "50px",
                                    }}
                                    className="col-1 checkbox d-flex pe-0 d-none d-sm-flex"
                                  >
                                    <label className={Styles.cont}>
                                      <input
                                        type="checkbox"
                                        defaultChecked={true}
                                      />
                                      <span className={Styles.checkmark} />
                                    </label>
                                  </div>
                                  <div className={cx(Styles.icon, `col-3`)}>
                                    <img src={cartItem.avatar.url} alt="" />
                                  </div>
                                  <div
                                    className={cx(
                                      Styles.cardtitle,
                                      `col-6 col-xl-6 col-xxl-7 col-lg-7 col-md-6`
                                    )}
                                  >
                                    <h1
                                      style={{
                                        fontSize: "1.6rem",
                                        lineHeight: "1.4",
                                      }}
                                    >
                                      {cartItem.title}
                                    </h1>
                                    <div
                                      className={cx(
                                        Styles.tag,
                                        `d-none d-sm-block`
                                      )}
                                    >
                                      <p
                                        style={{
                                          opacity: 1,
                                          fontWeight: 600,
                                          fontSize: "10px",
                                          color: "#00125c",
                                        }}
                                      >
                                        {cartItem.cardTag}
                                      </p>
                                    </div>
                                    <p
                                      style={{
                                        opacity: "0.36",
                                        color: "#707070",
                                      }}
                                      className="d-none d-sm-block"
                                    >
                                      {cartItem.shortDesc}
                                    </p>
                                    <p
                                      style={{ color: "#000" }}
                                      className="d-block d-sm-none"
                                    >
                                      by IIFL Securties
                                    </p>
                                    <div
                                      style={{ width: "87px" }}
                                      className={cx(
                                        Styles.tag,
                                        `d-block d-sm-none`
                                      )}
                                    >
                                      <p
                                        style={{
                                          opacity: 1,
                                          fontWeight: 600,
                                          fontSize: "10px",
                                        }}
                                      >
                                        FOR PLATFORM
                                      </p>
                                    </div>
                                    <div
                                      style={{ width: "150%" }}
                                      className={Styles.delete}
                                    >
                                      <a
                                        className="remove-cart"
                                        onClick={() =>
                                          dispatch(removeFromCart(cartItem))
                                        }
                                      >
                                        Delete
                                      </a>
                                      <Link
                                        href={`/Apikits/System/${cartItem.slug}`}
                                        passHref
                                      >
                                        <a>View Details</a>
                                      </Link>
                                    </div>
                                  </div>
                                  <div
                                    className={cx(
                                      Styles.price,
                                      `col-2 d-flex d-none d-sm-flex`
                                    )}
                                  >
                                    <span className={Styles.discount}>
                                      -100%
                                    </span>
                                    <div
                                      style={{ height: "20px" }}
                                      className="row mx-0 px-0"
                                    >
                                      <h3
                                        className={cx(
                                          Styles.totalamounth3,
                                          `mx-0 px-0`
                                        )}
                                      >
                                        {" "}
                                        ₹ 240{" "}
                                      </h3>
                                      <p
                                        style={{
                                          fontSize: "10px",
                                          height: "10px",
                                          top: "-9px",
                                          left: "3px",
                                        }}
                                        className="mx-0 px-0"
                                      >
                                        per month
                                      </p>
                                      <h3
                                        className={Styles.totalamounth3}
                                        style={{
                                          textDecoration: "none",
                                          color: "#07b45e",
                                        }}
                                      >
                                        Free
                                      </h3>
                                    </div>
                                  </div>
                                  <div
                                    className={cx(
                                      Styles.price,
                                      `col-1 d-flex d-block d-sm-none`
                                    )}
                                  >
                                    <div className={cx(Styles.free, `row`)}>
                                      <div
                                        style={{ width: "100%" }}
                                        className={cx(
                                          Styles.checkbox,
                                          `col-1 d-flex pe-4 justify-content-end`
                                        )}
                                      >
                                        <label
                                          style={{ width: "40px" }}
                                          className={Styles.cont}
                                        >
                                          <input
                                            type="checkbox"
                                            defaultChecked={true}
                                          />
                                          <span className={Styles.checkmark} />
                                        </label>
                                      </div>
                                      <div
                                        style={{ justifyContent: "end" }}
                                        className={cx(
                                          Styles.subprice,
                                          `col p-0 d-flex`
                                        )}
                                      >
                                        <span className={Styles.discount}>
                                          -100%
                                        </span>
                                        <div
                                          style={{
                                            height: "20px",
                                            width: "60px",
                                          }}
                                          className="row mx-0 px-0 me-5"
                                        >
                                          <h3 className="mx-0 px-0"> ₹ 240 </h3>
                                          <p
                                            style={{
                                              fontSize: "10px",
                                              height: "10px",
                                              top: "-9px",
                                              left: "3px",
                                            }}
                                            className="mx-0 px-0"
                                          >
                                            per month
                                          </p>
                                          <h3
                                            style={{
                                              textDecoration: "none",
                                              color: "#07b45e",
                                            }}
                                          >
                                            Free
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}

                      <div
                        className={cx(
                          Styles.itemsubtotal,
                          `d-flex justify-content-between`
                        )}
                      >
                        <h1 style={{ fontSize: "18px" }}>
                          Items:{" "}
                          {cart.cartItems.length > 0
                            ? cart.cartItems[0].cartQuantity
                            : 0}
                        </h1>
                        <h2
                          style={{ fontSize: "18px", color: "#707070" }}
                          className={Styles.Subtotal}
                        >
                          Subtotal :
                          <span
                            style={{ color: "#000" }}
                            className={Styles.textstyle1}
                          >
                            ₹0.00
                          </span>
                        </h2>
                      </div>
                    </div>
                    <div className="col p-0">
                      <div
                        className={cx(Styles.totalamount, `d-xl-block d-none`)}
                      >
                        <h3>
                          Total Amount ({" "}
                          {cart.cartItems.length > 0
                            ? cart.cartItems[0].cartQuantity
                            : 0}{" "}
                          items): <span style={{ float: "right" }}>₹0.00</span>{" "}
                        </h3>
                        <button>
                          Generate Key &nbsp;
                          <img src="https://img.icons8.com/ios-filled/17/ffffff/long-arrow-right.png" />{" "}
                        </button>
                      </div>
                      <div className={Styles.apikits}>
                        <h1>Related API Kits</h1>
                        <div className="row mb-3 pe-5">
                          <div className={cx(Styles.icon, `col-1`)}>
                            <img src="images/breifcase.svg" alt="" />
                          </div>
                          <div className={cx(Styles.title, `col col-xxl-5`)}>
                            <h2>Portfolio Management System</h2>
                            <p>7 APIs</p>
                          </div>
                          <div className="col-3 my-2">
                            <img
                              style={{ float: "right" }}
                              src="https://img.icons8.com/material-outlined/30/575757/plus--v1.png"
                            />
                          </div>
                        </div>
                        <div className="row pe-5">
                          <div className={cx(Styles.icon, `col-1`)}>
                            <img src="images/cart.svg" alt="" />
                          </div>
                          <div className={cx(Styles.title, `col col-xxl-5`)}>
                            <h2>Order Management System</h2>
                            <p>8 APIs</p>
                          </div>
                          <div className="col-3 my-2">
                            <img
                              style={{ float: "right" }}
                              src="https://img.icons8.com/material-outlined/30/575757/plus--v1.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={cx(Styles.generatekey, `d-xl-none d-block`)}>
              <div className="row">
                <div style={{ alignSelf: "center" }} className="col-4 col-sm-6">
                  <h2>₹0.00</h2>
                  <h4 style={{ color: "#707070" }}>
                    {" "}
                    {cart.cartItems.length > 0
                      ? cart.cartItems[0].cartQuantity
                      : 0}{" "}
                    items
                  </h4>
                </div>
                <div className="col col-sm-6">
                  <button>
                    Generate Key &nbsp;
                    <img src="https://img.icons8.com/ios-filled/17/ffffff/long-arrow-right.png" />
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
