import cx from 'classnames';
import styles from './Footer.module.scss'

export default function Footer() {
    return (
      <section className={styles.footer}>
      <div className='row justify-content-between'>
        <div className='col-xl-3 mb-5 my-xl-0'>
          <img id={styles.footerLogo} src='/images/logo.png' alt='' />
          <h4>IIFL Nova&trade; &emsp; 2021. All Rights Reserved</h4>
        </div>
        <div className='col-xl-3 my-5 my-xl-0'>
          <h3>MODULES</h3>
          <ul className='row row-cols-3 row-cols-md-5 row-cols-xl-2'>
            <li className='col col-xl-5'>
              <a href='#'>Start Building</a>
            </li>
            <li className='col col-xl-5'>
              <a href='#'>IIFL Incubator</a>
            </li>
            <li className='col col-xl-5'>
              <a href='#'>Nova Store</a>
            </li>
            <li className='col col-xl-5'>
              <a href='#'>Nova Learn</a>
            </li>
            <li className='col col-xl-5'>
              <a href='#'>Gigs & Events</a>
            </li>
          </ul>
        </div>
        <div className='col-xl-3 my-5 my-xl-0'>
          <h3>ENTERPRISE</h3>
          <ul className='row row-cols-3 row-cols-md-5 row-cols-xl-2'>
            <li className='col col-xl-4'>
              <a href='#'>About</a>
            </li>
            <li className='col col-xl-6'>
              <a href='#'>Terms & Conditions</a>
            </li>
            <li className='col col-xl-4'>
              <a href='#'>Contact</a>
            </li>
            <li className='col col-xl-5'>
              <a href='#'>Privacy Policy</a>
            </li>
            <li className='col col-xl-4'>
              <a href='#'>Pricing</a>
            </li>
          </ul>
        </div>
        <div className={cx(styles.avenueIcons,'col-xl-2 my-5 my-xl-0')}>
          <h3>AVENUES</h3>
          <ul className='row row-cols-xl-3'>
            <li className='col col-xl'>
              <a href='#'>
                <img src='/images/github.svg' alt='' />
              </a>
            </li>
            <li className='col col-xl'>
              <a href='#'>
                <img src='/images/slack.svg' alt='' />
              </a>
            </li>
            <li className='col col-xl'>
              <a href='#'>
                <img src='/images/discord.svg' alt='' />
              </a>
            </li>
            <li className='col col-xl'>
              <a href='#'>
                <img src='/images/facebook.svg' alt='' />
              </a>
            </li>
            <li className='col col-xl'>
              <a href='#'>
                <img src='/images/twitter.svg' alt='' />
              </a>
            </li>
            <li className='col col-xl'>
              <a href='#'>
                <img src='/images/stackoverflow.svg' alt='' />
              </a>
            </li>
          </ul>
        </div>
        <h2
          style={{ color: '#a0abb8' }}
          className={cx(styles.footerText,'d-block d-sm-none')}
        >
          Copyright © IIFL Securities Ltd. All rights Reserved.
        </h2>
      </div>
    </section>
    )
}
