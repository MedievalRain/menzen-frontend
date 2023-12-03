import { PropsWithChildren } from "react";
import styles from "./CollectionTableTip.module.scss";
function CollectionTableTip({ children }: PropsWithChildren) {
  return (
    <tbody>
      <tr>
        <td className={styles.item} colSpan={9999}>
          {children}
        </td>
      </tr>
    </tbody>
  );
}

export default CollectionTableTip;
