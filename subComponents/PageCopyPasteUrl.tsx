import React from "react";

interface Props {
  copyPaste?: any;
}

function PageCopyPasteUrl(Props: any) {
  const { copyPaste } = Props;
  return (
    <>
      <div>
        <h1>{copyPaste.title !== 0 ? copyPaste.title : ""}</h1>
        <p>{copyPaste.url !== 0 ? copyPaste.url : ""}</p>
      </div>
    </>
  );
}

export default PageCopyPasteUrl;
