import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { useLocation } from "react-router-dom";

interface Path {
  name: string;
  route: string;
}

export const usePath = () => {
  const { data: collections, isSuccess } = api.useGetCollectionsQuery();
  const [paths, setPaths] = useState<Path[]>([]);
  const location = useLocation();
  useEffect(() => {
    const pathnames = location.pathname
      .split("/")
      .filter((x) => x && x != "app");
    let newPaths: Path[] = [];
    if (pathnames[0] === "collections") {
      newPaths.push({ name: "Коллекции", route: "/app/collections" });
      if (collections && isSuccess) {
        if (pathnames.length > 1) {
          const table = collections.find((table) => table.id === pathnames[1]);
          if (table) {
            newPaths.push({
              name: table.name,
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
