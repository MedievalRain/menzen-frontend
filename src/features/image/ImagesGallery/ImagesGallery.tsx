import ImageFullDialog from "../ImageFullDialog/ImageFullDialog";
import styles from "./ImagesGallery.module.scss";

interface ImagesGalleryProps {
  imageIds: string[];
}

function ImagesGallery({ imageIds }: ImagesGalleryProps) {
  return (
    <div className={styles.grid}>
      {imageIds.map((id) => (
        <ImageFullDialog key={id} imageId={id} />
      ))}
    </div>
  );
}

export default ImagesGallery;
