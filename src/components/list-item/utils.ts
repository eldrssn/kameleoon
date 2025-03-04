export const getColorBySiteId = (siteId: number): string => {
  const colors = ['#c2c2ff', '#8686ff', '#e14165'];
  return colors[siteId - 1];
};
