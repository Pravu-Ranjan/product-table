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
    service: '',
    assign: '',
    date: '',
    customer: '',
    price: '',
    status: ''
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
      const url = 'http://localhost:4000/product';
      const data = await axios.get(url)
      .then((res) => res.data)
      .catch((err) => {
        throw err
      })
     setProductData(data)
    }

  const postAPI = async() => {
    const url = 'http://localhost:4000/product';
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
    setProductState({
      service: '',
    assign: '',
    date: '',
    customer: '',
    price: '',
    status: ''
  
    })
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
                <Label for="service" className="mr-sm-2">
                  Service
                </Label>

                <Input
                  type="text"
                  name="service"
                  placeholder="Enter service name"
                  value = {productState.service}
                  onChange = {handleOnChange}
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="assign" className="mr-sm-2">
                  Assign
                </Label>

                <Input
                  type="text"
                  name="assign"
                  placeholder="Assign to?"
                  value = {productState.assign}
                  onChange = {handleOnChange}
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="date" className="mr-sm-2">
                  Date
                </Label>

                <Input
                  type="date"
                  name="date"
                  placeholder="Enter Date"
                  value = {productState.date}
                  onChange = {handleOnChange}
                />


              </FormGroup>

              </Col>

              <Col lg = {12} className="d-flex mt-5">
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="customer" className="mr-sm-2">
                  Customer
                </Label>

                <Input
                  type="number"
                  name="customer"
                  placeholder="Enter no. of customer"
                  value = {productState.customer}
                  onChange = {handleOnChange}
                />
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="price" className="mr-sm-2">
                  Price
                </Label>

                <Input
                  type="text"
                  name="price"
                  placeholder="Enter the price"
                  value = {productState.price}
                  onChange = {handleOnChange}
                />
              </FormGroup>

              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="status" className="mr-sm-2">
                  Status
                </Label>

                <Input
                  type="text"
                  name="status"
                  placeholder="Status"
                  value = {productState.status}
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
               <th scope="row">{value.bookingID}</th>
               <th scope="row">{value.service}</th>
               <th scope="row">{value.assign}</th>
               <th scope="row">{value.date}</th>
               <th scope="row">{value.customer}</th>
               <th scope="row">{value.price}</th>
               <th scope="row">{value.status}</th>
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
