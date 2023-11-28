interface Path {
  name: string;
  route: string;
}

export const usePath = () => {
  let paths: Path[] = [];
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (pathnames.length > 1) {
    if (pathnames[1] === "tables") {
      paths = [{ name: "Коллекции", route: "/app/tables" }];
    }
  }

  return paths;
};
