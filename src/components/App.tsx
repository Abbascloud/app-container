import { FC, useState } from "react";
import styles from "./styles.module.scss";

export const App: FC = () => {
  const [count, setCount] = useState(0);
  console.log(styles);
  return (
    <div>
      <button
        className={styles.button}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <h2>{count}</h2>
    </div>
  );
};
