import React from 'react';
import styles from './DashboardCardsHeader.module.scss';
import cx from 'classnames';
import { Refresh } from '../../svgs/SVG';

interface Props {
  title?: String;
  subtitle?: String;
  buttonText?: String;
  dot?: Boolean;
}

const DashboardCardsHeader = (props: Props) => {
  const { title, subtitle, buttonText, dot } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <p>
          {dot ? <div className={styles.orange} /> : null}
          {/*change classname with red, green or orange*/}
          {subtitle}
        </p>
      </div>
      <button>
        {buttonText}
        <Refresh />
      </button>
    </div>
  );
};

export default DashboardCardsHeader;
