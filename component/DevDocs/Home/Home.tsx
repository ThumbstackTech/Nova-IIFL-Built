import React from "react";
import cx from "classnames";
import styles from "./Home.module.scss";
import Header from "../../Root/HeadeComponent/Header";
import SideBar from "../../Root/DevdocsSidebar/DevdocsSidebar";
import styled from "../../Root/Root/Root.module.scss";
import Footer from "../../Root/FooterComponent/Footer";
import AllKitOptionsHorizontal from "../../../subComponents/Root and Apikits/AllKitOptionsHorizontal/AllKitOptionsHorizontal";
import InfoCardGrid from "../../../subComponents/Root and Apikits/InfoCardGrid/InfoCardGrid";
import HowToUseApi from "../../../subComponents/Root and Apikits/HowToUseAPiCards/HowToUseApi";
import ContributeAndReward from "../../../subComponents/Root and Apikits/ContributeAndReward/ContributeAndReward";
import Image from "next/image";
import { DocFundamental } from "../../../Interface/DocFundamentalInterface";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
// import codeWindow from './images/Mask group 14456.png'

function Home(Props: any) {
  const { data } = Props;
  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        console.log("tree", tree);
      };
    })
    .use(rehypeReact, {
      createElement: React.createElement,
    });
  if (!data) {
    <h1>Api is Not working</h1>;
  }
  return (
    <>
      {console.log("devdocs", data)}
      <div id={cx(styled.main)}>
        <SideBar />
        <div className={cx(styled.body)}>
          <div id="main-content" className={cx(styles.wrapper)}>
            <section className={cx(styles.topSection, "row")}>
              <div className={cx(styles.documentation, "col")}>
                <h1>
                  {data!.data.documentation && data!.data.documentation.title}
                </h1>
                <h4>
                  {data!.data.documentation &&
                    data!.data.documentation.subtitle}
                </h4>
                <h5 style={{ marginTop: "20px" }}>
                  {
                    content.processSync(data!.data.documentation.description)
                      .result
                  }
                </h5>

                <button>
                  {data!.data.documentation.link &&
                    data!.data.documentation.link.button}
                </button>
              </div>
              <div className={cx(styles.imgWrapper, "col")}>
                {/* <img src='/images/codewindow@3x.png' alt='' /> */}
                <Image
                  src={data!.data.documentation.cardMedia.url}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </section>
            <section
              style={{ width: "100%" }}
              className={cx(
                styles.allKits,
                "row mt-5 mt-sm-5 align-items-center"
              )}
            >
              <div className={cx(styles.allKitP, "col mt-5 mt-sm-0 col-xl-2")}>
                <p>{data!.data.kits && data!.data.kits.title}:</p>
              </div>
              <div className="col">
                <AllKitOptionsHorizontal lg={data!.data.kits.languages} />
              </div>
            </section>
            <section className={cx(styles.howToApi)}>
              <p className={cx(styles.heading)}>
                {data!.data.howToUse && data!.data.howToUse.title}
              </p>
              <HowToUseApi
                cardData={
                  data!.data.howToUse && data!.data.howToUse.knowledgeBaseCard
                }
              />
            </section>
            <ContributeAndReward
              contribute={data!.data.reward_card && data!.data.reward_card}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
