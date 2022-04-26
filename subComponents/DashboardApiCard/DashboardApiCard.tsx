import React from 'react';
import styles from './DashboardApiCard.module.scss';
import cx from 'classnames';
import { Forum, Lock, ExpandMoreBlack } from '../../svgs/SVG';

const DashboardApiCard = () => {
  return (
    <div className={cx(styles.wrapper, 'd-flex justify-content-between')}>
      <div className={cx(styles.leftSection, 'd-flex align-items-center')}>
        <div className={styles.title}>
          <h1>Login</h1>
          <div className={cx(styles.subtitle, 'd-flex align-items-center')}>
            <span className={styles.bluetag}>FULL KIT</span>{' '}
            <p>Checked &lt;1 min ago</p>
          </div>
        </div>
      </div>
      <div className={cx(styles.midSection, 'd-flex flex-column ')}>
        <p>Performance</p>
        <h4>321ms</h4>
      </div>
      <div className={cx(styles.midSection, 'd-flex flex-column')}>
        <p>Uptime</p>
        <h4>100 %</h4>
      </div>
      <div className={cx(styles.rightSection, 'd-flex align-items-center')}>
        <span className={cx('d-flex align-items-center')}>
          {' '}
          {/*add styles.down in span classname for down api status, */}{' '}
          <div></div> HEALTHY
        </span>
      </div>
    </div>
  );
};

export default DashboardApiCard;
