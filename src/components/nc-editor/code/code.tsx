import React, { useEffect } from 'react';
import '../../editors/theme/prism-vsc-dark-plus.scss';
import Prism from 'prismjs';

export default function Code({ code, language } : any) {
  
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  useEffect(() => {
    Prism.highlight(code, Prism.languages.gcode, 'gcode')
  }, [code]);

  return (
    <div>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}