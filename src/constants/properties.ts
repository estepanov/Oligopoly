import { Tile, TileType, TileGroup } from "../interfaces/Tile"
import { ConfigureBoardOptions } from "../components/Board/Board.library"

export const properties: Tile[] = [
  {
    title: "Start",
    type: TileType.start,
    color: "green",
    coordinateX: 0,
    coordinateY: 0
  },
  {
    title: "Manhatten",
    type: TileType.property,
    group: TileGroup.NEW_YORK,
    color: "blue",
    coordinateX: 1,
    coordinateY: 0
  },
  {
    title: "Brooklyn",
    type: TileType.property,
    group: TileGroup.NEW_YORK,
    color: "blue",
    coordinateX: 2,
    coordinateY: 0
  },
  {
    title: "Blah",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "green",
    coordinateX: 0,
    coordinateY: 1
  },
  {
    title: "BBQ",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "green",
    coordinateX: 0,
    coordinateY: 3
  },
  {
    title: "HOME",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "purple",
    coordinateX: 1,
    coordinateY: 10
  },
  {
    title: "HOM2E",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "purple",
    coordinateX: 3,
    coordinateY: 10
  },
  {
    title: "CARS",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "orange",
    coordinateX: 10,
    coordinateY: 4
  },
]

export const configuration: ConfigureBoardOptions = {
  height: 11,
  width: 11,
  properties
}

