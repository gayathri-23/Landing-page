import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import Hero from './Hero';
import 'tachyons';

ReactDOM.render(<div><Hero id="1" pic="pic/army.jpg" name="army" works="Protec Nation"/> 
<Hero id="2" pic="pic/police1.jpg" name="police" works="Protect Nation"/> 
<Hero id="3" pic="pic/farmer2.jpg" name="farmer" works="gives food"/> 
<Hero id="4" pic="pic/army.jpg" name="army" works="Protec Nation"/>
<Hero id="5" pic="pic/army.jpg" name="army" works="Protec Nation"/>
</div>  , document.getElementById("root"));

  