import React, { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import './Title.css'

const Title = () => {
    const [textIndex, setTextIndex] = useState(0);

    const texts = ["MERN Stack", "JavaScript", "React", "Full Stack"];

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
      let interval = setInterval(() => {
        setTextIndex(getRandomInt(0, texts.length));
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }, [texts.length]);

  return (
    <div>
      <div className="my-12">
        <section className="flex justify-center text-sky-400 text-2xl md:text-5xl font-bold dev-text">
          Rakibul Hasan
          <ReactTextTransition
            springConfig={presets.gentle}
            className="mx-2 text-red-500"
            inline
          >
            {texts[textIndex] ? texts[textIndex] : "Web"}
          </ReactTextTransition>
          Developer
        </section>
      </div>
    </div>
  );
};

export default Title;
