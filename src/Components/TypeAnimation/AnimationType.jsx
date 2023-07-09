import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimationType = () => {
    const [textColor, setTextColor] = useState("red");
    return (
      <>
        <div className='text-lg md:text-xl'
          style={{
            color: textColor,
          }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              400,
              () => setTextColor("red"),
              "MERN Stack Developer",
              600,
              () => setTextColor("aqua"),
              "React Developer",
              800,
              () => setTextColor("deeppink"),
              "JavaScript Developer",
              1000,
              () => setTextColor("blue"),
              "",
            ]}
            repeat={Infinity}
          />
        </div>
      </>
    );
};

export default AnimationType;