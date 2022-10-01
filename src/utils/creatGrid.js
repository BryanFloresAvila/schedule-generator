export const createGrid = ({ totalHeight, totalWidth, numHorizontalCells, numVerticalCells }) => {
  const cellHeight = totalHeight / numVerticalCells;
  const cellWidth = totalWidth / numHorizontalCells;
  return {
    cellHeight,
    cellWidth,
    numHorizontalCells,
    numVerticalCells,
    totalHeight,
    totalWidth,
    getRectFromCell(data) {
      //data: when the data is the information of the cell
      const { endX, endY, startX, startY, spanY, spanX } = data;
      const bottom = endY * this.cellHeight;
      const top = startY * this.cellHeight; // what is "this" here?
      const left = startX * this.cellWidth;
      const right = endX * this.cellWidth;
      const height = spanY * this.cellHeight;
      const width = spanX * this.cellWidth;
      return {
        bottom,
        top,
        left,
        right,
        height,
        width,

        // @TODO: check the math
        startX: startX * this.cellWidth,
        endX: endX * this.cellWidth,
        startY: startY * this.cellHeight,
        endY: endY * this.cellHeight,
      };
    },
  };
};
