import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

interface Props {
  paragraph?: any;
}

function PageParagraph(Props: any) {
  const { paragraph } = Props;

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
      <div>
        <div className="text">
          {content.processSync(paragraph.description).result}
        </div>
      </div>
    </>
  );
}

export default PageParagraph;
