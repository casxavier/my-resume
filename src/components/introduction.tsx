import React from 'react';
import logo from './logo.svg';

import '../css/Intro.css';
import '../css/Font.css'

function Introduction() {
  return (
    <div className="container">
    <div className="box">
        <div className="box-row">
            <div className="box1">
            <h3> About Me </h3>
              <p className='para'>
                I am Xavier Chan, currently a pre-enlistee holding a Diploma in Information Technology in the School of Infocomm Technology at Ngee Polytechnic.
                I have a deep hunger for learning and am currently looking for an entry level position where I can develop both my programming and networking skills. 
              </p>
            </div>
            <div className="box2">
              <h3>Contact Me:</h3>
            </div>
        </div>
    </div>
</div>
    // <div>
    //   <div className="aboutme">
    //     <h3> About Me </h3>
    //     <p style={{
    //       marginLeft: '2%'
    //     }}>
    //       I am Xavier Chan, a pre-enlistee holding a Diploma in Information Technology in the School of Infocomm Technology at Ngee Polytechnic.
    //       I have a deep hunger for learning and am currently looking for an entry level position where I can develop both my programming and networking skills. 
    //       </p>
    //     </div>
    //     <h4>Contact Me:</h4>
    // </div>
  );
}

export default Introduction;
