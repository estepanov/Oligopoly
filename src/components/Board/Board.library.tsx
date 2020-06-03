// import React from "react"

import { CellConfiguration } from "../../interfaces/Board"


export const buildBoardArray = (rows: number, columns: number):CellConfiguration[][] => {
    const result = [];
    // build rows
    for(let y = 0; y <rows; y++) {
        const row = []
        // build cell
        for(let x = 0; x < columns; x++) {
            const isBottomRow = y === columns - 1;
            const isTopRow =  y === 0;
            const isLeftColumn = x === 0
            const isRightColumn = x === rows - 1
            const isEdge =  isTopRow || isBottomRow || isLeftColumn || isRightColumn
            const isCorner = (isTopRow || isBottomRow) &&  (isLeftColumn || isRightColumn)
            const cell:CellConfiguration = {
                positionX: x,
                positionY: y,
                isBottomRow,
                isTopRow,
                isLeftColumn,
                isRightColumn,
                isEdge,
                isCorner,
            };
            row.push(cell)
        }
        result.push(row)
    }
    return result;
}
