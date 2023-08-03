import React from "react";

// @ts-ignore
import styles from "./Loader.css";

const Loader: React.FC<{ showLoader: boolean }> = ({ showLoader }) => {
  return <>{showLoader && <div className={styles.coverSpin} />}</>;
};

export default Loader;
