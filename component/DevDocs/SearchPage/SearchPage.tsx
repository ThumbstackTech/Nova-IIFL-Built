import React from 'react';
import cx from 'classnames';
import Header from '../../Root/HeadeComponent/Header';
import SideBar from '../../Root/DevdocsSidebar/DevdocsSidebar';
import styled from '../../Root/Root/Root.module.scss';
import Footer from '../../Root/FooterComponent/Footer';
import Head from 'next/head';
function SearchPage() {
  return (
    <>
      <Head>
        <title>Search: Nova - IIFL</title>
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
          <div id='main-content'>
            <h1>SearchPage</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
