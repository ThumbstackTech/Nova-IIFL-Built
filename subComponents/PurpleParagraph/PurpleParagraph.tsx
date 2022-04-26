import React from 'react'
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react'
import cx from "classnames";
import styles from './PurpleParagraph.module.scss';
import { Question } from '../../svgs/SVG';

interface Props {
    paragraph?: any;
  }

function PurpleParagraph(Props: Props) {
    const {paragraph} = Props;
    const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        console.log('tree', tree);
      }
    })
   .use(rehypeReact, {
     createElement: React.createElement
   })
  return (
      <div className={cx(styles.body)} id={paragraph.title}>
      <div className={cx(styles.Title)}>
        <Question />
        <h5 className="ms-3">{paragraph.title}</h5>
      </div>
      <div className={cx(styles.link)}>
        <h5 style={{ overflowWrap: "anywhere" }}> {content.processSync(paragraph.description).result}</h5>
      </div>
    </div>
  )
}

export default PurpleParagraph