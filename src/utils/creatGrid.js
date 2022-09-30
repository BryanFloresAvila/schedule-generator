export const createGrid = ({
    totalHeight,
    totalWidth,
    numHorizontaCells,
    numVerticalCells,
}) => {
    const cellHeight = totalHeight / numVerticalCells;
    const cellWidth = totalWidth / numHorizontaCells;

    return {
        cellHeight,
        cellWidth,
        numHorizontaCells,
        numVerticalCells,
        totalHeight,
        totalWidth,
        getRectFromCell(data) { //data: when the data is the information of the cell
            const { endX, endY, startX, startY,spanY,spanX } = data;
            const bottom = endY * this.cellHeight;
            const top = startY * this.cellHeight;
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
            }
        },

    }
}

