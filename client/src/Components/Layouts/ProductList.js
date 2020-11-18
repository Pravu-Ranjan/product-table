import React, { Fragment } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Col, Container, Row, Table } from "reactstrap";
import { ImCross } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { deleteProduct } from "../../ReduxStore/Actions";

function ProductList() {

  const dispatch = useDispatch()
  let productData = useSelector((state) => state.Product, shallowEqual);
  console.log("prrr>>", typeof productData)
  productData = productData ? productData.product : [];

  const handleEditData = (id) => {
    console.log(id);
  };

  const handleDelete = async(id) => {
    console.log(id);
    await dispatch(deleteProduct(id))
  };

  const productListBody = (productData) =>
    
      productData && productData.map((value, key) => (
          <tr key={key}>
            <td>{ value.bookingID }</td>
            <td> {value.service }</td>
            <td> {value.assign }</td>
            <td> {value.date }</td>
            <td> {value.customer }</td>
            <td> {value.price }</td>
            <td> {value.status }</td>
            <td>
              <span className="d-flex justify-content-around">
                {/* <MdModeEdit
                  className="text-success"
                  onClick={() =>
                    handleEditData( value.bookingID)
                  }
                /> */}
                <ImCross
                  className="text-danger"
                  onClick={() =>
                    handleDelete(value.bookingID)
                  }
                />
              </span>
            </td>
          </tr>
        ))
     

  console.log(productData);
  console.log(typeof productData);
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
              <tbody>{productListBody(productData)}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ProductList;
