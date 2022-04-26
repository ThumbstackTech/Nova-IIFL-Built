import React, { useState } from "react";
import Head from "next/head";
import cx from "classnames";
import styles from "./Login.module.scss";
import Header from "../../Root/HeadeComponent/Header";
import SideBar from "../../Root/DevdocsSidebar/DevdocsSidebar";
import styled from "../../Root/Root/Root.module.scss";
import Footer from "../../Root/FooterComponent/Footer";
import CodeBlock from "../../../subComponents/Root and Apikits/CodeBlock/CodeBlock";
import AllKitOptionsHorizontal from "../../../subComponents/Root and Apikits/AllKitOptionsHorizontal/AllKitOptionsHorizontal";
import InfoCardGrid from "../../../subComponents/Root and Apikits/InfoCardGrid/InfoCardGrid";
import HowToUseApi from "../../../subComponents/Root and Apikits/HowToUseAPiCards/HowToUseApi";
import ContributeAndReward from "../../../subComponents/Root and Apikits/ContributeAndReward/ContributeAndReward";
import ApiHeader from "../../../subComponents/Root and Apikits/ApiHeader/ApiHeader";
import AnchorWidget from "../../../subComponents/Root and Apikits/AnchorWidget/AnchorWidget";
import LinkBody from "../../../subComponents/Root and Apikits/LinkBody/LinkBody";
import { EastBlack, Group25704Two, Group25713Two } from "../../../svgs/SVG";
import Table from "../../../subComponents/Root and Apikits/Table/Table";
import ReactMarkdown from "react-markdown";
import CodeBlockWhite from "../../../subComponents/Root and Apikits/CodeBlockWhite/CodeBlockWhite";
import TwoCardGrid from "../../../subComponents/Root and Apikits/TwoCardGrid/TwoCardGrid";
import PageParagraph from "../../../subComponents/PageParagraph";
import PageCopyPasteUrl from "../../../subComponents/PageCopyPasteUrl";
import PageTable from "../../../subComponents/PageTable";
import PageWhiteCodeCard from "../../../subComponents/PageWhiteCodeCard";

interface Props {
  title?: string | string[];
  data?: any;
}

function Login(props: Props) {
  const { data } = props;
  let { title, section_data, subTag, paras, points, api_kits_cards, page } =
    data!;
  // const [tabtitle, setTabTitle] = useState(paras[0].title);
  console.log("login==", data);
  const getTabClicked = (tabTitle: string) => {
    console.log("Tab clicked==", tabTitle);
    // setTabTitle(tabTitle);
  };

  return (
    <>
      <Head>
        <title>Login - IIFL</title>
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
      <>
        <div id={cx(styled.main)}>
          <SideBar />
          <div className={cx(styled.body)}>
            <div id="main-content" className={cx(styles.wrapper)}>
              <ApiHeader apiHeader={data} />
              <div
                style={{ margin: "15px 15px 0 15px;" }}
                className={cx("d-block d-md-none")}
              >
                {paras != null && paras!.length > 0 && (
                  <AnchorWidget
                    getTabClicked={getTabClicked}
                    title={title}
                    // anchorActive={paras[0].title}
                    options={paras}
                  />
                )}
              </div>
              <div
                className={cx(
                  styles.content,
                  "row justify-content-between mt-5"
                )}
              >
                <div className={cx(styles.paragraph, "col col-md-8 p-0 pt-4")}>
                  {data.attributes.page.map((content: any, idx: any) => {
                    const { __component } = content;
                    if (__component && __component === "page.paragraph") {
                      return <PageParagraph paragraph={content} />;
                    } else if (
                      __component &&
                      __component === "page.copy-paste-url"
                    ) {
                      return <LinkBody copyPaste={content} />;
                    } else if (__component && __component === "page.table") {
                      return <Table pageTableBox={content} />;
                    } else if (
                      __component &&
                      __component === "page.white-code-card"
                    ) {
                      return <CodeBlockWhite whitecodecard={content} />;
                    } else {
                      return false;
                    }
                  })}
                </div>
                <div className={cx("col-3 p-0 d-md-block d-none")}>
                  {/* <AnchorWidget /> */}
                  {paras != null && paras!.length > 0 && (
                    <AnchorWidget
                      getTabClicked={getTabClicked}
                      // title={title}
                      // anchorActive={tabtitle}
                      options={paras}
                    />
                  )}
                </div>
              </div>
              {/* <section className={cx(styles.howToApi)}>
              </section>
              <ContributeAndReward contribute={data} /> */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    </>
  );
}

export default Login;
