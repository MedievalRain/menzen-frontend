import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collectionApi } from "../../../api/collectionApi/collectionApi";
import { useError } from "../../../hooks/useError";

interface Path {
  name: string;
  route: string;
}

export const usePath = () => {
  const {
    data: collections,
    isSuccess,
    isError,
    error,
  } = collectionApi.useGetCollectionsQuery();
  const [paths, setPaths] = useState<Path[]>([]);
  const location = useLocation();
  useError(isError, error);
  useEffect(() => {
    const pathnames = location.pathname
      .split("/")
      .filter((x) => x && x != "app");
    let newPaths: Path[] = [];
    if (pathnames[0] === "collections") {
      newPaths.push({ name: "Коллекции", route: "/app/collections" });
      if (collections && isSuccess) {
        if (pathnames.length > 1) {
          const collection = collections.find(
            (collection) => collection.id === pathnames[1]
          );
          if (collection) {
            newPaths.push({
              name: collection.name,
              route: `/app/collections/${pathnames[1]}`,
            });
          }
        }
      } else {
        newPaths = [];
      }
    }
    if (newPaths.length != 0) setPaths(newPaths);
  }, [location.pathname, isSuccess]);

  return paths;
};
