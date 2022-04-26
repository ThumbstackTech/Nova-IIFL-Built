import React from "react";
import Footer from "../../component/Root/FooterComponent/Footer";
import PageParagraph from "../../subComponents/PageParagraph";
import PurpleParagraph from "../../subComponents/PurpleParagraph/PurpleParagraph";
import cx from "classnames";
import styles from "../../component/DevDocs/Authentication/Authentication.module.scss";
import styled from "../../component/Root/Root/Root.module.scss";
import Head from "next/head";
import SideBar from "../../component/Root/DevdocsSidebar/DevdocsSidebar";
import Header from "../../component/Root/HeadeComponent/Header";
import Table from "../../subComponents/Root and Apikits/Table/Table";
import CodeBlockWhite from "../../subComponents/Root and Apikits/CodeBlockWhite/CodeBlockWhite";
import TwoCardGrid from "../../subComponents/Root and Apikits/TwoCardGrid/TwoCardGrid";
import ContributeAndReward from "../../subComponents/Root and Apikits/ContributeAndReward/ContributeAndReward";
import Images from "../../subComponents/Root and Apikits/Images/Images";

interface Props {
  page?: any;
}

function DevdocsPages(props: { page: any }) {
  const { page } = props;
  console.log("page", page);
  return (
    <>
      <Head>
        <title>Authentication: Nova - IIFL</title>
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
      <div id={cx(styled.main)}>
        <SideBar />
        <div className={cx(styled.body)}>
          <div id="main-content" className={cx(styles.wrapper)}>
            <div className={cx(styles.content, "row justify-content-between")}>
              <div
                className={cx(
                  styles.paragraph,
                  page.id === 4 ? false : "col col-md-8 p-0 pt-4"
                )}
              >
                <h1>{page!.attributes.title}</h1>
                <h4 style={{ color: "#3d3d3d" }}>
                  {page!.attributes.subtitle}
                </h4>
                <div
                  style={{ margin: "15px 0 15px 0 ;" }}
                  className={cx("d-block d-md-none")}
                >
                  {/* {paras.length > 0 && (
                  <AnchorWidget
                    getTabClicked={getTabClicked}
                    title={title}
                    anchorActive={tabtitle}
                    options={paras}
                  />
                )} */}
                </div>
                <br />
                {/* <h4 style={{ opacity: "0.63" }}>{points![0].description}</h4>
              {paras!.map((content: any, idx: any) => {
                return <TextContent key={idx} content={content} />;
              })} */}
                {page!.attributes.page!.map((content: any, idx: any) => {
                  const { __component } = content;
                  if (__component && __component === "page.paragraph") {
                    return <PageParagraph paragraph={content} />;
                  } else if (__component && __component === "page.table") {
                    return <Table pageTableBox={content} />;
                  } else if (__component && __component === "page.paragraph") {
                    return <PageParagraph paragraph={content} />;
                  } else if (
                    __component &&
                    __component === "page.purple-paragraph"
                  ) {
                    return <PurpleParagraph paragraph={content} />;
                  } else if (__component && __component === "page.table") {
                    return <Table pageTableBox={content} />;
                  } else if (
                    __component &&
                    __component === "page.media-component"
                  ) {
                    return <Images pageTableBox={content} />;
                  } else if (
                    __component &&
                    __component === "page.white-code-card"
                  ) {
                    return <CodeBlockWhite whitecodecard={content} />;
                  } else {
                    return false;
                  }
                })}
                {/* <Table /> */}
                {/* <TextContent content={ paras[0]}/>
              <TextContent content={ paras[1]} />
            // <Table />
              <TextContent content={ paras[2]}/> */}
                <br />
                <br />

                <br />
                <br />
                <br />
              </div>
              {page.id === 4 ? (
                false
              ) : (
                <div className={cx("col-3 p-0 d-md-block d-none")}>
                  {/* {paras.length > 0 && (
                <AnchorWidget
                  getTabClicked={getTabClicked}
                  title={title}
                  anchorActive={tabtitle}
                  options={paras}
                />
              )} */}

                  {/* <AnchorWidget /> */}
                </div>
              )}
            </div>

            <TwoCardGrid
              data={page.attributes.knowledgeBase.knowledgeBaseCard}
            />
            <ContributeAndReward
              contribute={page.attributes.reward_card.data.attributes}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DevdocsPages;

export async function getStaticPaths() {
  const response = await fetch(
    "https://nova-mysql.herokuapp.com/api/doc-pages"
  );
  const url = await response.json();

  const paths = url.data
    .map((pageurl: { slugs: any }) => ({
      params: { PagesId: pageurl.slugs },
    }))
    .filter((paramsurl: any) => {
      console.log(
        paramsurl,
        paramsurl.params.PagesId,
        paramsurl.params.PagesId !== null
      );
      return paramsurl.params.PagesId !== null;
    });

  return { paths, fallback: false };
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const response = await fetch(
    `https://nova-mysql.herokuapp.com/api/slugify/slugs/doc-page/${params.PagesId}`
  );
  const data1 = await response.json();
  const xyz = data1.data.id;
  const res = await fetch(
    `https://nova-mysql.herokuapp.com/api/doc-pages/${xyz}`
  );
  const data = await res.json();

  return {
    props: {
      page: data,
    },
  };
}
