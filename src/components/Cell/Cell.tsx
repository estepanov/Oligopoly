import React from "react"
import { Flex } from "rebass"

import { getBorders, getWidth, getHeight } from "./Cell.library"
import { CellTileConfiguration, CellConfiguration } from "../../interfaces/Board"

import CellRenderMap from "./types"

const Cell: React.FC<CellTileConfiguration> = (props) => {
  const CellRender: React.FC<CellConfiguration> = props.type ? CellRenderMap[props.type] : CellRenderMap.start
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