import Prism from 'prismjs';
// import 'prismjs/components/prism-gcode';
import './gcode-grammer';
import TextAreaEditor from '../editor';
import './gcode.scss';

const gCode = `N10 DEF REAL _camtolerance
N20 DEF REAL _X_HOME, _Y_HOME, _Z_HOME
N30 ;
N40 _X_HOME=0 _Y_HOME=225.425 _Z_HOME=606.425
N50 ;
N60 G17 G710 G94 G90 FNORM
N70 _camtolerance=0.06
N80 TRAFOOF
N90 SUPA G0 Z=_Z_HOME D0
N100 SUPA X=_X_HOME Y=_Y_HOME D1
N110 T="ENDMILL_1" M6
N120 MSG("NONE")
N130 TRAFOOF
N140 SUPA Z=_Z_HOME D0
N150 SUPA X=_X_HOME Y=_Y_HOME D1
N160 CYCLE832(_camtolerance,0,1)
N170 COMPOF
N180 G54
N190 G17 G0 X80.411 Y14.134 S1061 D1 M3
`

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