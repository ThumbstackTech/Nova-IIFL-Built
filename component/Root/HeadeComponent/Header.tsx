import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AccountCircle,
  Hamburger,
  OrangeBag,
  SearchIcon,
  WhiteBag,
} from "../../../svgs/SVG";
import Logo from "./images/logo.png";
import dp from "./images/profile@3x.png";
import { useEffect, useState } from "react";
import cx from "classnames";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";

export default function Header(props: { handleShow: any }): JSX.Element {
  const { handleShow } = props;
  const router = useRouter();
  const { nav } = router.query;
  const [input, setInput] = useState("");
  const [display, setdisplay] = useState(false);
  const cart = useSelector((state: any) => state.cart);
  console.log("cart", cart);
  const dispatch = useDispatch();

  // console.log("cart1", cart.cartItems[0].cartQuantity);

  // const getItemsCount = () => {
  //   return cart.cartItems.reduce(
  //     (accumulator: any, item: { quantity: any }) =>
  //       accumulator + item.quantity,
  //     0
  //   );
  // };

  const openMenu = () => {
    document.querySelector(".sidebar")!.classList.add("open");
    document.getElementById("nav-details")!.style.filter =
      "blur(3rem) brightness(0.5)";
    document.getElementById("main-content")!.style.filter =
      "blur(3rem) brightness(0.5)";
  };
  const addTint = () => {
    document.body!.classList.add("tinted");
  };
  const removeTint = () => {
    if (input === "") {
      document.body!.classList.remove("tinted");
    }
  };
  // if (input != '') {
  //   setdisplay(false);
  // } else {
  //   setdisplay(true);
  // }

  const cartClick = () => {
    router.push("/Cart");
  };

  return (
    <nav id="nav-details">
      <div style={{ marginRight: "30px" }} className="logo">
        <div className="hamburger" onClick={openMenu}>
          <Hamburger />
        </div>
        <div>
          <Link href="/">
            <div id="logo">
              <Image id="logo" src={Logo} alt="logo" />
            </div>
          </Link>
        </div>
      </div>
      <div className="search-bar">
        {/* {router.pathname == "/Devdocs" ? (
          <div className="page-name">
            {" "}
            <span>Dev Docs</span>{" "}
          </div>
        ) : (
          ""
        )} */}

        {router.pathname.includes("/Devdocs") ? (
          <div className="page-name">
            {" "}
            <span>Dev Docs</span>{" "}
          </div>
        ) : (
          ""
        )}
        {router.pathname == "/Devdocs/authorization" ? (
          <div className="page-name">
            {" "}
            <span>Dev Docs</span>{" "}
          </div>
        ) : (
          ""
        )}
        {router.pathname == "/Devdocs/encryption" ? (
          <div className="page-name">
            {" "}
            <span>Dev Docs</span>{" "}
          </div>
        ) : (
          ""
        )}
        {router.pathname == "/Devdocs/integrationFlow" ? (
          <div className="page-name">
            {" "}
            <span>Dev Docs</span>{" "}
          </div>
        ) : (
          ""
        )}
        {router.pathname == "/Devdocs/scriptMaster" ? (
          <div className="page-name">
            {" "}
            <span>Dev Docs</span>{" "}
          </div>
        ) : (
          ""
        )}
        <div
          // style={{
          //   left:  ? '9.8rem' : '1.8rem',
          // }}
          className={cx(
            router.pathname.includes("/Devdocs")
              ? styles.searchimg1
              : styles.searchimg2,
            "search-icon"
          )}
        >
          <SearchIcon />
        </div>
        <input
          id="search-input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value), setdisplay(true);
          }}
          type="text"
          placeholder=" Search"
          onFocus={addTint}
          onBlur={removeTint}
          // style={{
          //   borderTopLeftRadius: router.pathname.includes('/Devdocs')
          //     ? '0'
          //     : '1.1rem',
          //   borderBottomLeftRadius: router.pathname.includes('/Devdocs')
          //     ? '0'
          //     : '1.1rem',
          // }}
          className={cx(
            router.pathname.includes("/Devdocs")
              ? styles.border1
              : styles.border2
          )}
        />
        <div
          // style={{ display: display?'block':'none'}}
          id="searchModel"
          className={cx(
            display && input != ""
              ? styles.searchModelOn
              : styles.searchModelOff,
            "searchModel"
          )}
        >
          Model Demo
        </div>
      </div>
      <div className="navbar-cta">
        <div className="search-img">
          <SearchIcon />
        </div>
        <div
          style={{ position: "relative" }}
          className="white-bag"
          onClick={cartClick}
        >
          {cart.cartItems.length > 0 ? <OrangeBag /> : <WhiteBag />}

          <div className={styles.cartcount}>
            <p>
              {cart.cartItems.length > 0 ? cart.cartItems[0].cartQuantity : 0}
            </p>
          </div>
        </div>

        <Link href="/">
          <a className="account-circle">
            <AccountCircle />
          </a>
        </Link>

        {/* <a className='login' onClick={handleShow}>
          Login
        </a> */}
        {localStorage.getItem("clientId") ? (
          <div className={styles.userInfo}>
            <div className={styles.icon}>
              <Image src={dp} />
            </div>
            {typeof window !== "undefined" ? (
              <div className={styles.text}>
                <h5>{localStorage.getItem("clientname")}</h5>
                <p>User profile</p>
              </div>
            ) : (
              false
            )}
          </div>
        ) : (
          <>
            <a className="login" onClick={handleShow}>
              Login
            </a>
            <a>Sign Up</a>
          </>
        )}
        {/* <Link
          // className={cx(styles.signUpBtn)}
          // onClick={() => {
          // 	router.query.signUp = '1';
          // 	router.push(router);
          // }}
          href={{ search: 'signUp=1', pathname: router.asPath }}
          replace
          shallow
          passHref
        >
          <a>Sign Up</a>
        </Link> */}
      </div>
    </nav>
  );
}
