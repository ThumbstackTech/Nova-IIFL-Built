import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

interface Props {
  pageTableBox?: any;
}

function PageTable(Props: any) {
  const { pageTableBox } = Props;
  const content = unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(() => {
      return (tree) => {
        console.log("tree", tree);
      };
    })
    .use(rehypeReact, {
      createElement: React.createElement,
    });
  return (
    <>
      <div>{content.processSync(pageTableBox.table).result}</div>
    </>
  );
}

export default PageTable;
