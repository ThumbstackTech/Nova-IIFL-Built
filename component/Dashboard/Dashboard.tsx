import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Dashboard.module.scss';
import styled from '../Root/Root/Root.module.scss';
import Head from 'next/head';
import Header from '../Root/HeadeComponent/Header';
import Footer from '../Root/FooterComponent/Footer';
import SideBar from '../Root/SideBarComponent/SideBar';
import DashboardCardsHeader from '../../subComponents/DashboardCardsHeader/DashboardCardsHeader';
import DashboardProductCard from '../../subComponents/DashboardProductCard/DashboardProductCard';
import { Arrow, CopyLinkWhite, SearchIcon, Email, Faq } from '../../svgs/SVG';
import DashboardApiCard from '../../subComponents/DashboardApiCard/DashboardApiCard';
import Image from 'next/image';
import devdocsImg from './images/devdocsimg@3x.png';
import HomeInfoCardGrid from '../../subComponents/Root and Apikits/HomeInfoCard/HomeInfoCard';
import DashboardHelpCentre from '../../subComponents/DashboardHelpCentre/DashboardHelpCentre';

const Dashboard = () => {
  const [tab, setTab] = useState('purchased');
  const [model, setmodel] = useState(false);
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
                  <div className={styles.filter}>
                    <a className={styles.filterActive}>All</a>
                    <a>API</a>
                    <a>APi Kits</a>
                  </div>
                  <div className={styles.productScroll}>
                    <DashboardProductCard />
                    <DashboardProductCard />
                    <DashboardProductCard />
                    <DashboardProductCard />
                    <DashboardProductCard />
                    <DashboardProductCard />
                    <DashboardProductCard />
                    <DashboardProductCard />
                    <DashboardProductCard />
                  </div>
                </div>
              </div>
              <div className={cx(styles.apiKey, 'col m-0 p-0')}>
                <DashboardCardsHeader
                  title='Api Key'
                  subtitle='Valid till-02/03/2022 | 11:00AM'
                  buttonText='Refresh'
                  dot={true}
                />
                <div className={styles.innerContent}>
                  <div className={cx('d-flex justify-content-between')}>
                    <div className={styles.halfDiv}>
                      <p>App Name</p>
                      <h5>
                        IIFLMarMAYANK{' '}
                        <span>
                          <CopyLinkWhite />
                        </span>
                      </h5>
                    </div>
                    <div className={styles.halfDiv}>
                      <p>User ID</p>
                      <h5>HrJcEOymwnc</h5>
                    </div>
                  </div>
                  <div className={cx('d-flex justify-content-between')}>
                    <div className={cx(styles.halfDiv, 'mb-0')}>
                      <p>App Source</p>
                      <h5>4284</h5>
                    </div>
                    <div className={cx(styles.halfDiv, 'mb-0')}>
                      <p>Password</p>
                      <h5>UxfOMlKlVtW</h5>
                    </div>
                  </div>
                  <div className={styles.fullDiv}>
                    <p>User Key</p>
                    <h5>hNd4WF5Zec6t0qoXxex1rD4pUAFKccJRaSDS</h5>
                  </div>
                  <div className={styles.fullDiv}>
                    <p>Encryption Key</p>
                    <h5>5xsKirl1yd6ewdFWd8ippScB41A48GjTmv....</h5>
                  </div>
                  <div className={styles.fullDiv}>
                    <p>OCP Key</p>
                    <h5>fc714d8e5b82438a93a95baa493ff45b</h5>
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
                <div className={styles.apiScroll}>
                  <DashboardApiCard />
                  <DashboardApiCard />
                  <DashboardApiCard />
                  <DashboardApiCard />
                  <DashboardApiCard />
                  <DashboardApiCard />
                  <DashboardApiCard />
                  <DashboardApiCard />
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
                    onFocus={() => setmodel(true)}
                    onBlur={() => setmodel(false)}
                  />
                </div>
                <div
                  className={cx(
                    styles.searchModel,
                    model ? styles.modelOpen : null
                  )}
                >
                  demo
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

export default Dashboard;
