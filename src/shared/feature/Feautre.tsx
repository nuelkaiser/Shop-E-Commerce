import React from "react";
import styles from "./Feature.module.scss";

const Feautre = () => {
  return (
    <div className={styles.featureContainer}>
      <div>
        <h3 className={styles.featureHeader}>Free Delivery</h3>
        <p className={styles.featureDesc}>
          For all oders over $50, consectetur adipim scing elit.
        </p>
      </div>

      <div>
        <h3 className={styles.featureHeader}>90 Days Return</h3>
        <p className={styles.featureDesc}>
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>

      <div>
        <h3 className={styles.featureHeader}>Secure Payment</h3>
        <p className={styles.featureDesc}>
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  );
};

export default Feautre;
