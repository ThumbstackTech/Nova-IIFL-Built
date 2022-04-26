import React from 'react';
import styles from './DashboardProductCard.module.scss';
import cx from 'classnames';
import { Forum, Lock, ExpandMoreBlack } from '../../svgs/SVG';

const DashboardProductCard = () => {
  return (
    <div className={cx(styles.wrapper, 'd-flex justify-content-between')}>
      <div className={cx(styles.leftSection, 'd-flex align-items-center')}>
        <div className={styles.icon}>
          <Lock width='30px' height='30px' />
        </div>
        <div className={styles.title}>
          <h1>
            User Authentication System <span></span>{' '}
          </h1>
          <div className={cx(styles.subtitle, 'd-flex')}>
            <span>FULL KIT</span>{' '}
            {/* add className={styles.bluetag} for blue tag */}
            <p>by IIFL Securities</p>
          </div>
        </div>
      </div>
      <div className={cx(styles.rightSection, 'd-flex align-items-center')}>
        <div>
          <h3>API KIT</h3>
          <h5>12th Dec 2021</h5>
        </div>
        <ExpandMoreBlack />
      </div>
    </div>
  );
};

export default DashboardProductCard;
