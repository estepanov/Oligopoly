import React from 'react'
import { Flex } from 'rebass'

import InfoContainer from "../InfoContainer"
import { getDirection } from "../InfoContainer.library"
import CellTitle from "../CellTitle"
import { CellTileConfiguration } from "../../../interfaces/Board"

const ContentContainer: React.FC = ({ children }) => (
  <Flex
    flexGrow={1}
  >
    {children}
  </Flex>
)

const StartRender: React.FC<CellTileConfiguration> = (props) => {
  return (
    <Flex
      sx={{
        flexDirection: getDirection(props),
        flexShrink: 0,
        flexGrow: 1,
        backgroundColor: props.color || null,
        // borderStyle: props.color ? "solid" : null,
        // borderWidth: props.color ? "3px" : null,
        // borderColor: props.color || null
      }}
    >
      <InfoContainer cell={props}>
        <CellTitle cell={props} />
      </InfoContainer>
      <ContentContainer>
        {props.children}
      </ContentContainer>

    </Flex>
  )
}

export default StartRender
