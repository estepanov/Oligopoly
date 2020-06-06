import React from 'react'
import { Flex } from 'rebass'

import InfoContainer from "../InfoContainer"
import { getDirection } from "../InfoContainer.library"
import CellTitle from "../CellTitle"
import CellTab from "../CellTab"
import { CellTileConfiguration } from "../../../interfaces/Board"

const ContentContainer: React.FC = ({ children }) => (
  <Flex
    flexGrow={1}
  // flexDirection="column"
  >
    {children}
  </Flex>
)

const PropertyRender: React.FC<CellTileConfiguration> = (props) => {
  return (
    <Flex
      sx={{
        flexDirection: getDirection(props),
        flexShrink: 0,
        flexGrow: 1
      }}
    >
      <InfoContainer cell={props}>
        {!props.isCorner && <CellTab cell={props} />}
        <CellTitle cell={props} />
      </InfoContainer>
      <ContentContainer>
        {props.children}
      </ContentContainer>
      {!props.isCorner && <CellTab cell={props} size={"3px"} />}

    </Flex>
  )
}

export default PropertyRender

