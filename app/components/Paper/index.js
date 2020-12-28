import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../global-styles'

const PaperWrapper = styled.div`
  border-radius: 20px;
  background-color: ${colors.white};
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
`

const Paper = ({ children }) => (
  <PaperWrapper className="p-4">{children}</PaperWrapper>
)

Paper.propTypes = {
  children: PropTypes.node,
}

export default Paper
