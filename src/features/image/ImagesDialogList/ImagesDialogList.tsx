import DeleteImageDialog from "../DeleteImageDialog/DeleteImageDialog";
import styles from "./ImagesDialogList.module.scss";

interface ImagesDialogListProps {
  imageIds: string[];
  coinId: string;
}

function ImagesDialogList({ imageIds }: ImagesDialogListProps) {
  return (
    <div className={styles.list}>
      {imageIds.map((imageId) => (
        <DeleteImageDialog key={imageId} imageId={imageId} />
      ))}
    </div>
  );
}

export default ImagesDialogList;
