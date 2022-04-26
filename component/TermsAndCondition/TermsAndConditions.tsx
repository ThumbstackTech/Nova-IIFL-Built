import React from 'react';
import styles from './TermsAndConditions.module.scss';
import styled from '../Root/Root/Root.module.scss';
import Head from 'next/head';
import cx from 'classnames';
import Header from '../Root/HeadeComponent/Header';
import Footer from '../Root/FooterComponent/Footer';
import SideBar from '../Root/SideBarComponent/SideBar';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';

interface Props {
  data?: data;
}

export interface data {
  data: Data;
  meta: Meta;
}

export interface Data {
  description: any;
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {}

const TermsAndConditions = (Props: Props) => {
  const { data } = Props;
  console.log('terms', data);

  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        console.log('tree', tree);
      };
    })
    .use(rehypeReact, {
      createElement: React.createElement,
    });
  return (
    <>
      <Head>
        <title>User Profile: Nova - IIFL</title>
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
            {content.processSync(data!.data.description).result}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
