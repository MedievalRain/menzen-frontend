import styles from "./ImagesGallery.module.scss";

interface ImagesGalleryProps {
  imageIds: string[];
}

function ImagesGallery({ imageIds }: ImagesGalleryProps) {
  return (
    <div className={styles.grid}>
      {imageIds.map((id) => (
        <div key={id}>
          <img
            className={styles.image}
            src={`https://files.medievalrain.net/${id}.webp`}
          />
        </div>
      ))}
    </div>
  );
}

export default ImagesGallery;
