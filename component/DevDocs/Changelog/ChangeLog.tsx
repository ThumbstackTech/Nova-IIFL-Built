import React, { useState } from 'react';
import cx from 'classnames';
import Header from '../../Root/HeadeComponent/Header';
import SideBar from '../../Root/DevdocsSidebar/DevdocsSidebar';
import styled from '../../Root/Root/Root.module.scss';
import styles from './ChangeLog.module.scss';
import Footer from '../../Root/FooterComponent/Footer';
import Head from 'next/head';
import AnchorWidget from '../../../subComponents/Root and Apikits/AnchorWidget/AnchorWidget';
import ChangelogList from '../../../subComponents/Root and Apikits/ChangelogList/ChangelogList';
import ContributeAndReward from '../../../subComponents/Root and Apikits/ContributeAndReward/ContributeAndReward';

interface Props {
  data?: any;
}
function ChangeLog(Props: Props) {
  const { data } = Props;
  let { title, section_data, subTag, paras, points, api_kits_cards } = data!;
  const [tabtitle, setTabTitle] = useState(paras[0].title);
  console.log('change log==', data);
  const getTabClicked = (tabTitle: string) => {
    console.log('Tab clicked==', tabTitle);
    setTabTitle(tabTitle);
  };
  return (
    <>
      <Head>
        <title>ChangeLog: Nova - IIFL</title>
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
                <h1>API Changelog</h1>

                <h4>Keep Track of changes and upgrades done to our APIs</h4>

                <ChangelogList data={data} />
                <ChangelogList data={data} />
              </div>
              <div className={cx('col-3 p-0 d-md-block d-none')}>
                {/* <AnchorWidget /> */}
                {paras != null && paras!.length > 0 && (
                  <AnchorWidget
                    getTabClicked={getTabClicked}
                    title={title}
                    anchorActive={tabtitle}
                    options={paras}
                  />
                )}
              </div>
            </div>
            <ContributeAndReward contribute={api_kits_cards[0]} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChangeLog;
