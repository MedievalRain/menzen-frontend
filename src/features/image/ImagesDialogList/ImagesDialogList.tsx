import styles from "./ImagesDialogList.module.scss";

interface ImagesDialogListProps {
  imageIds: string[];
  coinId: string;
}

function ImagesDialogList({ imageIds, coinId }: ImagesDialogListProps) {
  return (
    <div className={styles.list}>
      {imageIds.map((imageId) => (
        <div key={imageId}>
          <div className={styles["image-wrapper"]}>
            <img
              className={styles.image}
              src={`https://files.medievalrain.net/${imageId}_thumbnail.webp`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImagesDialogList;
