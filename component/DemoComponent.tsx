/* eslint-disable react/no-children-prop */
import React from 'react'
import ReactMarkdown from "react-markdown";
import PageCopyPasteUrl from '../subComponents/PageCopyPasteUrl';
import PageParagraph from '../subComponents/PageParagraph';
import PageTable from '../subComponents/PageTable';
import PageWhiteCodeCard from '../subComponents/PageWhiteCodeCard';



interface Props {
    data?: any;
  }

function DemoComponent(Props: Props) {
    const {data} = Props;
    console.log('post', data)



  return (
    <>
        <h1>{data.title}</h1>
    {
      data.page.map((content: any , idx: any)=> {
        const {__component} = content;
        if (__component && __component === "page.paragraph") {
       return(
        <PageParagraph 
        paragraph={content}
        />
       )
        }else if(__component && __component === "page.copy-paste-url"){
          return(
            <PageCopyPasteUrl copyPaste={content}/>
          )
        }else if(__component && __component === "page.table"){
          return(
            <PageTable pageTableBox={content}/>
          )
        }else if(__component && __component === "page.white-code-card"){
          return(
            <PageWhiteCodeCard whitecodecard={content}/>
          )
        }else{
          return false;
        }
      
      })
    }
    
    <div>
    </div>
    </>
  )
}

export default DemoComponent