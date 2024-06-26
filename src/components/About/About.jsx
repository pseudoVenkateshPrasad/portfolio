import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/3dMale.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          style={{ borderRadius: "50%", marginRight: "1em" }}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.myImages} src={getImageUrl("about/frontend.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.myImages} src={getImageUrl("about/server.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.myImages} src={getImageUrl("about/uiux.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.heading}>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
