import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BarChartFill, Shop } from 'react-bootstrap-icons'

import AppLogo from 'images/app-logo.png'

import H1 from 'components/H1'
import Paper from 'components/Paper'

import { colors } from '../../global-styles'
import { getPathName } from '../../utils/location'

const StyledLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;

  &:hover {
    color: ${colors.black};
    text-decoration: none;
  }
`

const NavItem = styled.div`
  transition: 0.3s;
  margin-right: -1px;

  &.active,
  &:hover {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: ${colors.secondary};
    * {
      color: ${colors.white};
    }
  }
`

const DashboardWrapper = ({ children, pageTitle }) => {
  const navItems = [
    {
      key: 'dashboard',
      link: '/dashboard',
      title: 'Dashboard',
      icon: <BarChartFill />,
    },
    {
      key: 'products',
      link: '/products',
      title: 'Products',
      icon: <Shop />,
    },
  ]
  const location = getPathName()
  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="full-height bg-primary pt-3 px-0">
          <Image src={AppLogo} fluid className="mb-4 px-4" />
          <div className="nav-items-wrapper">
            {navItems.map(item => {
              const active = item.link === location ? 'active' : ''
              return (
                <StyledLink key={item.key} to={item.link}>
                  <NavItem className={`nav-item py-1 px-2 ${active}`}>
                    <span className="mr-2">{item.icon}</span>
                    <span
                      className="font-weight-600"
                      style={{ verticalAlign: 'text-top' }}
                    >
                      {item.title}
                    </span>
                  </NavItem>
                </StyledLink>
              )
            })}
          </div>
        </Col>
        <Col xs={10} className="full-height bg-white p-4 bg-secondary">
          <H1 className="text-white">{pageTitle}</H1>
          <Paper>{children}</Paper>
        </Col>
      </Row>
    </Container>
  )
}

DashboardWrapper.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
}

export default DashboardWrapper
