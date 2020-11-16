import React, { Fragment } from 'react'
import { useSelector, shallowEqual  } from 'react-redux';
import { Col, Container, Row, Table } from 'reactstrap';
import {ImCross} from 'react-icons/im';
import {MdModeEdit} from 'react-icons/md'

function ProductList() {

    let productData = useSelector((state) => state.Product.product, shallowEqual);
    productData = (productData) ? productData : []

    const handleEditData = (id) => {
        console.log(id)

    }

    const handleDelete = (id) => {
        console.log(id)
    }

    const productListBody = (productData) => (
        productData ? (
            Object.entries(productData).map((value, key) => (
                    <tr key = {key}>
            <td>{value[1] ? value[1].bookingID: ''}</td>
            <td>{value[1] ? value[1].service: ''}</td>
            <td>{value[1] ? value[1].assign: ''}</td>
            <td>{value[1] ? value[1].date: ''}</td>
            <td>{value[1] ? value[1].customer: ''}</td>
            <td>{value[1] ? value[1].price: ''}</td>
            <td>{value[1] ? value[1].status: ''}</td>
            <td><span className="d-flex justify-content-around">
                <MdModeEdit className="text-success" onClick = {() => handleEditData({id: value[1] ? value[1].bookingID: ''})}/> 
                <ImCross className="text-danger" onClick = {() => handleDelete({id: value[1] ? value[1].bookingID: ''})}/>
                </span>
            </td>
            
            
                    </tr>

                   
            ))
        ) : ''
    )



    console.log( productData)
    console.log(typeof(productData))
    return (
        <Fragment>
            <Container>
            <Row>
          <Col xl={12}>
          <Table striped className="mt-5">
      <thead>
        <tr>
          <th>Booking ID</th>
          <th>Service</th>
          <th>Assign</th>
          <th>Date</th>
          <th>Customer</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {productListBody(productData)}
      </tbody>
      
    </Table>
          </Col>
        </Row>
        </Container>
        </Fragment>
    )
}

export default ProductList;
