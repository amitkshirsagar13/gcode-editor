import React, { useEffect } from "react";
import "./theme/prism-vsc-dark-plus.scss";
import "./editor.scss";
import Prism from "prismjs";


export default function TextAreaEditor( {seedCode, language}: any) {
  const [code, setCode] = React.useState(seedCode);
  const [codeRender, setCodeRender] = React.useState(seedCode);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [codeRender]);

  function syncScroll() {
    /* Scroll result to scroll coords of event - sync with textarea */
    let textareaElement: Element | null = document.querySelector("#textareaId");
    let preElement: Element | null = document.querySelector("#pre");
    // Get and set x and y
    if(preElement && textareaElement) {
      preElement.scrollTop = textareaElement.scrollTop;
      preElement.scrollLeft = textareaElement.scrollLeft;
    }
  }
  function setTextValue(e: any) {
    const text = e.target.value;
    console.log('TEXT',text.split("\n").length);
    setCode(text);
    setCodeRender(text);
    syncScroll();
    console.log('RENDER', codeRender.split("\n").length);
  }
  
  return (
    <div className="code-editor">
      <pre id="pre" className="pre-code">
        <code id="code" className={`pre-code language-${language}`}>{code}</code>
      </pre>
      <textarea id="textareaId" onChange={(e) => setTextValue(e)} value={code} onScroll={()=>syncScroll()}></textarea>
    </div>
  );
}