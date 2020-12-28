import React from 'react'
import { Table } from 'react-bootstrap'

import DashboardWrapper from 'components/DashboardWrapper'
import H3 from 'components/H3'

const Dashboard = () => (
  <DashboardWrapper pageTitle="Products">
    <H3 className="mb-3">List of Products</H3>
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Strawberry Milktea</td>
          <td>Milktea Cup</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Holy Matcha</td>
          <td>Milktea Cup</td>
        </tr>
      </tbody>
    </Table>
  </DashboardWrapper>
)

Dashboard.propTypes = {}

export default Dashboard
