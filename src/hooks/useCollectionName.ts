import { useEffect, useState } from "react";
import { collectionApi } from "../api/collectionApi/collectionApi";

export const useCollectionName = (collectionId: string | undefined) => {
  const { data: collections, isSuccess } =
    collectionApi.useGetCollectionsQuery();
  const [name, setName] = useState("");
  useEffect(() => {
    const collection = collections?.find(
      (collection) => collection.id === collectionId
    );
    if (collection) {
      setName(collection.name);
    } else {
      setName("");
    }
  }, [collectionId, isSuccess]);

  return name;
};
