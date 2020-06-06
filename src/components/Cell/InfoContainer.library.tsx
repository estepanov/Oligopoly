import { CellTileConfiguration } from "../../interfaces/Board"

export const getDirection = (cell: CellTileConfiguration): string => {
  if (cell.isCorner) return "column"
  if (cell.isLeftColumn) return "row-reverse"
  if (cell.isRightColumn) return "row"
  if (cell.isTopRow) return "column-reverse"
  return "column"
}

export const getRotation = (cell: CellTileConfiguration): number => {
  if (cell.isCorner) return 0
  if (cell.isLeftColumn) return 90
  if (cell.isRightColumn) return -90
  return 0
}