import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./state-default-type-main-size.module.css";

type StateDefaultTypeMainSizeType = {
  itemCode?: string;

  /** Style props */
  stateDefaultTypeMainSizeBackgroundColor?: CSSProperties["backgroundColor"];
};

const StateDefaultTypeMainSize: NextPage<StateDefaultTypeMainSizeType> = ({
  itemCode,
  stateDefaultTypeMainSizeBackgroundColor,
}) => {
  const stateDefaultTypeMainSizeStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: stateDefaultTypeMainSizeBackgroundColor,
    };
  }, [stateDefaultTypeMainSizeBackgroundColor]);

  return (
    <div
      className={styles.statedefaultTypemainSize}
      style={stateDefaultTypeMainSizeStyle}
    >
      <img className={styles.iconmenu} alt="" src={itemCode} />
    </div>
  );
};

export default StateDefaultTypeMainSize;
