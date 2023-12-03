import { PropsWithChildren } from "react";
import styles from "./CollectionTableTip.module.scss";

interface CollectionTableTipProps extends PropsWithChildren {
  columnsCount: number;
}

function CollectionTableTip({
  children,
  columnsCount,
}: CollectionTableTipProps) {
  return (
    <tbody>
      <tr>
        <td className={styles.item} colSpan={columnsCount}>
          {children}
        </td>
      </tr>
    </tbody>
  );
}

export default CollectionTableTip;
