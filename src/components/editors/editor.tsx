import React, { useEffect } from "react";
import "./theme/prism-vsc-dark-plus.scss";
import "./editor.scss";
import Prism from "prismjs";


export default function TextAreaEditor( {seedCode, language}: any) {
  const [code, setCode] = React.useState(seedCode);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  function syncScroll() {
    /* Scroll result to scroll coords of event - sync with textarea */
    let textareaElement: any = document.querySelector("#editing");
    let preElement: any = document.querySelector("#highlighting");
    // Get and set x and y
    preElement.scrollTop = textareaElement.scrollTop;
    preElement.scrollLeft = textareaElement.scrollLeft;
  }
  function setTextValue(e: any) {
    let text = e.target.value;
    text = text.replace(/\n /, '\n');
    text += text[text.length-1] == "\n" ? " ": "";
    setCode(text);
    syncScroll();
  }
  
  return (
    <div className="code-editor">
      <textarea id="editing" onInput={(e) => setTextValue(e)} value={code} onScroll={()=>syncScroll()}></textarea>
      <pre id="highlighting" className="pre-code">
        <code id="code" className={`pre-code language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}