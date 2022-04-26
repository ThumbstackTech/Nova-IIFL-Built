import React from 'react';
import cx from 'classnames';
import Header from '../../Root/HeadeComponent/Header';
import SideBar from '../../Root/DevdocsSidebar/DevdocsSidebar';
import styled from '../../Root/Root/Root.module.scss';
import styles from './ScriptMaster.module.scss';
import Footer from '../../Root/FooterComponent/Footer';
import Head from 'next/head';
import AnchorWidget from '../../../subComponents/Root and Apikits/AnchorWidget/AnchorWidget';
import Table from '../../../subComponents/Root and Apikits/Table/Table';
import TwoCardGrid from '../../../subComponents/Root and Apikits/TwoCardGrid/TwoCardGrid';
import ContributeAndReward from '../../../subComponents/Root and Apikits/ContributeAndReward/ContributeAndReward';
import LinkBody from '../../../subComponents/Root and Apikits/LinkBody/LinkBody';
interface Props {
  data?: any;
}
function ScriptMaster(Props: Props) {
  const { data } = Props;
  return (
    <>
      <Head>
        <title>ScriptMaster: Nova - IIFL</title>
        <meta
          name='description'
          content='Nova - IIFL - Best Documantion Site'
        />
        <meta property='og:title' content='Nova - IIFL' />
        <meta
          property='og:description'
          content='Nova - IIFL - Best Documantion Site'
        />
        <meta property='og:url' content='https://nova.iifl.com/' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div id={cx(styled.main)}>
        <SideBar />
        <div className={cx(styled.body)}>
          <div id='main-content' className={cx(styles.wrapper)}>
            <div className={cx(styles.content, 'row justify-content-between')}>
              <div className={cx(styles.paragraph, 'col col-md-8 p-0 pt-4')}>
                <h1>Script Master</h1>
                <div
                  style={{ margin: '15px 0 15px 0 ;' }}
                  className={cx('d-block d-md-none')}
                >
                  {/* <AnchorWidget /> */}
                </div>
                <br />
                <h4 style={{ opacity: '0.63' }}>
                  The scrip master URL can be used to fetch the scrip details of
                  all the equity, derivates and commodities for NSE, BSE, MCX
                  and NCDEX. The details are fetched in the form of CSV dump
                  which can be imported to a database. Scrip master is updated
                  regularly and can be accessed through the URL mentioned below.
                </h4>
                {/* <LinkBody /> */}
                <Table />
              </div>
              <div className={cx('col-3 p-0 d-md-block d-none')}>
                {/* <AnchorWidget /> */}
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            {/* <TwoCardGrid data={data}/> */}
            {/* <ContributeAndReward contribute={data} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ScriptMaster;
