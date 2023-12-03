import styles from "./CollectionTableImageCell.module.scss";

interface CollectionTableImageCellProps {
  imageIds: string[];
}

function CollectionTableImageCell({ imageIds }: CollectionTableImageCellProps) {
  return (
    <td className={styles.cell}>
      {imageIds.length !== 0
        ? imageIds
            .slice(0, 4)
            .map((id) => (
              <img
                className={styles.image}
                key={id}
                src={`https://files.medievalrain.net/${id}_thumbnail.webp`}
              />
            ))
        : "-"}
    </td>
  );
}

export default CollectionTableImageCell;
