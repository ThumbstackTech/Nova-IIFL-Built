import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
interface Props {
  whitecodecardcontent?: any;
}

function WhiteCodeBlock(Props: any) {
  const { whitecodecardcontent } = Props;
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
    <div>
      {content.processSync(whitecodecardcontent.whiteCodeSnippet).result}
    </div>
  );
}

export default WhiteCodeBlock;
