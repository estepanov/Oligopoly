export enum TileType {
  start = "start",
  property = "property",
  action = "action"
}

export enum TileGroup {
  NEW_YORK = "NEW_YORK",
  LOS_ANGELES = "LOS ANGELES",
  CHICAGO = "CHICAGO",
  HOUSTON = "HOUSTON",
  PHOENIX = "PHOENIX",
  PHILADELPHIA = "PHILADELPHIA",
  SAN_ANTONIO = "SAN_ANTONIO",
  SAN_DIEGO = "SAN_DIEGO",
  DALLAS = "DALLAS",
}


export interface Tile {
  title?: string,
  type?: TileType,
  group?: TileGroup,
  color?: string,
  coordinateX: number,
  coordinateY: number,
}