import React from 'react';
import { CopyBlock, nord, paraisoLight } from 'react-code-blocks';
import cx from 'classnames';
import styles from './codeBlock.module.scss';
import { CopyLink } from '../../../svgs/SVG';

const CodeBlock = () => {
  return (
    <div className={cx(styles.body)}>
      <div className={cx(styles.Title)}>
        <h5>SAMPLE REQUEST BODY</h5>
        <div style={{ display: 'flex' }}>
          <select id='lib' className={cx(styles.lib)}>
            <option value='volvo'>Select Library&emsp;</option>
            <option value='saab'>jsx</option>
            <option value='opel'>python</option>
          </select>
          <a
            style={{ paddingLeft: '2rem', borderLeft: 'solid 1px #707070' }}
            href='#'
          >
            {' '}
            <CopyLink />{' '}
          </a>
        </div>
      </div>
      <div
        style={{
          overflow: 'scroll',
          borderBottomLeftRadius: '2rem',
          borderBottomRightRadius: '2rem',
        }}
        className={cx(styles.link)}
      >
        <div
          style={{
            minWidth: '720px',
            paddingBottom: '2rem',
            backgroundColor: '#2e3440',
          }}
          className='code'
        >
          <CopyBlock
            text={`
            {  
              "head": {
                    "UserKey": "aAb1CD2Efg3h4ijKlmnopQ5rSTUVwxYZ"
                },
                "body": {
                    "ClientCode": "0WiL1PjQzMpzNLWeP3pbdg==",
                    "Pwd": "L4/jvI8WqmUf4uts3fiLlA==",
                    "DOB": "NQOAAC9AKE5c0ltAcMYFFQ=="
                }
            }`}
            language='json'
            wrapLines
            theme={nord}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
