import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
function Body() {

  const [productState, setProductState] = useState({
    BookingID: '',
    Service: '',
    Assign: '',
    Date: '',
    Customer: '',
    Price: '',
    Status: ''
  })

  const handleOnChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;

    setProductState((prevState) => ({
      ...prevState,
      [name]: value
    }))
    
  }

  const [productData, setProductData] = useState('');
  

  useEffect(() => {
    getAPI(productData)
  },[])

  const getAPI = async () => {
      const url = 'http://localhost:3003/get';
      const data = await axios.get(url)
      .then((res) => res.data)
      .catch((err) => {
        throw err
      })
     setProductData(data)
    }

  const postAPI = async() => {
    const url = 'http://localhost:3003/create';
    await axios.post(url, productState)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        throw err
      })

  }
  console.log(productData)
  
  

  const handleOnSubmit = async(e) => {
    e.preventDefault()
    await postAPI();
    await getAPI();
  }

  return (
    <Fragment>
      <Container>
        <Row>
          <Col xl={12} className="mt-5 mb-5">
            
            <Form inline onSubmit = {(e) => handleOnSubmit(e)}>
              <Col lg = {12} className="d-flex">
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="BookingID" className="mr-sm-2">
                  Booking ID
                </Label>

                <Input
                  type="number"
                  name="BookingID"
                  placeholder="Enter a unique id"
                  value = {productState.BookingID}
                  onChange = {handleOnChange}
                />
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Service" className="mr-sm-2">
                  Service
                </Label>

                <Input
                  type="text"
                  name="Service"
                  placeholder="Enter service name"
                  value = {productState.Service}
                  onChange = {handleOnChange}
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Assign" className="mr-sm-2">
                  Assign
                </Label>

                <Input
                  type="text"
                  name="Assign"
                  placeholder="Assign to?"
                  value = {productState.Assign}
                  onChange = {handleOnChange}
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Date" className="mr-sm-2">
                  Date
                </Label>

                <Input
                  type="date"
                  name="Date"
                  placeholder="Enter Date"
                  value = {productState.Date}
                  onChange = {handleOnChange}
                />


              </FormGroup>

              </Col>

              <Col lg = {12} className="d-flex mt-5">
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Customer" className="mr-sm-2">
                  Customer
                </Label>

                <Input
                  type="number"
                  name="Customer"
                  placeholder="Enter no. of customer"
                  value = {productState.Customer}
                  onChange = {handleOnChange}
                />
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Price" className="mr-sm-2">
                  Price
                </Label>

                <Input
                  type="text"
                  name="Price"
                  placeholder="Enter the price"
                  value = {productState.Price}
                  onChange = {handleOnChange}
                />
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Status" className="mr-sm-2">
                  Status
                </Label>

                <Input
                  type="text"
                  name="Status"
                  placeholder="Status"
                  value = {productState.Status}
                  onChange = {handleOnChange}
                />
              </FormGroup>

              </Col>
             
             <Col lg = {12} className="mt-5 text-center">
             <Button>Submit</Button>
             </Col>
            
             
            </Form>
            
            
          </Col>
        </Row>
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
        </tr>
      </thead>
      <tbody>
      {productData ? (productData.map((value, key) => (
               <tr key = {key}>
               <th scope="row">{value.BookingID}</th>
               <th scope="row">{value.Service}</th>
               <th scope="row">{value.Assign}</th>
               <th scope="row">{value.Date}</th>
               <th scope="row">{value.Customer}</th>
               <th scope="row">{value.Price}</th>
               <th scope="row">{value.Status}</th>
             </tr>
      ))) : ""}
      </tbody>
    </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Body;
