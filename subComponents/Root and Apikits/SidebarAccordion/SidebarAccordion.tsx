import React from 'react';
import styles from './SidebarAccordion.module.scss';
import cx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SidebarAccordion = () => {
  const router = useRouter();

  return (
    <div
      style={{ width: '100%', padding: '0 1rem 20px 1rem' }}
      className='accordion'
      id='accordionExample'
    >
      <div className='accordion-item'>
        <h2 className='accordion-header' id='headingOne'>
          <button
            id={cx(styles.accButton)}
            className='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseOne'
            aria-expanded='true'
            aria-controls='collapseOne'
          >
            Doc Fundamentals
          </button>
        </h2>
        <div
          style={{ border: 'none' }}
          id='collapseOne'
          className='accordion-collapse collapse show'
          aria-labelledby='headingOne'
          data-bs-parent='#accordionExample'
        >
          <div style={{ paddingLeft: '4.5rem' }} className='accordion-body'>
            <ul id={cx(styles.bodyList)}>
              <li>
                <Link href='/Devdocs'>
                  <a
                    className={
                      router.pathname == '/Devdocs'
                        ? `${cx(styles.menuactive)}`
                        : ''
                    }
                  >
                    Overview
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Devdocs/authentication'>
                  <a
                    className={
                      router.pathname == '/Devdocs/authentication'
                        ? `${cx(styles.menuactive)}`
                        : ''
                    }
                  >
                    Authentication
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Devdocs/authorization'>
                  <a
                    className={
                      router.pathname == '/Devdocs/authorization'
                        ? `${cx(styles.menuactive)}`
                        : ''
                    }
                  >
                    Authorization
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Devdocs/encryption'>
                  <a
                    className={
                      router.pathname == '/Devdocs/encryption'
                        ? `${cx(styles.menuactive)}`
                        : ''
                    }
                  >
                    Encryption
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Devdocs/integration-flow'>
                  <a
                    className={
                      router.pathname == '/Devdocs/integration-flow'
                        ? `${cx(styles.menuactive)}`
                        : ''
                    }
                  >
                    Integration Flow
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/Devdocs/ScriptMaster'>
                  <a
                    className={
                      router.pathname == '/Devdocs/ScriptMaster'
                        ? `${cx(styles.menuactive)}`
                        : ''
                    }
                  >
                    Script Master
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAccordion;
