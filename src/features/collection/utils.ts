export const getMaxPage = (coinsCount: number, pageSize: number) => {
  const fullPages = Math.floor(coinsCount / pageSize);
  const hasLastPage = coinsCount % pageSize != 0;
  if (fullPages === 0) {
    return 1;
  }
  if (hasLastPage) {
    return fullPages + 1;
  } else return fullPages;
};
