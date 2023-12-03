import styles from "./CollectionTableImageCell.module.scss";

interface CollectionTableImageCellProps {
  imageIds: string[];
}

function CollectionTableImageCell({ imageIds }: CollectionTableImageCellProps) {
  return (
    <td className={styles.cell}>
      <div className={styles.gallery}>
        {imageIds.slice(0, 2).map((id) => (
          <img
            className={styles.image}
            key={id}
            src={`https://files.medievalrain.net/${id}_thumbnail.webp`}
          />
        ))}
      </div>
    </td>
  );
}

export default CollectionTableImageCell;
