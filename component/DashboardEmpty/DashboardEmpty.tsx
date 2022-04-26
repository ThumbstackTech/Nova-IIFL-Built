import React, { useState } from 'react';
import cx from 'classnames';
import styles from './DashboardEmpty.module.scss';
import styled from '../Root/Root/Root.module.scss';
import Head from 'next/head';
import Header from '../Root/HeadeComponent/Header';
import Footer from '../Root/FooterComponent/Footer';
import SideBar from '../Root/SideBarComponent/SideBar';
import DashboardCardsHeader from '../../subComponents/DashboardCardsHeader/DashboardCardsHeader';
import {
  Arrow,
  SearchIcon,
  Email,
  Faq,
  GreyCart,
  Wrench,
  UpwordArrow,
  Download,
} from '../../svgs/SVG';
import Image from 'next/image';
import devdocsImg from './images/devdocsimg@3x.png';
import productbg from './images/productsbg.png';
import savedbg from './images/bluebag@3x.png';
import apibg from './images/apibg.png';
import checkerbg from './images/checkercorner.png';
import HomeInfoCardGrid from '../../subComponents/Root and Apikits/HomeInfoCard/HomeInfoCard';
import DashboardHelpCentre from '../../subComponents/DashboardHelpCentre/DashboardHelpCentre';

const DashboardEmpty = () => {
  const [tab, setTab] = useState('purchased');
  const changeTab = () => {
    tab === 'purchased' ? setTab('saved') : setTab('purchased');
  };
  return (
    <>
      <Head>
        <title>Dashboard: Nova - IIFL</title>
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
            <div
              className={cx(
                styles.topSection,
                'row m-0 justify-content-between'
              )}
            >
              <div className={cx(styles.products, 'col-7 m-0 p-0')}>
                {/* <DashboardCardsHeader
                  title='Your Products'
                  subtitle='Products you own'
                  button='double'
                /> */}
                <div className={styles.yourProductsHeader}>
                  <div className={styles.title}>
                    <h1>Your Products</h1>
                    <p>Products you own</p>
                  </div>
                  <div
                    className={cx(
                      styles.tab,
                      'd-flex justify-content-between align-items-center'
                    )}
                  >
                    <div
                      onClick={changeTab}
                      className={cx(
                        styles.purchased,
                        tab === 'purchased' ? styles.activeTab : null
                      )}
                    >
                      <a>Purchased</a>
                    </div>
                    <div
                      onClick={changeTab}
                      className={cx(
                        styles.saved,
                        tab === 'saved' ? styles.activeTab : null
                      )}
                    >
                      <a>Saved</a>
                    </div>
                  </div>
                </div>
                <div className={styles.innerContent}>
                  <div className={styles.productBg}>
                    <Image src={tab === 'saved' ? savedbg : productbg} />
                  </div>
                  <div className={styles.text}>
                    {tab === 'saved' ? <Download /> : <GreyCart />}

                    <h3>
                      {tab === 'saved'
                        ? 'Start saving Strategies and Products'
                        : 'Start buying API kits'}
                    </h3>
                    <p>
                      {tab === 'saved'
                        ? 'No Saved Products'
                        : 'No purchase history'}
                    </p>
                    {tab === 'saved' ? (
                      <div className={styles.savedLinks}>
                        {' '}
                        <a>Algo Strategies</a>
                        <a>Plug & Play Services </a>
                      </div>
                    ) : (
                      <a>API Kits</a>
                    )}
                  </div>
                </div>
              </div>
              <div className={cx(styles.apiKey, 'col m-0 p-0')}>
                <DashboardCardsHeader
                  title='Api Key'
                  subtitle='No Key Generated'
                  buttonText='Refresh'
                  dot={true}
                />
                <div className={styles.innerContent}>
                  <div className={styles.apiBg}>
                    <Image src={apibg} />
                  </div>
                  <div className={styles.text}>
                    <Wrench />
                    <h3>No key generated yet!</h3>
                    <p>Generate key now to start using APIs</p>
                    <a>Generate Key</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={cx(
                styles.secondSection,
                'row m-0 justify-content-between'
              )}
            >
              <div className={cx(styles.api, 'col-7 m-0 p-0')}>
                <DashboardCardsHeader
                  title='API Checker'
                  subtitle='Check API uptime'
                  buttonText='Check'
                />
                <div className={styles.innerContent}>
                  <div className={styles.checkerbBg}>
                    <Image src={checkerbg} />
                  </div>
                  <div className={styles.text}>
                    <UpwordArrow />
                    <h3>Start using an API to check uptime </h3>
                    <p>No APIs to check</p>
                    <a>API Kits</a>
                  </div>
                </div>
              </div>
              <div className={cx(styles.devdocs, 'col m-0')}>
                <p>Dev Docs</p>
                <div className={styles.searchBar}>
                  <div className={cx(styles.searchIcon)}>
                    <SearchIcon />
                  </div>
                  <input
                    id={cx(styles.searchInput)}
                    type='text'
                    placeholder='Search Dev Docs'
                  />
                </div>
                <div className={styles.divider}>
                  <span />
                  <p>or</p>
                  <span />
                </div>
                <div className={styles.devdocsImg}>
                  <div className={styles.imgWrapper}>
                    <Image src={devdocsImg} />
                  </div>
                  <h4>Explore API References</h4>
                  <p>Detailed guides to integrate NOVA APIs</p>
                  <a>
                    Explore
                    <span className={cx(styles.arrow)}>
                      <Arrow height='100%' width='100%' />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <DashboardHelpCentre />
            <p className={styles.gridHeader}>Blogs For You</p>
            {/* <HomeInfoCardGrid /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardEmpty;
