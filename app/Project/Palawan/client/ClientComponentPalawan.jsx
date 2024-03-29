// ClientComponentPalawan.js
"use client";
import React from "react";
import GlobalStyle from "@/app/style/global-style";
import styles from "./styling.module.css";
import "animate.css";
import { useInView } from "react-intersection-observer";
import NewElnido from "./NewElnido.mp4";

function ClientComponentPalawan() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleScrollDown = () => {
    const container2Element = document.querySelector("#container2");
    container2Element.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutPalawan = () => {
    const container3Element = document.querySelector("#container3");
    container3Element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyle />
      <div className={styles.header}>
        <h1>Palawan</h1>
      </div>
      <div
        className={`${styles.container1} ${
          inView1 ? "animate__animated animate__backInLeft" : ""
        }`}
        ref={ref1}
      >
        <h1 className={`${styles.w_palawan}`}>
          Palawan is one of the attractive sites here in the
          <span style={{ color: "#18228f" }}>Philippines</span>
        </h1>
        <button className={styles.scroll_down} onClick={handleScrollDown}>
          <p className={styles.child_scroll_down}>Scroll Down</p>
        </button>
        <button className={styles.About_Palawan} onClick={handleAboutPalawan}>
          <span>
            <p className={styles.child_About_palawan}>About Palawan</p>
          </span>
        </button>
      </div>
      <div
        className={`${styles.container2} ${
          inView2 ? "animate__animated animate__backInRight" : ""
        }`}
        ref={ref2}
        id="container2"
      >
        <h1 className={`${styles.w_palawan_pt2}`}>
          Palawan is one of the attractive sites here in the
          <span style={{ color: "#18228f" }}>Philippines</span>
        </h1>
        <div>
          <h2>Scroll down</h2>
        </div>
        <div>
          <img
            src="/static/scroll_down.gif"
            alt="SD"
            className={styles.scrollDownGIF}
          />
        </div>
      </div>
      <div
        className={`${styles.container3} ${
          inView3 ? "animate__animated animate__backInLeft" : ""
        }`}
        ref={ref3}
        id="container3"
      >
        <div>
          <h1 className={`${styles.crdts}`}>Credits:</h1>
          <p>
            This video is from Josiah Lebente in Tiktok Video This is type of
            short Cinematic Video
          </p>
          <video controls className={styles.video}>
            <source src={NewElnido} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </>
  );
}

export default ClientComponentPalawan;
