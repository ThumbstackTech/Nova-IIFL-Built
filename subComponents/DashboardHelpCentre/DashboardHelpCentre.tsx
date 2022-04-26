import React from 'react';
import styles from './DashboardHelpCentre.module.scss';
import cx from 'classnames';
import Image from 'next/image';
import { Arrow, Call, Email, Faq } from '../../svgs/SVG';
import helpbg from './images/Rectangle 7054@3x.png';

const DashboardHelpCentre = () => {
  return (
    <div className={cx(styles.help, 'col-7 m-0')}>
      <div className={styles.overlay}></div>
      <div className={styles.helpBg}>
        <Image src={helpbg} />
      </div>
      <h4>Help Centre</h4>
      <div className={cx(styles.helpContent, 'd-flex')}>
        <div className={styles.wrapCall}>
          <div
            className={cx(styles.icons, 'd-flex justify-content-between mb-3')}
          >
            <Call />
            <Arrow color='#0070e2' />
          </div>
          <p>Call us at</p>
          <h5>1800 600 900 +91 8127771672</h5>
        </div>
        <div className={styles.wrapEmail}>
          <div
            className={cx(styles.icons, 'd-flex justify-content-between mb-3')}
          >
            <Email />
            <Arrow color='#0070e2' />
          </div>
          <p>Email</p>
          <h5>support@nova</h5>
        </div>
        <div className={styles.wrapFaq}>
          <div
            className={cx(styles.icons, 'd-flex justify-content-between mb-3')}
          >
            <Faq />
            <Arrow color='#0070e2' />
          </div>
          <p>FAQs</p>
          <h5>Find answers instantly</h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardHelpCentre;
