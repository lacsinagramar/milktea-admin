import React from 'react'
import { Spinner, Table } from 'react-bootstrap'

import DashboardWrapper from 'components/DashboardWrapper'
import H3 from 'components/H3'
import { useQuery } from 'react-query'
import { getProducts } from './queries'

const Dashboard = () => {
  const { data, isLoading, isError } = useQuery('products', getProducts)

  const renderTableData = () => {
    if (isLoading) {
      return (
        <tr className="text-center">
          <td colSpan={3}>
            <Spinner animation="border" variant="primary">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </td>
        </tr>
      )
    }

    if (isError) {
      return (
        <tr>
          <td colSpan={3}>An error has occured</td>
        </tr>
      )
    }

    return data.map(product => (
      <tr>
        <td>{product.id}</td>
        <td>{product.description}</td>
        <td>{product.productTypeId.description}</td>
      </tr>
    ))
  }
  return (
    <DashboardWrapper pageTitle="Products">
      <H3 className="mb-3">List of Products</H3>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Product Type</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </Table>
    </DashboardWrapper>
  )
}

Dashboard.propTypes = {}

export default Dashboard
