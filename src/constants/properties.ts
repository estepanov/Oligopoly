import { Tile, TileType, TileGroup } from "../interfaces/Tile"
import { ConfigureBoardOptions } from "../components/Board/Board.library"

export const properties: Tile[] = [
  {
    title: "Start",
    type: TileType.start,
    color: "green",
    coordinateX: 0,
    coordinateY: 0,
    isPlayable: true
  },
  {
    title: "Manhatten",
    type: TileType.property,
    group: TileGroup.NEW_YORK,
    color: "blue",
    coordinateX: 1,
    coordinateY: 0,
    isPlayable: true
  },
  {
    title: "Brooklyn",
    type: TileType.property,
    group: TileGroup.NEW_YORK,
    color: "blue",
    coordinateX: 2,
    coordinateY: 0,
    isPlayable: true
  },
  {
    title: "Blah",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "green",
    coordinateX: 0,
    coordinateY: 1,
    isPlayable: true
  },
  {
    title: "BBQ",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "green",
    coordinateX: 0,
    coordinateY: 3,
    isPlayable: true
  },
  {
    title: "HOME",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "purple",
    coordinateX: 1,
    coordinateY: 10,
    isPlayable: true
  },
  {
    title: "HOM2E",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "purple",
    coordinateX: 3,
    coordinateY: 10,
    isPlayable: true
  },
  {
    title: "CARS",
    type: TileType.property,
    group: TileGroup.DALLAS,
    color: "orange",
    coordinateX: 10,
    coordinateY: 4,
    isPlayable: true
  },
]

export const configuration: ConfigureBoardOptions = {
  height: 11,
  width: 11,
  properties
}

