import React from 'react';
import NavSectionItem from '../../../subComponents/Root and Apikits/NavListItem/NavSectionItem';
import styles from './DevdocsSidebar.module.scss';
import cx from 'classnames';
import { Back } from '../../../svgs/SVG';
import SidebarAccordion from '../../../subComponents/Root and Apikits/SidebarAccordion/SidebarAccordion';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DevdocsSidebar = () => {
  const router = useRouter();

  const closeMenu = () => {
    document.querySelector('#sidebar-details')!.classList.remove('open');
    document.getElementById('nav-details')!.style.filter =
      'blur(0rem) brightness(1)';

    document.getElementById('main-content')!.style.filter =
      'blur(0rem) brightness(1)';
  };
  return (
    <aside className={cx(styles.sidebar)} id='sidebar-details'>
      <img
        src='/images/close_black_24dp.svg'
        className='close'
        alt=''
        onClick={closeMenu}
      />
      <div className={cx(styles.sidebarContent)}>
        <Link href='/'>
          <a id={cx(styles.backHome)}>
            {' '}
            <div className={cx(styles.backImg)}>
              {' '}
              <Back />{' '}
            </div>{' '}
            Back to home
          </a>
        </Link>
        <SidebarAccordion />
        <a id={cx(styles.apiRef)} href='#'>
          API Reference
        </a>
        <div
          style={{ width: '100%', padding: '0 1rem 0 1rem' }}
          className='accordion2'
          id='accordion2'
        >
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                User Authentication
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <Link href='/Devdocs/Login'>
                      <a
                        className={
                          router.pathname == '/Devdocs/Login'
                            ? `${cx(styles.menuactive)}`
                            : ''
                        }
                      >
                        Login
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href='#'>OAuth Login</a>
                  </li>
                  <li>
                    <a href='#'>Partner Login</a>
                  </li>
                  <li>
                    <a href='#'>Login Check</a>
                  </li>
                  <li>
                    <a href='#'>JWT Validation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingThree'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                Market Data
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <Link href='/Devdocs/MarketData'>
                      <a
                        className={
                          router.pathname == '/Devdocs/MarketData'
                            ? `${cx(styles.menuactive)}`
                            : ''
                        }
                      >
                        Market Data
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href='#'>Data Management</a>
                  </li>
                  <li>
                    <a href='#'>Data feed</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingFour'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                Portfolio Management
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <a href='#'>Login</a>
                  </li>
                  <li>
                    <a href='#'>OAuth Login</a>
                  </li>
                  <li>
                    <a href='#'>Partner Login</a>
                  </li>
                  <li>
                    <a href='#'>Login Check</a>
                  </li>
                  <li>
                    <a href='#'>JWT Validation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingFive'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                Additional Order Support
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='headingFive'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <Link href='/Devdocs/PlaceOrder'>
                      <a
                        className={
                          router.pathname == '/Devdocs/PlaceOrder'
                            ? `${cx(styles.menuactive)}`
                            : ''
                        }
                      >
                        Place Order
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a href='#'>manage order</a>
                  </li>
                  <li>
                    <a href='#'>Order Data</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingSix'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSix'
                aria-expanded='false'
                aria-controls='collapseSix'
              >
                Order Management
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseSix'
              className='accordion-collapse collapse'
              aria-labelledby='headingSix'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <a href='#'>Login</a>
                  </li>
                  <li>
                    <a href='#'>OAuth Login</a>
                  </li>
                  <li>
                    <a href='#'>Partner Login</a>
                  </li>
                  <li>
                    <a href='#'>Login Check</a>
                  </li>
                  <li>
                    <a href='#'>JWT Validation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingSeven'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSeven'
                aria-expanded='false'
                aria-controls='collapseSeven'
              >
                Transaction Reconciliation
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseSeven'
              className='accordion-collapse collapse'
              aria-labelledby='headingSeven'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <a href='#'>Login</a>
                  </li>
                  <li>
                    <a href='#'>OAuth Login</a>
                  </li>
                  <li>
                    <a href='#'>Partner Login</a>
                  </li>
                  <li>
                    <a href='#'>Login Check</a>
                  </li>
                  <li>
                    <a href='#'>JWT Validation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingEight'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseEight'
                aria-expanded='false'
                aria-controls='collapseEight'
              >
                Mutual Funds SIP Order System
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseEight'
              className='accordion-collapse collapse'
              aria-labelledby='headingEight'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <a href='#'>Login</a>
                  </li>
                  <li>
                    <a href='#'>OAuth Login</a>
                  </li>
                  <li>
                    <a href='#'>Partner Login</a>
                  </li>
                  <li>
                    <a href='#'>Login Check</a>
                  </li>
                  <li>
                    <a href='#'>JWT Validation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingNine'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseNine'
                aria-expanded='false'
                aria-controls='collapseNine'
              >
                Mutual Funds Order Management System
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseNine'
              className='accordion-collapse collapse'
              aria-labelledby='headingNine'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <a href='#'>Login</a>
                  </li>
                  <li>
                    <a href='#'>OAuth Login</a>
                  </li>
                  <li>
                    <a href='#'>Partner Login</a>
                  </li>
                  <li>
                    <a href='#'>Login Check</a>
                  </li>
                  <li>
                    <a href='#'>JWT Validation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }} className='accordion-item2'>
            <h2 className='accordion-header' id='headingTen'>
              <button
                id={cx(styles.accButton)}
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTen'
                aria-expanded='false'
                aria-controls='collapseTen'
              >
                MF Mandate Management
              </button>
            </h2>
            <div
              style={{ border: 'none' }}
              id='collapseTen'
              className='accordion-collapse collapse'
              aria-labelledby='headingTen'
              data-bs-parent='#accordionExample'
            >
              <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
                <ul id={cx(styles.bodyList)}>
                  <li>
                    <a href='#'>Login</a>
                  </li>
                  <li>
                    <a href='#'>OAuth Login</a>
                  </li>
                  <li>
                    <a href='#'>Partner Login</a>
                  </li>
                  <li>
                    <a href='#'>Login Check</a>
                  </li>
                  <li>
                    <a href='#'>JWT Validation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Link href='/Devdocs/Changelog'>
          <a
            id={cx(styles.changelog)}
            className={
              router.pathname == '/Devdocs/Changelog'
                ? `${cx(styles.menuactive)}`
                : ''
            }
          >
            {' '}
            Changelog{' '}
          </a>
        </Link>
      </div>
    </aside>
  );
};
// Data variable, This will be not the actual data, It is used here only for development purpose
// In production this data Would come from CMS
// const firstsection = {
// 	title: 'START BUILDING',
// 	items: [
// 		{
// 			name: 'API Kits',
// 			to: '/Apikits',
// 			icon: '/images/cable-white-24-dp.svg',
// 		},
// 		{
// 			name: 'Dev Docs',
// 			to: '/Devdocs',
// 			icon: '/images/description-black-24-dp-1.svg',
// 		},
// 		{
// 			name: 'Forums',
// 			to: '/forums',
// 			icon: '/images/forum-black-24-dp.svg',
// 		},
// 		{
// 			name: 'Guides',
// 			to: '/guides',
// 			icon: '/images/integration-instructions-black-24-dp.svg',
// 		},
// 	],
// };

export default DevdocsSidebar;
