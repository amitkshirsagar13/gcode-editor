import Prism from 'prismjs';
// import 'prismjs/components/prism-gcode';
import './gcode-grammer';
import TextAreaEditor from '../editor';
import './gcode.scss';

const gCode = `N100 G01 X10 Y20 Z30 M01 T01
N200 DEF REAL _X_HOME, _Y_HOME, _Z_HOME
N300 ;
N400 _X_HOME=0 _Y_HOME=225.425 _Z_HOME=606.425
N600 G17 G710 G94 G90 FNORM
N700 _camtolerance=0.06
N800 TRAFOOF
N900 SUPA G0 Z=_Z_HOME D0
N110 T="ENDMILL_1" M6`

function GCode() {
  Prism.languages.gcode;
  return (
    <>
      <div>
        <TextAreaEditor seedCode={gCode} language='gcode'/>
      </div>
    </>
  )
}

export default GCode