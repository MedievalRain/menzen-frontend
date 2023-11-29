interface Path {
  name: string;
  route: string;
}

export const usePath = () => {
  const paths: Path[] = [];
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (pathnames.length > 1) {
    if (pathnames[1] === "collections") {
      paths.push({ name: "Коллекции", route: "/app/collections" });
    }
  }

  return paths;
};
