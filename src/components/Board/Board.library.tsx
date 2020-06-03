// import React from "react"

import { CellConfiguration } from "../../interfaces/Board"


export const buildBoardArray = (rows: Number, columns: Number):CellConfiguration[][] => {
    const result = [];
    for(let y = 0; y <rows; y++) {
        const row = []
        for(let x = 0; x < columns; x++) {
            const cell:CellConfiguration = {
                positionX: x,
                positionY: y
            } 
            row.push(cell)
        }
        result.push(row)
    }
    return result;
}
