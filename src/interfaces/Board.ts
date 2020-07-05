import { Tile } from "./Tile"
export enum CellTypes {
  leftCorner = 'LEFT'
}

export interface BoardConfig {
  maxX: number;
  maxY: number;
}

export interface CellConfiguration {
  board: BoardConfig;
  coordinateX: number;
  coordinateY: number;
  isTopRow: boolean;
  isBottomRow: boolean;
  isLeftColumn: boolean;
  isRightColumn: boolean;
  isCorner: boolean;
  isEdge: boolean;
  isPlayable?: boolean;
}

export interface CellTileConfiguration extends CellConfiguration, Tile {
}

// export interface 