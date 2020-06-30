import React from "react"
import { Flex } from "rebass"

import { getBorders, getWidth, getHeight } from "./Cell.library"
import { CellTileConfiguration, CellConfiguration } from "../../interfaces/Board"

import cellRenderMap from "./types"

const Cell: React.FC<CellTileConfiguration> = (props) => {
  const CellRender: React.FC<CellConfiguration> = cellRenderMap(props.type)
  return <Flex
    display="inline-flex"
    sx={{
      ...getBorders(props),
      width: getWidth(props),
      height: getHeight(props),
      flexShrink: 0,
    }}
  >
    <CellRender {...props}>
      {props.children}
    </CellRender>
  </Flex>
}

export default Cell;