import Property from "./Property"
import Start from "./Start"

import { TileType } from "../../../interfaces/Tile"
import { CellConfiguration } from "../../../interfaces/Board"

export default (tileType: TileType | undefined): React.FC<CellConfiguration> => {
  switch (tileType) {
    case TileType.property:
      return Property;
    case TileType.start:
    default:
      return Start;
  }
}