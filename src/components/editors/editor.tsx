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

  return (
    <div className="code-editor">
      <pre><code className={`language-${language}`}>{code}</code></pre>
      <textarea onChange={(e) => setCode(e.target.value)} value={code}></textarea>
    </div>
  );
}