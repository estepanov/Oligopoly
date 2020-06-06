import { CellConfiguration, CellTileConfiguration } from "../../interfaces/Board"
import { Tile } from "../../interfaces/Tile"

/**
 * Build an unconfigured array that represents the playable space.
 * @param rows The amount of rows in the board
 * @param columns The maount of columns
 */
export const buildBoardArray = (rows: number, columns: number): CellConfiguration[][] => {
  const result = [];
  // build rows
  for (let y = 0; y < rows; y++) {
    const row = []
    // build cell
    for (let x = 0; x < columns; x++) {
      const isBottomRow = y === columns - 1;
      const isTopRow = y === 0;
      const isLeftColumn = x === 0
      const isRightColumn = x === rows - 1
      const isEdge = isTopRow || isBottomRow || isLeftColumn || isRightColumn
      const isCorner = (isTopRow || isBottomRow) && (isLeftColumn || isRightColumn)
      const cell: CellConfiguration = {
        board: {
          maxX: columns - 1,
          maxY: rows - 1
        },
        coordinateX: x,
        coordinateY: y,
        isBottomRow,
        isTopRow,
        isLeftColumn,
        isRightColumn,
        isEdge,
        isCorner,
        isPlayable: false
      };
      row.push(cell)
    }
    result.push(row)
  }
  return result;
}

export interface ConfigureBoardOptions {
  height: number;
  width: number;
  properties: Tile[];
}

const makeCoordKey = (x: number, y: number): string => {
  return `${x}-${y}`
}
/**
 * Build board populated with tiles and cell info
 * @param board 
 * @param configuration 
 */
export const configureBoardArray = (options: ConfigureBoardOptions): CellTileConfiguration[][] => {
  const tileMap = new Map<string, Tile>()
  options.properties.forEach(tile => {
    const key = makeCoordKey(tile.coordinateX, tile.coordinateY)
    if (!tileMap.has(key)) tileMap.set(key, tile)
    else throw new Error("Double coordinate spec!")
  })
  return buildBoardArray(options.height, options.width).map((row, y) => {
    return row.map((cell, x) => {
      const tile = tileMap.get(makeCoordKey(x, y)) || {}
      const CellTile: CellTileConfiguration = {
        ...cell,
        ...tile,
      }
      return CellTile
    });
  });
}