import { CellTileConfiguration } from "../../interfaces/Board"

export enum NextCellDirection {
  top,
  right,
  bottom,
  left
}


// export const getNextCell = (
//   currentCell: CellTileConfiguration,
//   direction: NextCellDirection,
//   property?: string
// ) => {
//   let xDelta
//   let yDelta
//   switch (direction) {

//     case NextCellDirection.top:
//       break;
//     default:
//       break
//   }
//   if (!xDelta || !yDelta) return null
//   if (currentCell.coordinateY <= currentCell.board.maxY && currentCell.coordinateY >= 0) {
//     if (currentCell.coordinateX <= currentCell.board.maxX && currentCell.coordinateX >= 0) {
//       return
//     }
//   }
// }

export const getBorders = (cell: CellTileConfiguration) => {
  return {
    borderBottomColor: !cell.isCorner && cell.isTopRow ? "black" : null,
    borderBottomStyle: !cell.isCorner && cell.isTopRow ? "solid" : null,
    borderBottomSize: !cell.isCorner && cell.isTopRow ? 1 : null,
    borderLeftColor: !cell.isCorner && cell.isRightColumn ? "black" : null,
    borderLeftStyle: !cell.isCorner && cell.isRightColumn ? "solid" : null,
    borderLeftSize: !cell.isCorner && cell.isRightColumn ? 1 : null,
    borderTopColor: !cell.isCorner && cell.isBottomRow ? "black" : null,
    borderTopStyle: !cell.isCorner && cell.isBottomRow ? "solid" : null,
    borderTopSize: !cell.isCorner && cell.isBottomRow ? 1 : null,
    borderRightColor: !cell.isCorner && cell.isLeftColumn ? "black" : null,
    borderRightStyle: !cell.isCorner && cell.isLeftColumn ? "solid" : null,
    borderRightSize: !cell.isCorner && cell.isLeftColumn ? 1 : null,
  }
}

export const getWidth = (cell: CellTileConfiguration) => {
  if (cell.isCorner || cell.isLeftColumn || cell.isRightColumn) return 100
  return 70
}

export const getHeight = (cell: CellTileConfiguration) => {
  if (cell.isCorner || cell.isTopRow || cell.isBottomRow) return 100
  return 70
}