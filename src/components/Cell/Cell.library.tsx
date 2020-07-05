import { CellTileConfiguration, CellConfiguration } from "../../interfaces/Board"

enum BORDER_POS_MAP {
  Top,
  Right,
  Bottom,
  Left
}

export const getNextCell = (
  currentCell: CellTileConfiguration,
  direction: BORDER_POS_MAP,
  property?: keyof CellConfiguration
) => {
  let xDelta = 0;
  let yDelta = 0;
  switch (direction) {

    case BORDER_POS_MAP.Top:
      yDelta = -1;
      break;
    case BORDER_POS_MAP.Right:
      xDelta = 1;
      break;
    case BORDER_POS_MAP.Bottom:
      yDelta = 1;
      break;
    case BORDER_POS_MAP.Left:
      xDelta = -1;
      break;
    default:
      break
  }
  if (!xDelta || !yDelta) return null
  if (currentCell.coordinateY <= currentCell.board.maxY && currentCell.coordinateY >= 0) {
    if (currentCell.coordinateX <= currentCell.board.maxX && currentCell.coordinateX >= 0) {
      return // NEEDS CELL MAP
    }
  }
}

const checkBorderDirection = (cell: CellTileConfiguration, direction: BORDER_POS_MAP) => {

}

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