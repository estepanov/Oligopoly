import Property from "./Property"
import Start from "./Start"

import { TileType } from "../../../interfaces/Tile"

export default {
  [TileType.start]: Start,
  [TileType.property]: Property
}